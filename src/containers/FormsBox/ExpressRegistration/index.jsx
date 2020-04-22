import React, {Component} from 'react'
import CSSModules from 'react-css-modules'
import {connect} from 'react-redux'
import {reduxForm, Field} from 'redux-form'
import PropTypes from 'prop-types'

import emailField from 'components/reduxForm/emailField'
import validate from './validate'

import styles from './styles.scss'
import {mapStateToProps, mapActionsToProps} from './redux.js'

@reduxForm({form: 'fastRegistration', validate})
@connect(mapStateToProps, mapActionsToProps)
@CSSModules(styles)

class ExpressRegistration extends Component {
	render () {
		const {handleSubmit, value, changeState} = this.props
		return (
			<form onSubmit={handleSubmit}>
				<Field
					name="expressRegistration"
					type="text"
					component={emailField}
					label="Email...."
					onChange={changeState}
					value={value}
					styleName="inputEmailPace"
				/>
			</form>
		)
	}
}

ExpressRegistration.propTypes = {
	changeState: PropTypes.func,
	value: PropTypes.string,
	handleSubmit: PropTypes.func
}

export default ExpressRegistration
