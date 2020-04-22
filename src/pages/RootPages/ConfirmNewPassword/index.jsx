import React, {Component} from 'react'
import CSSModules from 'react-css-modules'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'
import {Link} from 'react-router-dom'

import ConfirmPassword from 'src/containers/FormsBox/ConfirmPassword'

import {mapStateToProps, mapActionsToProps} from './redux.js'
import styles from './styles.scss'

@connect(mapStateToProps, mapActionsToProps)
@CSSModules(styles)

class ConfirmNewPassword extends Component {
	render () {
		return (
			<div styleName="ConfirmNewPassword">
				<Helmet>
					<title>{this.props.titleHelmet}</title>
					<link rel="canonical" href={`https://resell.com.ua/reset-password`} />
				</Helmet>
				<h1>Создайте новый пароль</h1>
				<ConfirmPassword onSubmit={this.props.sendNewPassword}/>
				<p>
					Нажимая кнопку «Сохранить и продолжить»,
					вы подтверждаете свое согласие с <Link to={'/confidential'}>Условиями
					предоставления услуг</Link> и <Link to={'/confidential'}>Политикой конфиденциальности.</Link>
				</p>
				<span>Вспомнили пароль? <a href="/auth/login">Вход</a></span>
			</div>
		)
	}
}

ConfirmNewPassword.propTypes = {
	sendNewPassword: PropTypes.func,
	titleHelmet: PropTypes.string
}

export default ConfirmNewPassword
