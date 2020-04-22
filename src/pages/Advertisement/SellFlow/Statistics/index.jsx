import React, {Component} from 'react'
import CSSModules from 'react-css-modules'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import { Button, Tab } from 'semantic-ui-react'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'

import './styleSemantic.css'
import DeviceResult from 'containers/AdvertisementBox/sellFlow/deviceResultDopInfo'
import Graph from 'components/ViewsItems/Graph'
import {mapStateToProps, mapActionsToProps} from './redux.js'
import styles from './styles.scss'

@connect(mapStateToProps, mapActionsToProps)
@CSSModules(styles)

class Statistics extends Component {
	state = {data: []}
	componentWillMount () {
		const {
			data, toCategory,
			getStatistics, id
		} = this.props
		!data.length > 0 && toCategory()
		if (id) {
			getStatistics(id)
				.then(res => {
					this.setState({data: res})
				})
		}
	}
	componentWillReceiveProps ({id, getPriceWizard, getStatistics}) {
		if (id !== this.props.id) {
			getPriceWizard(id)
			getStatistics(id)
				.then(res => {
					this.setState({data: res})
				})
		}
	}
	render () {
		const {data} = this.state
		const panes = [
			{ menuItem: 'Вторичный рынок',
				render: () =>
					<div className={styles.wrapperGraph}>
						<Choose>
							<When condition={Object.keys(data).length}>
								<Graph data={data['price_graph_used']}/>
							</When>
							<Otherwise>
								<div></div>
							</Otherwise>
						</Choose>
					</div>
			},
			{ menuItem: 'Новые',
				render: () =>
					<div className={styles.wrapperGraph}>
						<Choose>
							<When condition={Object.keys(data).length}>
								<Graph data={data['price_graph']}/>
							</When>
							<Otherwise>
								<div></div>
							</Otherwise>
						</Choose>
					</div>
			}
		]
		const menu = { secondary: true, pointing: true }
		return (
			<div styleName="statisticsWrapper">
				<Helmet>
					<title>{this.props.titleHelmet}</title>
					<link rel="canonical" href={`https://resell.com.ua/sell/statistics`} />
				</Helmet>
				<DeviceResult type='list'/>
				<section styleName="graphPace">
					<Tab
						styleName="tab"
						{...{menu, panes}}
					/>
					<article>
						На графике показана динамика
						изменения цен за прошедшие 4
						месяца и прогноз на следующий месяц.
					</article>
				</section>
				<Link
					styleName="btnEmailPace"
					to={`/sell/dop-info`}>
					<Button
						content='Разместить объявление'
						styleName="btnEmailPace"
					/>
				</Link>
			</div>
		)
	}
}

Statistics.propTypes = {
	data: PropTypes.array,
	id: PropTypes.string,
	titleHelmet: PropTypes.string,
	getPriceWizard: PropTypes.func,
	getStatistics: PropTypes.func,
	toCategory: PropTypes.func
}

export default Statistics
