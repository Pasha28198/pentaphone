import React, {Component} from 'react'
import CSSModules from 'react-css-modules'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'

import Ok from 'src/assets/rating/active.svg'
import Minus from 'src/assets/rating/pic.svg'
import Resume from 'src/assets/rating/Resume.svg'
import GoldStart from 'src/assets/rating/starGold.svg'
import startShadow from 'src/assets/rating/startShadow.svg'

import {mapStateToProps, mapActionsToProps} from './redux.js'
import styles from './styles.scss'

@connect(mapStateToProps, mapActionsToProps)
@CSSModules(styles)

class TelephoneRating extends Component {
	state = {
		ratingArr: []
	}
	componentDidMount () {
		const arr = []
		if (!this.props.rating) {
			this.setState({ratingArr: arr})
			return
		}
		for (let i = 1; i < 6; i++) {
			arr[i] = i < +this.props.rating.rating ? 1 : 0
		}
		this.setState({ratingArr: arr})
	}
	componentWillReceiveProps ({rating}) {
		if (rating !== this.props.rating && rating && rating.rating) {
			const arr = []
			for (let i = 1; i < 6; i++) {
				arr[i] = i < rating.rating ? 1 : 0
			}
			this.setState({ratingArr: arr})
		}
	}
	render () {
		const { rating, name } = this.props
		const { ratingArr } = this.state

		if (!rating || !Object.keys(rating).length) {
			return (
				<div></div>
			)
		}

		return (
			<div styleName="Rating">
				<div styleName="ratingBox">
					<For each="item" index="index" of={ratingArr}>
						<If key={index} condition={item}>
							<img styleName="star" src={GoldStart} alt="GoldStart"/>
						</If>
						<If key={index} condition={!item}>
							<img styleName="star" src={startShadow} alt="GoldStart"/>
						</If>
					</For>
					<span styleName="ratingNumber">{rating && rating.rating}</span>
				</div>
				<h2>Рейтинг {name.split(' ').splice(1, 2).join(' ')}</h2>
				<p>После года использования</p>
				<div styleName="Rating-block">
					<div><img styleName="status" src={Ok} alt="Ok"/> <h3>Причины купить</h3></div>
					<If condition={rating.plus}>
						<For each="item" index="index" of={rating.plus.split('<br>').splice(1)}>
							<p styleName="Rating-block-item" key={index}>
								- {item}
							</p>
						</For>
					</If>
				</div>
				<div styleName="Rating-block">
					<div><img styleName="status" src={Minus} alt="Minus"/><h3>Причины отказаться</h3></div>
					<If condition={rating.minus}>
						<For each="item" index="index" of={rating.minus.split('<br>').splice(1)}>
							<p styleName="Rating-block-item" key={index}>
								- {item}
							</p>
						</For>
					</If>
				</div>
				<div styleName="Rating-block">
					<div><img styleName="status" src={Resume} alt="Resume"/><h3>Резюме</h3></div>
					<If condition={rating.conclusion}>
						<For each="item" index="index" of={rating.conclusion.split('<br>')}>
							<p styleName="Rating-block-item" key={index}>
								- {item}
							</p>
						</For>
					</If>
				</div>
			</div>
		)
	}
}

TelephoneRating.propTypes = {
	rating: PropTypes.object,
	name: PropTypes.string
}

export default TelephoneRating
