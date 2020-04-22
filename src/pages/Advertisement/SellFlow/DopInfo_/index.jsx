import React, {Component} from 'react'
import CSSModules from 'react-css-modules'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'

import DeviceResultInformation from 'src/containers/AdvertisementBox/sellFlow/deviceResultDopInfo'
import AddPhotos from 'src/components/FunctionalityChunks/AddPhotosBlock'
import Description from 'src/containers/AdvertisementBox/sellFlow/descriptionPace'
import IMEI from 'src/containers/AdvertisementBox/sellFlow/Imei'
import DopInfo from 'src/containers/AdvertisementBox/sellFlow/dopInfo'
import Statistics from 'src/containers/AdvertisementBox/sellFlow/Statistics'
import Price from 'src/containers/AdvertisementBox/PriceBox'
import scrollToElement from 'utills/scrollToElement.js'

import {mapStateToProps, mapActionsToProps} from './redux.js'
import styles from './styles.scss'

@connect(mapStateToProps, mapActionsToProps)
@CSSModules(styles)

class Example extends Component {
	state = {error: ''}

	sendData = () => {
		const {dopInfo, id, verify} = this.props
		const incorrectImei = dopInfo['serial_number'] && dopInfo['serial_number'].length !== 15

		if (incorrectImei) {
			const SCREEN_WIDTH_MIN = 720
			const {inp, inpMob} = this.imei
			scrollToElement(
				window.innerWidth > SCREEN_WIDTH_MIN
					? inp.offsetTop
					: inpMob.offsetTop
			)
			this.setState({error: 'IMEI состоит из 15 символов'})
		} else this.props.nextStep(dopInfo, id, verify)
	}

	render () {
		return (
			<div>
				<h1 styleName="title">Создание объявления (Шаг 2 из 2)</h1>
				<DeviceResultInformation/>
				<div styleName="imageWrapperSellFlow">
					<AddPhotos/>
				</div>
				<Description/>
				<IMEI
					ref={imei => (this.imei = imei)}
					setImey={this.props.setImey} error = {this.state.error}
				/>
				<DopInfo/>
				<Statistics/>
				<p styleName="labelPrice">Установите свою цену</p>
				<Price/>
				<If condition={this.props.imagesExist}>
					<button
						styleName="createAds"
						onClick={this.sendData}
					>
                        Опубликовать
					</button>
				</If>
				<If condition={!this.props.imagesExist}>
					<span styleName="addPhotes">Необходимо загрузить минимум 1 фото</span>
				</If>
			</div>

		)
	}
}

Example.propTypes = {
	imagesExist: PropTypes.bool,
	setImey: PropTypes.func,
	nextStep: PropTypes.func,
	id: PropTypes.string,
	dopInfo: PropTypes.object,
	verify: PropTypes.bool,
	imei: PropTypes.string
}

export default Example
