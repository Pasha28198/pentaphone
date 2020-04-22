import React, {Component} from 'react'
import CSSModules from 'react-css-modules'
import {connect} from 'react-redux'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

import starGold from 'src/assets/rating/starGold.svg'

import {mapStateToProps, mapActionsToProps} from './redux.js'
import styles from './styles.scss'

@connect(mapStateToProps, mapActionsToProps)
@CSSModules(styles)

class UserInfo extends Component {
	render () {
		const {userId, userName, userRating, verifyUser} = this.props
		return (
			<div styleName="userInfo">
				<div>
					{
						verifyUser
							? 'Надежный продавец:'
							: 'Информация о продавце: '
					}
					<If condition={verifyUser}>
						<img
							src={starGold}
							alt="starGold"
						/>
					</If>
				</div>
				<Link to={`/user/${userId}`}>
					{`${userName} ${userRating ? `(${userRating || 0} / 5)` : ''}`}
				</Link>
			</div>
		)
	}
}

UserInfo.propTypes = {
	userId: PropTypes.string,
	userName: PropTypes.string,
	userRating: PropTypes.number,
	verifyUser: PropTypes.bool
}

export default UserInfo
