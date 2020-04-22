import React, { Component } from 'react'
import CSSModules from 'react-css-modules'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'

import PhotoBlock from 'components/FunctionalityChunks/AddPhotosBlock'
import EditPrice from 'src/containers/AdvertisementBox/EditDevice/EditPrice'
import EditDopInfoCheckBox from 'src/containers/AdvertisementBox/EditDevice/EditDopInfoCheckBox'
import EditDopInfoSampleBlock from 'src/containers/AdvertisementBox/EditDevice/EditDopInfoSampleBlock'
import Imei from 'src/containers/AdvertisementBox/EditDevice/Imei'
import NoImage from 'src/assets/forDevelop/nophoto.jpg'

import {mapStateToProps, mapActionsToProps} from './redux.js'
import styles from './styles.scss'
import initializeState from './intializeState.js'

@connect(mapStateToProps, mapActionsToProps)
@CSSModules(styles)

class EditDevice extends Component {
	state = {
		price: 0,
		details: '',
		serialNumber: '',
		condition: 100,
		visualCondition: 100,
		isWarranty: false,
		isBargain: false,
		isOwner: false,
		isReview: false,
		startPrice: 0,
		isBet: true
	}

	patchNewDataEboutDevice = () => {
		const {
			props: { edit, parentProps: {match} },
			state
		} = this

		edit(state, match.params.id)
	}

	/**
	 * universal function for change dopInfo about device
	 *
	 * @props :
	 * key - key field which you want change
	 * value - how you want chage this key
	*/

	changeDopInfo = (key, value) => {
		this.setState({[key]: value})
	}

	// fetch data about device
	componentDidMount () {
		const {
			getDeviceInfo,
			parentProps: {match: {params}}
		} = this.props

		getDeviceInfo(params.id)
	}

	// initialization data for edit device
	componentWillReceiveProps ({ data }) {
		if (this.props.data !== data) {
			this.setState(initializeState(data))
		}
	}

	// clean image in cash for reusable component PhotoBlock
	componentWillUnmount () { this.props.clearImages() }

	render () {
		const {

			props: {
				title, parentProps: {match},
				thumbnail
			},

			state: {
				details, isWarranty,
				isBargain, isOwner,
				isReview, serialNumber,
				visualCondition,
				price, condition
			},

			changeDopInfo,
			patchNewDataEboutDevice

		} = this

		const mainInfo = {
			isWarranty,
			isBargain,
			isOwner,
			isReview,
			serialNumber
		}
		return (
			<div styleName="EditDeviceWrapper">

				<Helmet>
					<title>ReSell - Подать объявление о продаже телефона. Бесплатное объявление {match.params.id}</title>
					<link rel="canonical" href={`https://resell.com.ua/edit-device/${match.params.id}`} />
				</Helmet>

				<h2>{title}</h2>

				<img
					src={thumbnail || NoImage}
					alt="thumbnail"
					styleName="thumbnail"
				/>

				<div styleName="imageWrapperEditDevice">
					<PhotoBlock/>
				</div>

				<EditPrice
					{...{
						price,
						changePrice: changeDopInfo
					}}
				/>

				<EditDopInfoCheckBox
					value={mainInfo}
					changeCheckBox={changeDopInfo}
				/>

				<Imei
					value={mainInfo}
					changeCheckBox={changeDopInfo}
				/>

				<EditDopInfoSampleBlock
					{...{
						visualCondition,
						condition,
						details,
						changeDopInfo
					}}
				/>

				<button
					styleName="subBtn"
					onClick={patchNewDataEboutDevice}
				>
					Далее
				</button>

			</div>
		)
	}
}

EditDevice.propTypes = {
	parentProps: PropTypes.object,
	getDeviceInfo: PropTypes.func,
	clearImages: PropTypes.func,
	title: PropTypes.string,
	edit: PropTypes.func,
	thumbnail: PropTypes.string,
	data: PropTypes.object,
	titleHelmet: PropTypes.string
}

export default EditDevice
