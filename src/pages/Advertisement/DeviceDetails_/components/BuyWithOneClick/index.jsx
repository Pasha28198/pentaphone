import React, {Component} from 'react'
import CSSModules from 'react-css-modules'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import { reduxForm, Field } from 'redux-form'
import { createTextMask } from 'redux-form-input-masks'

import PhoneField from 'components/reduxForm/phoneField'
import expressPhone from 'assets/express_modal_phone.png'
import closeImg from 'assets/icons/closeImg.png'
import validate from './validate'

import {mapStateToProps, mapActionsToProps} from './redux.js'
import styles from './styles.scss'

@connect(mapStateToProps, mapActionsToProps)
@reduxForm({
	form: 'sendPhone',
	validate
})
@CSSModules(styles, {allowMultiple: true})

class Example extends Component {
	state={keyboard: false}
	componentDidMount () {
		const heightOld = window.innerHeight
		window.addEventListener('resize', (e) => {
			const {innerWidth, innerHeight} = window
			heightOld > innerHeight && innerWidth < 400
				? this.setState({keyboard: true})
				: this.setState({keyboard: false})
			e.preventDefault()
		})
	}
	render () {
		const phoneMask = createTextMask({pattern: '+38 (999) 999 99 99'})
		const {
			props: {handleSubmit, closeModal},
			state: {keyboard}
		} = this
		return (
			<form
				styleName={keyboard ? 'expressOrder marginTop' : 'expressOrder'}
				onSubmit={handleSubmit}
			>
				<img
					styleName="closeImg"
					src={closeImg}
					alt="closeImage"
					onClick={closeModal}
				/>
				<div styleName="contentWrapper">
					<img src={expressPhone} alt=""/>
					<h3>Введите номер телефона.</h3>
					<p>
						Мы перезвоним вам для оформления заказа.
					</p>
				</div>
				<div styleName={'inputsWrapper'}>
					<Field
						name='phone'
						type='text'
						component={PhoneField}
						verifyVisible={true}
						verify={true}
						label="Phone number"
						{...phoneMask}
					/>
					<button type='submit'>
						Жду звонка
					</button>
				</div>
			</form>
		)
	}
}

Example.propTypes = {
	handleSubmit: PropTypes.func,
	closeModal: PropTypes.func
}

export default Example
