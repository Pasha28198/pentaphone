import React, {Component} from 'react'
import CSSModules from 'react-css-modules'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'

import Tab from 'components/FunctionalityChunks/Tab'
import LoginForm from 'containers/FormsBox/LogIn'
import FormBuyer from 'pages/MVP/components/FormBuyer'

import {mapStateToProps, mapActionsToProps} from './redux.js'
import styles from './styles.scss'

@connect(mapStateToProps, mapActionsToProps)
@CSSModules(styles)

class AuthTab extends Component {
	onSubmit = (value) => {
		const {
			expressRegistartion, sendUserInfo, pushInfo,
			infoForSell, version, getUserInfo
		} = this.props
		expressRegistartion(value.email)
			.then(({status}) => {
				sendUserInfo(value)
					.then(() => {
						getUserInfo()
						pushInfo(infoForSell, version)
					})
			})
	}
	onSubmitLogIn = (values) => {
		const {
			infoForSell, pushInfo,
			version, onSubmitLogIn
		} = this.props

		onSubmitLogIn(values)
			.then(() => pushInfo(infoForSell, version))
	}
	componentWillMount () {
		const {auth, pushTo} = this.props
		const SCREEN = 1024
		window.innerWidth > SCREEN && pushTo('error-desktop')
		auth && pushTo('phone')
	}
	render () {
		const {onSubmit, onSubmitLogIn} = this
		return (
			<div styleName="tabWrapper">
				<Tab
					data={[
						{
							name: 'Новый покупатель',
							render: () => <FormBuyer onSubmit={onSubmit}/>
						},
						{
							name: 'Вход в систему',
							render: () => <LoginForm onSubmit={onSubmitLogIn}/>
						}
					]}
				/>
			</div>
		)
	}
}

AuthTab.propTypes = {
	onSubmitLogIn: PropTypes.func,
	expressRegistartion: PropTypes.func,
	sendUserInfo: PropTypes.func,
	infoForSell: PropTypes.array,
	version: PropTypes.number,
	pushInfo: PropTypes.func,
	getUserInfo: PropTypes.func,
	auth: PropTypes.bool,
	pushTo: PropTypes.func
}

export default AuthTab
