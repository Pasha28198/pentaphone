import React, {Component} from 'react'
import { reduxForm, Field, propTypes as reduxFormTypes } from 'redux-form'
import PropTypes from 'prop-types'
import CSSModules from 'react-css-modules'

import LoginField from 'src/components/reduxForm/loginField'
import validate from './validate'

import styles from './styles.scss'

@CSSModules(styles)

class LogIn extends Component {
	render () {
		const {handleSubmit, err} = this.props
		return (
			<form
				className={styles.wrapperLogin}
				onSubmit={handleSubmit}
			>
				<Field
					name='email'
					type='text'
					icon="mail"
					component={LoginField}
					label='Почта'
				/>
				<If condition={err}>
					<span>{err}</span>
				</If>
				<Field
					icon="password"
					name='password'
					type='password'
					component={LoginField}
					label='Пароль'
				/>
				<button
					styleName="buttonLogin"
					type="submit"
				>
					Войти
				</button>
				<a
					href='/reset-password'
					styleName="resetPasswordTo"
				>
					Забыли пароль?
				</a>
			</form>
		)
	}
}

LogIn.propTypes = {
	...reduxFormTypes,
	send: PropTypes.func,
	handleSubmit: PropTypes.func,
	err: PropTypes.string,
	onChange: PropTypes.func
}

export default reduxForm({
	form: 'login',
	validate
})(LogIn)
