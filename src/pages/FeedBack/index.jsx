import React, {Component} from 'react'
import CSSModules from 'react-css-modules'
import {connect} from 'react-redux'
import {Button} from 'semantic-ui-react'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'

import starGold from 'src/assets/rating/starGold.svg'
import star from 'assets/rating/startShadow.svg'

import styles from './styles.scss'
import {mapStateToProps, mapActionsToProps} from './redux.js'

@connect(mapStateToProps, mapActionsToProps)
@CSSModules(styles)

class FeedBack extends Component {
	state={rating: [0, 0, 0, 0, 0]}
	handleClick = j => {
		const rating = [0, 0, 0, 0, 0]
		rating.map((item, i) => i <= j && (rating[i] = 1))
		this.setState({rating})
	}
	onClick = () => {
		const {state: {rating}, area: {value: text}, props: {addFeedBack, parentProps: {match}}} = this
		const data = {comment: text}
		data.communication = rating.reduce((sum, item) => (sum += item), 0)
		data.order = match.params.id
		addFeedBack(data)
	}
	render () {
		const {state: {rating}, handleClick, onClick} = this
		return (
			<div styleName="wrapperFeedBack">
				<Helmet>
					<title>Feedback</title>
					<link rel="canonical" href={`https://resell.com.ua/feedback`} />
				</Helmet>
				<h1>Новый отзыв</h1>
				<p>Оцените продавца</p>
				<div styleName="starWrapper">
					<For each='item' index='i' of={rating}>
						<img
							src={item ? starGold : star}
							styleName="star"
							key={i}
							onClick={() => handleClick(i)}
						/>
					</For>
				</div>
				<textarea
					ref={area => (this.area = area)}
					placeholder="Оставьте ваш отзыв"
				/>
				<Button {...{styleName: 'fbBtn', onClick}}>
					Оставить отзыв
				</Button>
			</div>
		)
	}
}

FeedBack.propTypes = {
	match: PropTypes.object,
	addFeedBack: PropTypes.func,
	parentProps: PropTypes.object
}

export default FeedBack
