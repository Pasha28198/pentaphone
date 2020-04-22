import React, {Component} from 'react'
import CSSModules from 'react-css-modules'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'

import AcceptForm from '../../components/AcceptForm'

import {mapStateToProps, mapActionsToProps} from './redux.js'
import styles from './styles.scss'

@connect(mapStateToProps, mapActionsToProps)
@CSSModules(styles)

class AcceptRequest extends Component {
	state={payment: 'cash'}
	changePayment = payment => this.setState({payment})

	onSubmit = values => {
		const {
			props: {
				deviceId,
				sendUserInfo,
				updateAdvertisment,
				middlePrice
			},
			state: { payment }
		} = this
		sendUserInfo(values)
			.then(() => updateAdvertisment(values.details, payment, deviceId, middlePrice / 2))
	}

	componentWillMount () {
		const {images, pushTo} = this.props
		const SCREEN = 1024

		window.innerWidth > SCREEN && pushTo('error-desktop');
		(!images[0].image) && pushTo('phone')
	}

	componentWillReceiveProps (nxt) {
		const {images, deviceId, loadImages} = this.props;

		(nxt.deviceId !== deviceId) &&
		loadImages(
			images.reduce((arr, {image, file}) =>
				(image && arr.push(file) && arr) || arr, []),
			nxt.deviceId
		)
	}

	render () {
		const {
			onSubmit, changePayment, state: {payment},
			props: {deviceInfo, middlePrice, images}
		} = this
		return (
			<div styleName="acceptRequest">
				<If condition={Object.keys(deviceInfo).length}>
					<div styleName='titleBlock'>
						<img src={images[0].image && images[0].image.medium} alt=""/>
						<div styleName="contentBlock">
							<p>{`${deviceInfo[0].name} ${deviceInfo[1].name}`}</p>
							<span>{deviceInfo[4].name}</span>
							<span>{middlePrice / 2} <span>грн</span></span>
						</div>
					</div>
				</If>
				<AcceptForm {...{onSubmit, payment, changePayment}}/>
			</div>
		)
	}
}

AcceptRequest.propTypes = {
	loadImages: PropTypes.func,
	deviceId: PropTypes.string,
	images: PropTypes.array,
	deviceInfo: PropTypes.array,
	middlePrice: PropTypes.number,
	sendUserInfo: PropTypes.func,
	updateAdvertisment: PropTypes.func,
	pushTo: PropTypes.func
}

export default AcceptRequest
