import React, {Component} from 'react'
import CSSModules from 'react-css-modules'
import {connect} from 'react-redux'
import {reduxForm, Field} from 'redux-form'
import PropTypes from 'prop-types'

import emailField from 'src/components/reduxForm/loginField'
import validate from './validate'

import styles from './styles.scss'
import {mapStateToProps, mapActionsToProps} from './redux.js'

@connect(mapStateToProps, mapActionsToProps)
@reduxForm({form: 'fastRegistration', validate})
@CSSModules(styles)

class ExpressRegistration extends Component {
	componentWillMount () { sessionStorage.removeItem('resetPassword') }
	render () {
		const {handleSubmit, value, changeState} = this.props
		return (
			<form
				styleName="ResetPasswordForm"
				onSubmit={handleSubmit}
			>
				<Field
					name="email"
					type="text"
					component={emailField}
					label="Email...."
					onChange={changeState}
					value={value}
					styleName="inputEmailPace"
					icon="mail"
				/>

				<button type="submit">
					Отправить ссылку для сброса
				</button>
			</form>
		)
	}
}

ExpressRegistration.propTypes = {
	changeState: PropTypes.func,
	value: PropTypes.string,
	handleSubmit: PropTypes.func,
	email: PropTypes.string
}

export default ExpressRegistration
