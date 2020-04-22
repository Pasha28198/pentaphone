import React, {Component} from 'react'
import CSSModules from 'react-css-modules'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'

import {mapStateToProps, mapActionsToProps} from './redux.js'
import styles from './styles.scss'

@connect(mapStateToProps, mapActionsToProps)
@CSSModules(styles)

class Price extends Component {
	state = {
		timer: undefined,
		min: 0,
		max: 0
	}

	componentDidMount () { this.setState({min: this.props.min, max: this.props.max}) }

	setFilterPrice = ({value, key}) => { this.props.setFilterNew(key, value) }

	componentWillReceiveProps ({min, max}) {
		if (this.props.max !== max || this.props.min !== min) {
			this.setState({min: min, max: max})
		}
	}

	changePrice = ({target}) => {
		var regex = /[0-9]|\./

		if (target.value && !regex.test(+target.value)) {
			return
		}

		if (this.state.timer) {
			clearTimeout(this.state.timer)
		}
		this.setState({
			[target.name.split('_')[0]]: target.value,
			timer: setTimeout(
				this.setFilterPrice,
				1000,
				{
					value: target.value,
					key: target.name
				})
		})
	}

	render () {
		const {
			min, max
		} = this.state
		return (
			<div
				styleName="MainFilterToolBar-price"
			>
				<span>Цена</span>
				<input
					name="min_price"
					onChange={this.changePrice}
					value={min}
					placeholder="мин"
					type="text"/>
				<span styleName="MainFilterToolBar-price--space">-</span>
				<input
					name="max_price"
					onChange={this.changePrice}
					value={max}
					placeholder="макс"
					type="text"
				/>
			</div>
		)
	}
}

Price.propTypes = {
	setFilterNew: PropTypes.func,
	min: PropTypes.number,
	max: PropTypes.number
}

export default Price
