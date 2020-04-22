import React, {Component} from 'react'
import CSSModules from 'react-css-modules'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import { reduxForm, Field } from 'redux-form'
import { createTextMask } from 'redux-form-input-masks'

import emailField from 'components/reduxForm/emailField'
import closeImg from 'assets/icons/closeImg.png'
import validate from './validate'

import {mapStateToProps, mapActionsToProps} from './redux.js'
import styles from './styles.scss'

@connect(mapStateToProps, mapActionsToProps)
@reduxForm({
	form: 'sendEmail',
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
					<h3>{'Введите Email и нажмите "Отправить"'}</h3>
					<p>
						Мы будем раз в неделю присылать вам похожие товары.
					</p>
				</div>
				<div styleName={'inputsWrapper'}>
					<Field
						name='email'
						type='text'
						component={emailField}
						label="Email..."
					/>
					<button type='submit'>
						Отправить
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
