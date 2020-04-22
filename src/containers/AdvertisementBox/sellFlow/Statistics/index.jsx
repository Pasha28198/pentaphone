import React, {Component} from 'react'
import CSSModules from 'react-css-modules'
import {connect} from 'react-redux'
import { Tab } from 'semantic-ui-react'
import PropTypes from 'prop-types'
import numeral from 'numeral'

import './styleSemantic.css'
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
		const {middlePrice} = this.props
		return (
			<div styleName="statisticsWrapper">
				<p>
					Рекомендуемая цена:
					<span>
						{` ${numeral(middlePrice.price).format('0,0').split(',').join(' ')} `}
					</span>
					грн
				</p>
				<section styleName="graphPace">
					<Tab
						styleName="tab"
						{...{menu, panes}}
					/>
				</section>
			</div>
		)
	}
}

Statistics.propTypes = {
	data: PropTypes.array,
	id: PropTypes.string,
	getPriceWizard: PropTypes.func,
	getStatistics: PropTypes.func,
	middlePrice: PropTypes.number,
	toCategory: PropTypes.func
}

export default Statistics
