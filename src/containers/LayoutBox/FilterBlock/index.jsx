import React, {Component} from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'

import Price from './components/Price'
import DeviceInfo from './components/DeviceInfo'
import Conditions from './components/Conditions'
import ChooseFilter from './components/ChosedFilters'
import Memory from './components/Memory'
import Colors from './components/Color'
import close from './close.svg'

import {mapStateToProps, mapActionsToProps} from './redux.js'
import './index.css'

@connect(mapStateToProps, mapActionsToProps)

class FilterBlock extends Component {
	close = () => {
		this.filter.classList.add('FilterSide--close')
		this.filter.classList.remove('FilterSide--open')
		document.body.style.overflow = 'scroll'
		document.body.style.position = 'static'
	}
	render () {
		return (
			<div
				ref = { (elem) => { this.filter = elem } }
				className="FilterSide"
				onClick={this.close}
			>
				<div
					onClick={(e) => { e.stopPropagation() }}
					className="FilterSide-main"
				>
					<div className="FilterSide-title">
						<div>
							<img
								src={close}
								alt="close"
								onClick={this.close}
							/>
							<span>Фильтры</span>
						</div>
						<If condition={Boolean(this.props.existFilters)}>
							<span
								onClick={this.props.clearFilters}
							>
								Сбросить все
							</span>
						</If>
					</div>
					<ChooseFilter/>
					<Price/>
					<DeviceInfo/>
					<Conditions/>
					<Colors/>
					<Memory/>
				</div>
			</div>
		)
	}
}

FilterBlock.propTypes = {
	clearFilters: PropTypes.func,
	existFilters: PropTypes.number
}

export default FilterBlock
