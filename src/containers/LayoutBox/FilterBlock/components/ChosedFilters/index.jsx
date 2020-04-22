
import React, {Component} from 'react'
import {connect} from 'react-redux'
import CSSModules from 'react-css-modules'
import PropTypes from 'prop-types'

import {mapStateToProps, mapActionsToProps} from './redux.js'
import styles from './styles.scss'

@connect(mapStateToProps, mapActionsToProps)
@CSSModules(styles)

class ChosedFilters extends Component {
	componentWillUnmount () {
		this.props.clearFilters()
	}
	render () {
		const {filters, clearFilters, deleteFilter} = this.props
		return (
			<div styleName="choosed">
				<h2>Отобрать по</h2>
				<div>
					<For each='item' index='i' of={filters}>
						<If condition={item.value && typeof item.value !== 'object'}>
							<div
								onClick={() => { deleteFilter(item.name, item.value) }}
								key={i}
								styleName="choosed-item"
							>
								{item.value}

								<svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 10" fill="none">
									<path fillRule="evenodd" clipRule="evenodd" d="M6.18849 5.00002L9.75385 1.43465C10.082 1.10646 10.082 0.574344 9.75385 0.246195C9.42566 -0.0820022 8.89359 -0.0820022 8.5654 0.246195L4.99998 3.81161L1.43457 0.246148C1.10637 -0.0820492 0.574308 -0.0820492 0.246112 0.246148C-0.0820373 0.574344 -0.0820373 1.10646 0.246112 1.4346L3.81153 4.99998L0.246112 8.5654C-0.0820373 8.89359 -0.0820373 9.4257 0.246112 9.75385C0.574308 10.082 1.10637 10.082 1.43457 9.75385L4.99998 6.18843L8.5654 9.75385C8.89355 10.082 9.42566 10.082 9.75385 9.75385C10.082 9.42566 10.082 8.89359 9.75385 8.5654L6.18849 5.00002Z" fill="#323B45" fillOpacity="0.5"/>
								</svg>
							</div>
						</If>
						<If condition={typeof item.value === 'object'}>
							<For each='itemInner' index='i' of={item.value}>
								<div
									onClick={() => { deleteFilter(item.name, itemInner) }}
									key={i}
									styleName="choosed-item"
								>
									{itemInner}
									<svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 10" fill="none">
										<path fillRule="evenodd" clipRule="evenodd" d="M6.18849 5.00002L9.75385 1.43465C10.082 1.10646 10.082 0.574344 9.75385 0.246195C9.42566 -0.0820022 8.89359 -0.0820022 8.5654 0.246195L4.99998 3.81161L1.43457 0.246148C1.10637 -0.0820492 0.574308 -0.0820492 0.246112 0.246148C-0.0820373 0.574344 -0.0820373 1.10646 0.246112 1.4346L3.81153 4.99998L0.246112 8.5654C-0.0820373 8.89359 -0.0820373 9.4257 0.246112 9.75385C0.574308 10.082 1.10637 10.082 1.43457 9.75385L4.99998 6.18843L8.5654 9.75385C8.89355 10.082 9.42566 10.082 9.75385 9.75385C10.082 9.42566 10.082 8.89359 9.75385 8.5654L6.18849 5.00002Z" fill="#323B45" fillOpacity="0.5"/>
									</svg>
								</div>
							</For>
						</If>
					</For>
				</div>
				<If condition={Boolean(this.props.existFilters)}>
					<p onClick={clearFilters}>Сбросить все</p>
				</If>
			</div>
		)
	}
}

ChosedFilters.propTypes = {
	filters: PropTypes.array,
	clearFilters: PropTypes.func,
	deleteFilter: PropTypes.func,
	existFilters: PropTypes.number
}

export default ChosedFilters
