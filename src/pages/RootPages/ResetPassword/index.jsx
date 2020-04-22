import React, {Component} from 'react'
import CSSModules from 'react-css-modules'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'

import ResetPasswordForm from 'src/containers/FormsBox/ResetPassword'

import {mapStateToProps, mapActionsToProps} from './redux.js'
import styles from './styles.scss'

@connect(mapStateToProps, mapActionsToProps)
@CSSModules(styles)

class ResetPassword extends Component {
	render () {
		const {sendResetPassword} = this.props
		return (
			<div styleName="resetPassword">
				<Helmet>
					<title>Сброс пароля</title>
					<link rel="canonical" href={`https://resell.com.ua/reset-password`} />
				</Helmet>
				<h1>Сброс пароля</h1>
				<p>
					Введите e-mail, с которым вы регистрировались,
					и мы отправим туда инструкцию по созданию нового пароля.
				</p>
				<ResetPasswordForm onSubmit={sendResetPassword}/>
				<span>
					Или воспользуйтесь формой
					<a href="/auth/registration"> регистрации</a>
				</span>
			</div>
		)
	}
}

ResetPassword.propTypes = {
	sendResetPassword: PropTypes.func
}

export default ResetPassword
