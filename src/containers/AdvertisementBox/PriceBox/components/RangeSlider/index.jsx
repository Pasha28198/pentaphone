import React, {Component} from 'react'
import CSSModules from 'react-css-modules'
import PropTypes from 'prop-types'
import Slider from 'range-slider-resell'

import './styleRange.css'
import styles from './styles.scss'

@CSSModules(styles, {allowMultiple: true})

class RangeSlider extends Component {
	state = { height: false }
	onChange = value => this.props.changePrice(value || 100)
	onChangeStart = () => this.setState({height: true})
	onChangeComplete = () => this.setState({height: false})
	render () {
		const {
			onChange, onChangeStart, onChangeComplete,
			props: {min, max, value}, state: {height}
		} = this
		return (
			<div styleName="RangeSliderWrappers">
				<Slider {...{min, max, value, onChange, onChangeStart, onChangeComplete}}/>
				<div styleName = {height ? 'rangeLine height' : 'rangeLine'}>
					<div></div>
					<div></div>
					<div></div>
				</div>
			</div>
		)
	}
}

RangeSlider.propTypes = {
	changePrice: PropTypes.func,
	value: PropTypes.number,
	min: PropTypes.number,
	max: PropTypes.number
}

export default RangeSlider
