import React, {Component} from 'react'
import { reduxForm, Field, propTypes as reduxFormTypes } from 'redux-form'
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types'
import CSSModules from 'react-css-modules'

import LoginField from 'components/reduxForm/loginField'
import PasswordDetector from 'src/components/Chunks/SuccesPassword'

import validate from './validate'
import styles from './styles.scss'

@CSSModules(styles)

class Registration extends Component {
	render () {
		return (
			<form
				styleName='wrapperLogin'
				onSubmit={this.props.handleSubmit}
			>
				<Field
					name='email'
					type='text'
					icon="mail"
					component={LoginField}
					label='Почта'
				/>
				<Field
					icon="password"
					name='password1'
					type='password'
					component={LoginField}
					label='Пароль'
				/>
				<PasswordDetector/>
				<Field
					icon="password"
					name='password2'
					type='password'
					component={LoginField}
					label='Подтверждение пароля'
				/>
				<p>
					Регистрируясь, я соглашаюсь с <Link to="/confidential">Правилами использования сервиса </Link>
					и даю согласие на обработку персональных данных. Я подтверждаю свое
					совершеннолетие.
				</p>
				<button
					styleName="buttonLogin"
					type="submit"
				>
					Создать аккаунт
				</button>
			</form>
		)
	};
}

Registration.propTypes = {
	...reduxFormTypes,
	send: PropTypes.func,
	handleSubmit: PropTypes.func
}

export default reduxForm({
	form: 'registration',
	validate
})(Registration)
