import React, {Component} from 'react'
import CSSModules from 'react-css-modules'
import {connect} from 'react-redux'

import CurrentPrice from './components/CurrentPrice'
import RangeSlider from './components/RangeSlider'
import TabDescRange from './components/TabDescRange'
import PropTyes from 'prop-types'

import styles from './styles.scss'
import {mapStateToProps, mapActionsToProps} from './redux.js'

@connect(mapStateToProps, mapActionsToProps)
@CSSModules(styles)

class PriceBox extends Component {
	state = {
		value: 0,
		min: 0,
		max: 0,
		activeIndex: 1,
		middlePrice: 0,
		compare: 0,
		higher: false
	}
	changePrice = (value) => {
		const {
			minLimit, maxLimit,
			props: {setNewPrice},
			state: {middlePrice}
		} = this
		if (value <= minLimit) this.setState({activeIndex: 0, value})
		else if (value >= maxLimit) this.setState({activeIndex: 2, value})
		else this.setState({activeIndex: 1, value})
		this.changeCompare(value, middlePrice)
		setNewPrice(value)
	}
	onTabChange = (e, data) => {
		const {activeIndex} = data
		const {minLimit, maxLimit, props: {middlePrice}} = this
		const value = (!activeIndex) ? minLimit : activeIndex === 2 ? maxLimit : middlePrice
		this.changeCompare(value, middlePrice)
		this.setState({ value, activeIndex })
	}

	changeCompare = (value, middlePrice) => {
		if (value > middlePrice) {
			this.setState({
				compare: middlePrice / value,
				higher: false
			})
		} else {
			this.setState({
				compare: value / middlePrice,
				higher: true
			})
		}
	}

	componentWillReceiveProps ({middlePrice: value, min, max, setNewPrice}) {
		if (value !== this.props.middlePrice) {
			this.setState({value, min, max, middlePrice: value})
			setNewPrice(value)
			this.minLimit = min + (max - min) * 0.333
			this.maxLimit = max - (max - min) * 0.333
		}
	}
	render () {
		const {
			changePrice, onTabChange, props: {middlePrice},
			state: {min, max, value, activeIndex, compare, higher}
		} = this
		return (
			<div styleName="PriceBoxWrapper">
				<CurrentPrice {...{changePrice, value, min, max, middlePrice}} />
				<RangeSlider {...{value, changePrice, min, max}} />
				<TabDescRange {...{activeIndex, onTabChange, compare, current: value, higher}} />
			</div>
		)
	}
}

PriceBox.propTypes = {
	id: PropTyes.string,
	getPriceWizard: PropTyes.func,
	middlePrice: PropTyes.number,
	setNewPrice: PropTyes.func,
	value: PropTyes.number,
	min: PropTyes.number,
	max: PropTyes.number
}

export default PriceBox
