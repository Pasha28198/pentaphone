import React, {Component} from 'react'
import CSSModules from 'react-css-modules'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'

// local components
import LabelsList from 'containers/AdvertisementBox/sellFlow/LabelsList'
import LabelSample from 'containers/AdvertisementBox/sellFlow/LabelSample'
import DeviceResult from 'containers/AdvertisementBox/sellFlow/DeviceResult_/index.jsx'
import SampleBlock from 'containers/AdvertisementBox/sellFlow/SampleBlock/index.jsx'
import StaticSampleBlock from 'containers/AdvertisementBox/sellFlow/StaticSampleBlock/index.jsx'
import imageDeviceInfoDefault from 'src/utills/configs/configImageInDeviceInfoSellFlow.js'
import getDataFromQuery from 'utills/catalog/generateObjFromQuery.js'
import pushQuery from 'src/utills/catalog/pushQuery.js'
import AddBlock from '../../components/AddPhotosBlock/index'

import {mapStateToProps, mapActionsToProps} from './redux.js'
import styles from './styles.scss'

@connect(mapStateToProps, mapActionsToProps)
@CSSModules(styles, {allowMultiple: true})

class SellFlow_ extends Component {
	// init default state
	state={step: 'brands', filter: '', last: false, mail: ''}

	// action to push info which was chosen by user and
	// to direct forward the step of sample block
	onClick = sample => {
		// clear filter when item was chosen
		this.setState({filter: ''})
		this.inp && (this.inp.value = '')

		const {
			props: {
				dispatchWrapper, pushInfo,
				data, setImage,
				parentProps: {match: {params: {type}}}
			},
			state: {step}, chooseCurrenStep
		} = this

		// choose current item from redux data depends on active step
		const {item} = chooseCurrenStep(data, step);

		// change main image on sell flow if user choose the model of device
		(sample.image && step === 'model') && setImage(sample.image)

		// checking on step and pk of condition for skipping next step
		if (
			step === 'condition' &&
			(sample.pk === '100' || sample.pk === '400')
		) {
			// push info to redux from current step and next step
			dispatchWrapper(data[item.id + 1].action, data[item.id + 1].data[0].pk)

			pushInfo(sample, item.name, item.label)
			pushInfo(
				data[item.id + 1].data[0],
				data[item.id + 1].name,
				data[item.id + 1].label
			)

			// fetching data which depends on the next step

			// put the step after next step to the state
			this.setState({step: data[item.id + 2].name})
		} else {
			// put active step to the state
			(data[item.id + 1]) && this.setState({step: data[item.id + 1].name})

			// push info to redux when info was chosen by user
			pushInfo(sample, item.name, item.label);

			// add query depends on chosen brand and model
			(step === 'brands') && pushQuery(`?brand=${sample.slug}`);
			(step === 'model') && pushQuery(`${window.location.search}&models=${sample.pk}`)
		}
		// to do action to the next step of sell flow
		(item.action) &&
		dispatchWrapper(
			item.action,
			(step === 'brands') ? sample.slug : type
		)
	}

	onSubmit = () => {
		const {pushToDopInfo, deviceInfoForSell, version} = this.props

		pushToDopInfo(deviceInfoForSell, version)
	}

	onChange = ({target: {value}}) => {
		// cut extra spaces in input value
		const filter = value.split(' ').reduce((arr, item) => {
			item && (arr ? arr += ` ${item}` : arr += item)
			return arr
		}, '')

		// put value to state without extra spaces
		this.setState({filter})
	}

	// add mail to local state when user uses the express registration input
	addMail = ({target: {value}}) => this.setState({mail: value})

	// function for choosing current step depends on active step
	chooseCurrenStep = (data, step) =>
		data.reduce((obj, item) => {
			(item.name === step) && (obj.item = item)
			return obj
		}, {})

	// action in device result to change active step and delete last step
	setStep = step => {
		this.setState({step, last: false, filter: ''})
		this.inp && (this.inp.value = '')
	}

	// take input from child component
	ref = exp => (this.express = exp)

	// choose submit depends on the registration of user
	submitData = () => this.onSubmit();

	// clean data before render component
	componentWillMount () {
		const SCREEN = 1024
		const {parentProps: {match}, pushToError} = this.props
		this.props.cleanCreatedId()
		this.props.cleanCreatedDevice()
		this.props.setImage(imageDeviceInfoDefault[match.params.type]);
		(window.innerWidth >= SCREEN) && pushToError()
	}

