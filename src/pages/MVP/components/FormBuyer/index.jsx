import React, {Component} from 'react'
import CSSModules from 'react-css-modules'
import {reduxForm, Field} from 'redux-form'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import { createTextMask } from 'redux-form-input-masks'

import textField from 'components/reduxForm/textField'
import phoneField from 'components/reduxForm/phoneField'

import {mapStateToProps, mapActionsToProps} from './redux.js'
import styles from './styles.scss'
import validate from './validate'

@connect(mapStateToProps, mapActionsToProps)
@reduxForm({
	form: 'newBuyer',
	keepDirtyOnReinitialize: true,
	enableReinitialize: true,
	validate
})
@CSSModules(styles, {allowMultiple: true})

class FormBuyer extends Component {
	render () {
		const phoneMask = createTextMask({pattern: '+38 (999) 999 99 99'})
		const {handleSubmit, goBack} = this.props
		return (
			<form styleName="formBuyer" onSubmit={handleSubmit}>
				<Field
					name='name'
					type='text'
					component={textField}
					label='Имя'
				/>
				<Field
					name='phone'
					component={phoneField}
					verifyVisible={true}
					verify={true}
					label="Phone number"
					{...phoneMask}
				/>
				<Field
					name='email'
					type='text'
					component={textField}
					label='Почта'
				/>
				<Field
					name='city'
					type='text'
					component={textField}
					label='Город'
				/>
				<Field
					name='adress'
					type='text'
					component={textField}
					label="Адрес"
				/>
				<button styleName="createAds">Зарегистрироваться</button>
				<span
					onClick={goBack}
					styleName="createAds white"
				>
					Отменить
				</span>
			</form>
		)
	}
}

FormBuyer.propTypes = {
	handleSubmit: PropTypes.func,
	goBack: PropTypes.func
}

export default FormBuyer
