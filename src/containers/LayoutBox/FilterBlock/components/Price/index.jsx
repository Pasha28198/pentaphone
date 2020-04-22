
import React, {Component} from 'react'
import CSSModules from 'react-css-modules'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'

import PriceRangeSlider from 'src/components/FunctionalityChunks/PriceRangeSlider'

import {mapStateToProps, mapActionsToProps} from './redux.js'
import styles from './styles.scss'

@connect(mapStateToProps, mapActionsToProps)
@CSSModules(styles)

class Price extends Component {
	changePrice = (data) => {
		if (data.min !== this.props.minPrice) {
			this.props.setFilterNew('min_price', data.min)
		}
		if (data.max !== this.props.maxPrice) {
			this.props.setFilterNew('max_price', data.max)
		}
	}

	render () {
		const {
			minPrice, maxPrice
		} = this.props

		return (
			<div styleName="Price">
				<h2>Цена</h2>
				<PriceRangeSlider
					min={0}
					max={100000}
					changePrice={this.changePrice}
					value={{
						min: minPrice,
						max: maxPrice
					}}
				/>
			</div>
		)
	}
}

Price.propTypes = {
	minPrice: PropTypes.number,
	maxPrice: PropTypes.number,
	setFilterNew: PropTypes.func
}

export default Price