	// get first data(brands for sample block)
	componentDidMount () {
		// console.log(fbq)
		const {
			dispatchWrapper,
			parentProps: {match: {params: {type}}},
			data: [{action: fetchModels}, model, versions]
		} = this.props

		const {brand, models} = getDataFromQuery()

		// fetch data if brand is in the query
		if (brand && !models) {
			this.setState({step: model.name})
			dispatchWrapper(fetchModels, brand, true)
		} else if (brand && models) {
			// fetch brand if model and brand is in the query
			this.setState({step: versions.name})
			dispatchWrapper(model.action, models.split('+'), brand)
		} else {
			// fetch brand if query is empty
			this.props.getBrands(type)
		}
	}

	// checking for last step for delete LabelSample and SampleBlock
	componentWillReceiveProps (nxt) {
		if (this.state.step === 'accessories') {
			const {item} = this.chooseCurrenStep(nxt.data, 'accessories')
			const nxtAccs = nxt.deviceInfoForSell.filter(item => item.key === 'accessories')
			const nxtDop = item.data.filter(item => !nxtAccs.some(it => it.pk === item.pk))
			!nxtDop.length && this.setState({last: true})
		}
	}
	scrollTop = () => {
		let scrolled = window.innerHeight
		let	timer
		let scrollToTop = () => {
			if (scrolled > document.documentElement.scrollHeight) {
				window.scrollTo(0, scrolled)
				scrolled = scrolled + 10
				timer = setTimeout(scrollToTop, 100)
			} else {
				clearTimeout(timer)
				window.scrollTo(0, document.documentElement.scrollHeight)
			}
		}
		scrollToTop()
	}
	componentDidUpdate (prev) {
		if (!prev.images[0].image && this.props.images[0].image) {
			this.scrollTop()
		}
	}

	render () {
		// init values from state, props and constructor
		const {
			state: {step, last, filter},
			props: {data, deviceInfoForSell, images},
			chooseCurrenStep, setStep, onClick, onSubmit, onChange
		} = this

		// choose current item from redux data depends on active step
		const {item} = chooseCurrenStep(data, step)
		// filter accessories in device info
		const accs = deviceInfoForSell.filter(item => item.key === 'accessories')

		// choose current data depends on active step and filter items
		// for deleting items in sample block of accessories
		let sampleData = step !== 'accessories'
			? item.data
			: item.data.filter(item => !accs.some(it => it.pk === item.pk))

		if (filter && (step === 'brands' || step === 'model')) {
			sampleData = sampleData.filter(item => {
				const check = item.name.toLowerCase().indexOf(filter.toLowerCase())
				return (!check || check > 0) && item
			})
		}

		return (
			<div>
				<DeviceResult{...{setStep}}/>
				<If condition={!last}>
					<LabelSample {...{item, step, onChange, self: this}}/>
					<Choose>
						<When condition={(sampleData && sampleData.length < 4)}>
							<StaticSampleBlock {...{data: sampleData, onClick}} />
						</When>
						<Otherwise>
							<SampleBlock {...{data: sampleData, onClick}} />
						</Otherwise>
					</Choose>
				</If>
				<If condition={step === 'accessories'}>
					<div styleName="photoDescription">
						<h3>Фото</h3>
						<p>Добавьте фото передней и задней панели, боковин, верхней и нижней части, разъемов, переключателей и видимых повреждений.</p>
					</div>
					<AddBlock/>
				</If>
				<Link to='/buyout/dopInfo'>
					<button styleName={
						images.find(item => !!item.image)
							? 'createAds active'
							: 'createAds'
					}
					onClick={onSubmit}
					>
						Дальше
					</button>
				</Link>
				<LabelsList {...{data, step}}/>
			</div>
		)
	}
}

SellFlow_.propTypes = {
	getBrands: PropTypes.func,
	data: PropTypes.array,
	parentProps: PropTypes.object,
	pushToDopInfo: PropTypes.func,
	pushInfo: PropTypes.func,
	deviceInfoForSell: PropTypes.array,
	version: PropTypes.number,
	cleanCreatedDevice: PropTypes.func,
	cleanCreatedId: PropTypes.func,
	setImage: PropTypes.func,
	dispatchWrapper: PropTypes.func,
	auth: PropTypes.bool,
	fastRegisterUser: PropTypes.func,
	images: PropTypes.array,
	getPriceWizard: PropTypes.func,
	pushToError: PropTypes.func
}

export default SellFlow_
