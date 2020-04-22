import React, {Component} from 'react'
import CSSModules from 'react-css-modules'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'

import Map from '../../components/GoogleMap/index'

import {mapStateToProps, mapActionsToProps} from './redux.js'
import styles from './styles.scss'
import './stylesMap.css'

@connect(mapStateToProps, mapActionsToProps)
@CSSModules(styles, {allowMultiple: true})

class Example extends Component {
	state = {
		geo: false
	}
	componentWillMount () {
		const {images, pushTo} = this.props
		const SCREEN = 1024
		window.innerWidth > SCREEN && pushTo('error-desktop')
		!images[0].image && pushTo('phone')
	}
	componentDidMount () {
	}
	goNext = () => {
		const {
			auth, version, pushInfo,
			infoForSell, pushTo, addAdress
		} = this.props
		const adress = this.inp.value
		const city = this.inpCity.value

		if (auth) {
			pushInfo(infoForSell, version)
			addAdress({adress, city})
		} else {
			pushTo('auth')
			addAdress({adress, city})
		}
	}
	render () {
		const {geo} = this.state
		return (
			<div styleName="geo">
				<input
					ref={inp => (this.inp = inp)}
					styleName={geo ? 'adressUser adress' : 'adressUser'} type="text"
					placeholder={'Текущее месторасположение'}
				/>
				<input
					ref={inp => (this.inpCity = inp)}
					styleName="adressUser" type="text"
					placeholder={'Поиск месторосположения...'}
				/>
				<Map
					self={this}
					googleMapURL={'https://maps.googleapis.com/maps/api/js?key=AIzaSyDyBXmsAGOQq-lE3OgK6825V6iRCDvqV6I'}
					loadingElement={<div style={{ height: `200px` }} />}
					containerElement={<div className={'ggl_map'} />}
					mapElement={<div style={{ height: 100 + '%' }} />}
				/>
				<button
					onClick={this.goNext}
					styleName={geo ? 'createAds active' : 'createAds'}
				>
					Дальше
				</button>
			</div>
		)
	}
}

Example.propTypes = {
	auth: PropTypes.bool,
	pushTo: PropTypes.func,
	pushInfo: PropTypes.func,
	version: PropTypes.number,
	infoForSell: PropTypes.array,
	addAdress: PropTypes.func,
	images: PropTypes.array
}

export default Example
