import React from 'react'
import {Field} from 'redux-form'

import emailField from 'components/reduxForm/emailField'

import styles from './styles.scss'

export default () =>
	<div className={styles.inputWrapper}>
		<span>Email</span>
		<Field
			component={emailField}
			name="email"
			label='Введите почту'
		/>
	</div>
