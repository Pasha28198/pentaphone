import React, {Component} from 'react'
import CSSModules from 'react-css-modules'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import { Tab } from 'semantic-ui-react'

import configs from './configs'
import TabPane from './components/Tab'
import './semantic.css'
import styles from './styles.scss'
import {mapStateToProps, mapActionsToProps} from './redux.js'

@connect(mapStateToProps, mapActionsToProps)
@CSSModules(styles)

class TabDescRange extends Component {
	render () {
		const {
			activeIndex,
			onTabChange,
			current,
			compare,
			higher
		} = this.props
		const menu = { secondary: true, pointing: true }
		const {
			instantRedemption,
			fastBuy,
			profitableSale
		} = configs
		const panes = [
			{
				menuItem: 'Мгновенно',
				render: () =>
					<TabPane
						mainText = {instantRedemption}
						compare = {compare}
						current = {current}
						higher = {higher}
					/>
			},
			{
				menuItem: 'Быстро',
				render: () =>
					<TabPane
						mainText={fastBuy}
						compare = {compare}
						current = {current}
						higher = {higher}
					/>
			},
			{
				menuItem: 'Выгодно',
				render: () =>
					<TabPane
						mainText={profitableSale}
						compare = {compare}
						current = {current}
						higher = {higher}
					/>
			}
		]
		return (
			<div className="TabDescRangeWrapper">
				<Tab {...{activeIndex, onTabChange, panes, menu}} />
			</div>
		)
	}
}

TabDescRange.propTypes = {
	activeIndex: PropTypes.number,
	onTabChange: PropTypes.func,
	current: PropTypes.number,
	compare: PropTypes.number,
	higher: PropTypes.bool
}

export default TabDescRange
