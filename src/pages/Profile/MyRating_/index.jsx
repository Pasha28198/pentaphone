import React, {Component} from 'react'
import CSSModules from 'react-css-modules'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'

import InfoBar from './components/InfoBar'
import HeaderProfile from './components/ProfileHeader'
import ProfileWrapper from './components/ProfileWrapper'
import UserWrapper from './components/UserWrapper'

import {mapStateToProps, mapActionsToProps} from './redux.js'
import styles from './styles.scss'

@connect(mapStateToProps, mapActionsToProps)
@CSSModules(styles)

class MyRating extends Component {
	state={user: {}, feedbacks: []}

	putFeedBackToState = pk =>
		this.props.fetchFeedBeck(pk)
			.then(({data: {results: feedback}}) =>
				this.setState({feedbacks: feedback}))

	componentDidMount () {
		const {
			props: {userInfo: {pk}, fetchCurrentUser},
			putFeedBackToState
		} = this

		const path = window.location.pathname.split('/')

		if (path[1] === 'user') {
			fetchCurrentUser(path[2])
				.then(({data: user}) => {
					this.setState({user})
					putFeedBackToState(path[2])
					this.props.fetchItems(1)
				})
		} else pk && putFeedBackToState(pk)
	}

	componentWillReceiveProps ({userInfo: {pk}}) {
		const {props: {userInfo}, putFeedBackToState} = this
		const path = window.location.pathname.split('/')[1];
		(userInfo.pk !== pk && path !== 'user') && putFeedBackToState(pk)
	}
	componentWillUnmount () { this.props.cleanCatalog() }

	render () {
		const {
			props: {userInfo, fetchItems, items, count, pages, toomblerFavorite},
			state: {user: currentUser, feedbacks}
		} = this
		const path = window.location.pathname.split('/')[1]

		// checking - is it user or profile, depends on pathname
		const profileUser = path === 'user'
		const user = profileUser ? currentUser : userInfo

		return (
			<div styleName="myRating">
				<If condition={Object.keys(user).length}>
					<HeaderProfile {...{user}}/>
					<InfoBar
						feedback={feedbacks.length}
						date={user['exist_time']}
						goods={count}
					/>
				</If>
				<Choose>
					<When condition={profileUser}>
						<UserWrapper {...{items, feedbacks, pages, fetchItems, toomblerFavorite}} />
					</When>
					<Otherwise>
						<ProfileWrapper {...{feedbacks}}/>
					</Otherwise>
				</Choose>
			</div>
		)
	}
}

MyRating.propTypes = {
	userInfo: PropTypes.object,
	parentProps: PropTypes.object,
	fetchFeedBeck: PropTypes.func,
	fetchCurrentUser: PropTypes.func,
	fetchItems: PropTypes.func,
	pages: PropTypes.number,
	count: PropTypes.number,
	items: PropTypes.array,
	cleanCatalog: PropTypes.func,
	toomblerFavorite: PropTypes.func
}

export default MyRating
