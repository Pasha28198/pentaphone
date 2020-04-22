import React, {Component} from 'react'
import { reduxForm, Field, propTypes as reduxFormTypes } from 'redux-form'
import PropTypes from 'prop-types'

import LoginField from 'components/reduxForm/loginField'
import PasswordSuccess from 'src/components/Chunks/SuccesPassword'
import validate from './validate'
import styles from './styles.scss'
import CSSModules from 'react-css-modules'

@CSSModules(styles)

class Registration extends Component {
	render () {
		return (
			<form
				styleName='ConfirmPassword'
				onSubmit={this.props.handleSubmit}
			>
				<Field
					icon="password"
					name='new_password1'
					type='password'
					component={LoginField}
					label='Пароль'
				/>
				<PasswordSuccess/>
				<Field
					icon="password"
					name='new_password2'
					type='password'
					component={LoginField}
					label='Повторите пароль'
				/>
				<button type="submit">
					Сохранить и продолжить
				</button>
			</form>
		)
	};
}

Registration.propTypes = {
	...reduxFormTypes,
	send: PropTypes.func,
	handleSubmit: PropTypes.func,
	password: PropTypes.string
}

export default reduxForm({
	form: 'confirmPassword',
	validate
})(Registration)
