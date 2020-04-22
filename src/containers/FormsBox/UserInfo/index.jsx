import React, {Component} from 'react'
import CSSModules from 'react-css-modules'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'

import {Field} from 'redux-form'
import textField from 'src/components/reduxForm/textField'
import VerifyCode from 'pages/Advertisement/SellFlow/VerifyNumber/components/VerifyCode'
import { createTextMask } from 'redux-form-input-masks'

import {mapStateToProps, mapActionsToProps} from './redux.js'
import styles from './styles.scss'

const phoneMask = createTextMask({pattern: '+38 (999) 999 99 99'})

@connect(mapStateToProps, mapActionsToProps)
@CSSModules(styles)

class Example extends Component {
	render () {
		const {verifyStatus, verifyCode, resend, closeVerify} = this.props
		return (
			<div styleName="userInfo">
				<div styleName="descr">
					<h2>Контактная информация для доставки</h2>
					<p><span>*</span>Все поля нужно заполнять на украинском языке</p>
				</div>
				<div styleName="fieldsWrapper">
					<Field
						name='phone'
						type="text"
						component={textField}
						{...phoneMask}
						label='+38'
					/>
					<VerifyCode
						close={closeVerify}
						verifyStatus={verifyStatus}
						resend={resend}
						type='refactorInfo'
						verifyCode={verifyCode}
					/>
					<Field
						name='lastName'
						type='text'
						component={textField}
						label='Фамилия'
					/>
					<Field
						name='firstName'
						type='text'
						component={textField}
						label='Имя'
					/>
					<Field
						name='middleName'
						type='text'
						component={textField}
						label='Отчество'
					/>
				</div>
			</div>
		)
	}
}

Example.propTypes = {
	verifyStatus: PropTypes.bool,
	verifyCode: PropTypes.func,
	resend: PropTypes.func,
	closeVerify: PropTypes.func
}

export default Example
