import React from 'react'
import PropTypes from 'prop-types'
import CSSModules from 'react-css-modules'

import Rating from 'src/components/Chunks/Rating'
import {ToComents} from 'utills/dateParser.js'
import user from 'assets/svg/User.png'

import styles from './styles.scss'

function ItemComent (props) {
	const {data, bet, type} = props
	return (
		<div
			styleName={
				type !== 'feedback'
					? 'wrapperItemComment'
					: 'wrapperItemComment feed'
			}
		>
			<div styleName='userInfo'>
				<div styleName='imgWrapper'>
					<img
						src={data.user.photo || user}
						alt="userIcon"/>
				</div>
				<div>
					<h2
						styleName={
							type !== 'feedback'
								? 'userInfoName'
								: 'userInfoName feed'
						}
					>
						{data.user['first_name'] || 'User'}
					</h2>
					<div
						styleName={
							type !== 'feedback'
								? 'userFavorites'
								: 'userFavorites-feed'
						}
					>
						<Rating
							size={'middle'}
							styleName='rating'
							countRating={+data.user.rating || 0}
						/>
					</div>
					<h4
						styleName={
							type !== 'feedback'
								? 'userInfoDate'
								: 'userInfoDate feed'
						}
					>
						{ToComents(data['created_at'])}
					</h4>
					<div
						styleName={
							type !== 'feedback'
								? 'userDescription'
								: 'userDescription feed'
						}
					>
						<p>
							{!bet ? data.comment : (+data.price + 0) + ' грн'}
						</p>
					</div>
				</div>
			</div>
		</div>
	)
}

ItemComent.propTypes = {
	data: PropTypes.object,
	bet: PropTypes.bool,
	type: PropTypes.string
}
ItemComent.defaultProps = {
	type: 'comments'
}

export default CSSModules(ItemComent, styles, {allowMultiple: true})
