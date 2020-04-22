import React, {Component} from 'react'
import PropTypes from 'prop-types'
import CSSModules from 'react-css-modules'

import starGold from 'src/assets/rating/starGold.svg'
import star from 'src/assets/rating/startShadow.svg'

import styles from './styles.scss'

@CSSModules(styles, {allowMultiple: true})

class Rating extends Component {
	state = {
		max: 5
	}
	generateStar = (count) => {
		const {max} = this.state
		let i = 0
		let stars = []
		while (i < max) {
			if (i < count) {
				stars.push(
					<img
						src={starGold}
						alt="starGold"
						key={i}
					/>
				)
			} else {
				stars.push(
					<img
						src={star}
						alt="star"
						key={i}
					/>
				)
			}
			i++
		}
		return stars
	}
	render () {
		const {countRating, size, type} = this.props
		return (
			<div styleName={`Rating${size ? `-${size}` : ``} ${type === 'user' ? `user` : ``}`}>
				{this.generateStar(countRating || 0)}
			</div>
		)
	}
}

Rating.propTypes = {
	countRating: PropTypes.number,
	size: PropTypes.string,
	type: PropTypes.string
}

Rating.defaultValues = {
	type: 'default'
}
export default Rating
