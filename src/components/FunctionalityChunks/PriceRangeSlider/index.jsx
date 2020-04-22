import React, {Component} from 'react'
import PropTypes from 'prop-types'
import 'react-input-range/lib/css/index.css'

import InputRange from 'react-input-range'

import './styleRange.css'
import styles from './styles.scss'

class Price extends Component {
	state={
		value: {min: 0, max: 0},
		valueRange: {min: 0, max: 0},
		timer: undefined
	}

	setFilterPrice = (data) => {
		this.props.changePrice(data || this.state.value)
	}

	changePriceRange =(data) => {
		// set data for input and range slider
		this.setState({
			value: {
				min: +data.min,
				max: +data.max
			},
			valueRange: {
				min: +data.min,
				max: +data.max
			}
		})

		// if timer exist we clean for start enother timer
		if (this.state.timer) {
			clearTimeout(this.state.timer)
		}

		// start timer re-render with new data
		this.setState({
			timer: setTimeout(
				this.setFilterPrice,
				1000,
				data
			)
		})
	}

	changePriceInner = ({target}) => {
		var regex = /[0-9]|\./

		if (target.value && !regex.test(+target.value)) {
			return
		}

		this.setState({
			value: {
				min: target.name === 'min'
					? +target.value
					: this.state.value.min,
				max: target.name === 'max'
					? +target.value
					: this.state.value.max
			}
		})

		if (this.state.timer) {
			clearTimeout(this.state.timer)
		}

		if (target.name === 'max' && +target.value < this.state.value.min) {
			return
		}

		if (target.name === 'min' && +target.value > this.state.value.max) {
			return
		}

		if (target.value) {
			this.setState({
				valueRange: {
					min: target.name === 'min' ? +target.value : this.state.value.min,
					max: target.name === 'max' ? +target.value : this.state.value.max
				},
				timer: setTimeout(
					this.setFilterPrice,
					1000
				)
			})
		}
	}

	componentWillMount () {
		this.setState({
			value: this.props.value,
			valueRange: this.props.value
		})
	}

	componentWillReceiveProps ({value: {min: minProps, max: maxProps}}) {
		const {min, max} = this.state.value
		if (minProps !== min || maxProps !== max) {
			this.setState({value: {min: minProps, max: maxProps}})
		}
	}

	render () {
		const {
			state: {value, valueRange},
			changePriceInner
		} = this
		return (
			<div className = {styles.wrapperPrice}>
				<div className={styles.result} >
					<div>
						<input
							value={value.min}
							name="min"
							onChange={changePriceInner}
							maxLength={5}
						/>
						<span>
							грн
						</span>
					</div>
					<div>
						<input
							value={value.max}
							onChange={changePriceInner}
							name="max"
							maxLength={5}
						/>
						<span>
							грн
						</span>
					</div>
				</div>
				<form className={styles.form}>
					<InputRange
						maxValue={100000}
						minValue={0}
						formatLabel={value => ``}
						value={valueRange}
						onChange={this.changePriceRange}
					/>
				</form>
			</div>
		)
	}
}

Price.propTypes = {
	min: PropTypes.number,
	max: PropTypes.number,
	value: PropTypes.object,
	changePrice: PropTypes.func,
	onChangeComplete: PropTypes.func
}

export default Price
