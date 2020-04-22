import React, {Component} from 'react'
import {connect} from 'react-redux'
import CSSModules from 'react-css-modules'
import PropTypes from 'prop-types'
// import { Helmet } from 'react-helmet'

import styles from './styles.scss'
import { verifyTracking, verifyConfirm } from 'utills/order/sellerConfig.js'
import InfinityPagination from 'components/FunctionalityChunks/InfinityPagination'
import CardOrder from 'components/Chunks/CardOrder'

import {mapStateToProps, mapActionsToProps} from './redux.js'

@connect(mapStateToProps, mapActionsToProps)
@CSSModules(styles)

class MySales extends Component {
	chooseStatus = (statusData) => {
		if (verifyTracking(statusData.statusType)) {
			return statusData.statusFunc(statusData.ttn)
		} else if (verifyConfirm(statusData.statusType)) {
			return statusData.statusFunc(this.props.confirmOrder, this.props.cancelOrder, statusData.kind)
		}

		return statusData.statusFunc()
	}
	componentDidMount () { this.props.getMySales() }
	render () {
		return (
			<div styleName="mySells">
				<InfinityPagination
					pagesCount={this.props.page}
					nextData={this.props.nextPage}
				>
					<For each="item" index="index" of={this.props.data}>
						<CardOrder
							key={index}
							{...item}
							status={this.chooseStatus(item.statusData)}
						/>
					</For>
				</InfinityPagination>
			</div>
		)
	}
}

MySales.propTypes = {
	getMySales: PropTypes.func,
	nextPage: PropTypes.func,
	confirmOrder: PropTypes.func,
	cancelOrder: PropTypes.func,
	data: PropTypes.array,
	page: PropTypes.number
}

export default MySales
