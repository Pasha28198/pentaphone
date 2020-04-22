import React, {Component} from 'react'
import CSSModules from 'react-css-modules'
import {Button} from 'semantic-ui-react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'

import clock from 'assets/svg/clock.svg'
import auction from 'assets/svg/auction.svg'

import styles from './styles.scss'
import {mapStateToProps, mapActionsToProps} from './redux.js'

@connect(mapStateToProps, mapActionsToProps)
@CSSModules(styles)

class Auction extends Component {
	componentDidMount () {
		const {id, redirectToCategories} = this.props
		!id && redirectToCategories()
	}
	render () {
		const {toThYouPage: onClick} = this.props
		return (
			<div styleName='wrapperAuction'>
				<h2>Аукцион</h2>
				<div styleName='imageWrapper'>
					<img src={auction} alt=""/>
				</div>
				<p>
					Не можете правильно оценить телефон? Разместите его на аукционе! Десятки покупателей в конкурентной борьбе определят максимальную цену вашего смартфона.
				</p>
				<h3>
					<img src={clock} alt=""/>
					Аукцион длится 24 часа
				</h3>
				<div styleName="buttonWrapper">
					<Link to='/sell/creating-details-bergain'>
						<Button styleName='withAuc'>
							Выставить на аукцион
						</Button>
					</Link>
					<Button {...{styleName: 'withoutAuc', onClick}}>
						Разместить без аукциона
					</Button>
				</div>
			</div>
		)
	}
}

Auction.propTypes = {
	toThYouPage: PropTypes.func,
	redirectToCategories: PropTypes.func,
	id: PropTypes.string
}

export default Auction
