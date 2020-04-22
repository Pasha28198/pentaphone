import React, {Component} from 'react'
import { Field } from 'redux-form'
import PropTypes from 'prop-types'
import CSSModules from 'react-css-modules'
import {connect} from 'react-redux'
import { createTextMask } from 'redux-form-input-masks'

import orderField from 'src/components/reduxForm/orderField'

import {mapStateToProps, mapActionsToProps} from './redux.js'
import styles from './styles.scss'

const phoneMask = createTextMask({pattern: '+38 (999) 999 99 99'})

@connect(mapStateToProps, mapActionsToProps)
@CSSModules(styles)

class ContactInfo extends Component {
	render () {
		return (
			<div className={styles.ContactInfo}>
				<p>Контактная информация для
					<p styleName="mob"> «Нова пошта»</p> <br/>
					<p styleName="desc"> доставки с помощью «Нова пошта»</p>
					<span><span>*</span>Все поля нужно заполнять на украинском языке</span>
				</p>
				<div styleName="wrapper">
					<Field
						name='phone'
						type='text'
						component={orderField}
						{...phoneMask}
						label='+38'
					/>
					<Field
						name='last_name'
						type='text'
						component={orderField}
						label='Введите фамилию'
					/>
					<Field
						name='first_name'
						type='text'
						component={orderField}
						label='Введите имя'
					/>
					<Field
						name='middle_name'
						type='text'
						component={orderField}
						label='Введите отчество'
					/>
				</div>
			</div>
		)
	}
}

ContactInfo.propTypes = {
	firstName: PropTypes.string,
	phoneNumber: PropTypes.string,
	sendSms: PropTypes.func,
	phoneInRedux: PropTypes.string,
	lastName: PropTypes.string,
	middleName: PropTypes.string
}

export default ContactInfo
