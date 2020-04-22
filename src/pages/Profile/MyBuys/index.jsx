import React, {Component} from 'react'
import {connect} from 'react-redux'
import CSSModules from 'react-css-modules'
import PropTypes from 'prop-types'
// import { Helmet } from 'react-helmet'

import styles from './styles.scss'
import { verifyPay, verifyTracking, verifyFeedBack } from 'utills/order/BuyerConfigs.js'
import InfinityPagination from 'components/FunctionalityChunks/InfinityPagination'
import CardOrder from 'components/Chunks/CardOrder'

import {mapStateToProps, mapActionsToProps} from './redux.js'

@connect(mapStateToProps, mapActionsToProps)
@CSSModules(styles)

class MySales extends Component {
	chooseStatus = (statusData) => {
		if (verifyPay(statusData.statusType)) {
			return statusData.statusFunc(() => { this.props.payMoney(statusData.orderId) })
		} else if (verifyTracking(statusData.statusType)) {
			return statusData.statusFunc(statusData.ttn)
		} else if (verifyFeedBack(statusData.statusType)) {
			return statusData.statusFunc(() => { this.props.addFeedBack(statusData.orderId) })
		}

		return statusData.statusFunc()
	}
	componentDidMount () { this.props.getMySales() }
	render () {
		const { data } = this.props
		return (
			<div styleName="mySells">
				<InfinityPagination
					pagesCount={this.props.page}
					nextData={this.props.nextPage}
				>
					<For each="item" index="index" of={data}>
						<CardOrder
							key={index}
							{...item}
							remove={() => { this.props.removeOrder(item.id) }}
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
	removeOrder: PropTypes.func,
	payMoney: PropTypes.func,
	addFeedBack: PropTypes.func,
	data: PropTypes.array,
	page: PropTypes.number,
	nextPage: PropTypes.func
}

export default MySales
