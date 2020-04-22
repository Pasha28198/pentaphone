import React, {Component} from 'react'
import CSSModules from 'react-css-modules'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import { SubmissionError } from 'redux-form'

// local components
import LabelsList from 'containers/AdvertisementBox/sellFlow/LabelsList'
import LabelSample from 'containers/AdvertisementBox/sellFlow/LabelSample'
import DeviceResult from 'containers/AdvertisementBox/sellFlow/DeviceResult_/index.jsx'
import SampleBlock from 'containers/AdvertisementBox/sellFlow/SampleBlock/index.jsx'
import StaticSampleBlock from 'containers/AdvertisementBox/sellFlow/StaticSampleBlock/index.jsx'
import ExpressRegistration from 'containers/FormsBox/ExpressRegistration'
import imageDeviceInfoDefault from 'src/utills/configs/configImageInDeviceInfoSellFlow.js'
import getDataFromQuery from 'utills/catalog/generateObjFromQuery.js'
import pushQuery from 'src/utills/catalog/pushQuery.js'

import {mapStateToProps, mapActionsToProps} from './redux.js'
import styles from './styles.scss'

@connect(mapStateToProps, mapActionsToProps)
@CSSModules(styles)

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
			(sample.pk === '100' || sample.pk === '400' || sample.pk === '300')
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

	onSubmit = value => {
		const {
			pushToDopInfo, deviceInfoForSell, version, fastRegisterUser, auth
		} = this.props

		// check user registration before publish advertisment
		// and registr user if he wasn't registered before publication
		if (auth) pushToDopInfo(deviceInfoForSell, version)
		else {
			return fastRegisterUser(value.expressRegistration)
				.then(({status}) => (status === 201) && pushToDopInfo(deviceInfoForSell, version))
				.catch(({response: {data}}) => {
					if ('email' in data) {
						throw new SubmissionError({expressRegistration: data.email[0]})
					}
				})
		}
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
	submitData = () => this.props.auth ? this.onSubmit() : this.express.submit();

	// clean data before render component
	componentWillMount () {
		const {parentProps: {match}} = this.props
		this.props.cleanCreatedId()
		this.props.cleanCreatedDevice()
		this.props.setImage(imageDeviceInfoDefault[match.params.type])
	}

	// get first data(brands for sample block)
	componentDidMount () {
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
			const nxtAccs = nxt.deviceInfoForSell.filter(item => item.key === 'accessories')

			nxtAccs.length &&
			(nxtAccs.length === nxt.accs.length) &&
			this.setState({last: true})
		}
	}

	render () {
		// init values from state, props and constructor
		const {
			state: {step, last, filter, mail},
			props: {data, deviceInfoForSell, auth},
			chooseCurrenStep, setStep, onClick, onSubmit,
			onChange, ref, submitData, addMail
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
				<h1 styleName="title">Создание объявления (Шаг 1 из 2)</h1>
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
					<If condition={!auth}>
						<div styleName="registWrapper">
							<ExpressRegistration {...{onSubmit, changeState: addMail, value: mail, ref}}/>
						</div>
					</If>
					<button styleName="createAds" onClick={submitData}>
						Узнать стоимость
					</button>
				</If>
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
	accs: PropTypes.array
}

export default SellFlow_
