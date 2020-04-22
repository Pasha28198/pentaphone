import React, {Component} from 'react'
import CSSModules from 'react-css-modules'
import {connect} from 'react-redux'
import {Field, reduxForm} from 'redux-form'
import PropTypes from 'prop-types'
import { createTextMask } from 'redux-form-input-masks'

import validate from './validate'
import phoneField from 'components/reduxForm/mvpPhoneField/'
import textField from 'components/reduxForm/mvpTextField'

import {mapStateToProps, mapActionsToProps} from './redux.js'
import styles from './styles.scss'

@connect(mapStateToProps, mapActionsToProps)
@reduxForm({
	form: 'acceptForm',
	keepDirtyOnReinitialize: true,
	enableReinitialize: true,
	validate
})
@CSSModules(styles, {allowMultiple: true})

class Example extends Component {
	render () {
		const {payment, handleSubmit, changePayment} = this.props
		const phoneMask = createTextMask({pattern: '+38 (999) 999 99 99'})
		return (
			<form onSubmit={handleSubmit}>
				<Field
					name='city'
					component={textField}
					label='Город(Область)'
				/>
				<Field
					name='adress'
					component={textField}
					label='Адрес'
				/>
				<Field
					name='phone'
					component={phoneField}
					label="Телефон"
					type='tel'
					{...phoneMask}
				/>
				<Field
					name='details'
					component={textField}
					label='Примечание для курьера'
					placeholder='Нет примечаний'
				/>
				<span
					onClick={() => changePayment('cash')}
					styleName = {payment === 'cash' ? 'btn active' : 'btn'}
				>
						Наличные
				</span>
				<span
					onClick={() => changePayment('card')}
					styleName = {payment === 'card' ? 'btn active' : 'btn'}
				>
						На карту
				</span>
				<button styleName="accept" type='submit'>
					Подтвердить
				</button>
			</form>
		)
	}
}

Example.propTypes = {
	handleSubmit: PropTypes.func,
	payment: PropTypes.string,
	changePayment: PropTypes.func
}

export default Example
