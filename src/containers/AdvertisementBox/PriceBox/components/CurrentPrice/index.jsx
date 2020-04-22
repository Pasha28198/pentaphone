import React, {Component} from 'react'
import CSSModules from 'react-css-modules'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'

import styles from './styles.scss'
import {mapStateToProps, mapActionsToProps} from './redux.js'

@connect(mapStateToProps, mapActionsToProps)
@CSSModules(styles)

class CurrentPrice extends Component {
	onChange = e => {
		if (e.target.value < 100 || !e.target.value) {
			this.props.changePrice(100)
			return
		}
		this.props.changePrice(
			typeof parseInt(e.target.value) === 'number' &&
            parseInt(e.target.value) !== 0
				? e.target.value
				: 100
		)
	}
	onKeyPress = e => {
		const key = String.fromCharCode(e.keyCode || e.which)
		if (!/[0-9]/.test(key)) {
			e.returnValue = false
			e.preventDefault()
		}
	}
	render () {
		const {onChange, onKeyPress, props: {value, min, max}} = this
		return (
			<div styleName="CurrentPriceWrapper">
				<div styleName="CurrentPriceWrapper-price">
					<div styleName="CurrentPriceWrapper-value">
						<input {...{onChange, onKeyPress, value: Math.round(value)}} />
					</div>
				</div>
				<div styleName="CurrentPriceWrapper-range">
					<article>{min} грн</article>
					<article>{max} грн</article>
				</div>
			</div>
		)
	}
}

CurrentPrice.propTypes = {
	changePrice: PropTypes.func,
	value: PropTypes.number,
	min: PropTypes.number,
	max: PropTypes.number,
	middlePrice: PropTypes.number
}

export default CurrentPrice
