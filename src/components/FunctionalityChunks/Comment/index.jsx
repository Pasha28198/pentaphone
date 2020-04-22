import React from 'react'
import CSSModules from 'react-css-modules'
import PropTypes from 'prop-types'

import Rating from 'components/Chunks/Rating'
import {ToComents} from 'utills/dateParser.js'

import styles from './styles.scss'

const Comment = ({item, type}) =>
	<div styleName={type === 'feedback' ? 'Comment feedback' : 'Comment'}>
		<div styleName="Comment-label">
			<div>
				<span>{item.user['first_name']}</span>
				<Rating countRating={item.user.rating}/>
				<If condition={type === 'feedback'}>
					<div styleName="ratingNumbers">{item.user.rating}</div>
				</If>
			</div>
		</div>
		<div styleName="contentWrapper">
			<div styleName="date">
				{ToComents(item['created_at'])}
			</div>
			<p styleName="Comment-content">
				{item.comment}
			</p>
		</div>

	</div>

Comment.propTypes = {
	item: PropTypes.object,
	type: PropTypes.string
}
Comment.defaultProps = {
	type: 'comment'
}

export default CSSModules(Comment, styles, { allowMultiple: true })
