import React, {Component} from 'react'
import CSSModules from 'react-css-modules'
import styles from './styles.scss'
import {connect} from 'react-redux'
import {mapStateToProps, mapActionsToProps} from './redux.js'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'

import GetName from './components/GetName/index'
import Number from './components/Number/index'
import VerifyCode from './components/VerifyCode/index'
import { Button } from 'semantic-ui-react'

@connect(mapStateToProps, mapActionsToProps)
@CSSModules(styles, {allowMultiple: true})

class VerifyNumber extends Component {
	state = {
		verifyCode: false,
		error: 'Введите корректный номер',
		errorCode: false,
		name: '',
		buttonState: true,
		correctName: false,
		correctNumber: false
	}
	verify = (data) => {
		this.props.verifyCode(data)
			.then(({status}) => {
				if (status === 200) {
					this.setState({verifyCode: false, errorCode: false})
					this.props.finishRegistration(this.state.name)
				}
			})
			.catch(() => this.setState({errorCode: true}))
	}
	addPhone = () => {
		const {props: {addPhone, phone}, showCodeField} = this
		addPhone(phone)
			.then(({status}) => (status === 200) && showCodeField())
			.catch(res => this.setState({correctNumber: true}))
	}
	close = () => {
		this.setState({
			verifyCode: false,
			buttonState: true
		})
	}
	showCodeField = () => {
		this.props.sendSmd()
		this.setState({
			verifyCode: true,
			correctNumber: false,
			buttonState: false
		})
	}
	getName = name => {
		this.setState({ name, correctName: false })
	}
	finishRegistration = () => {
		if (this.state.name === '') this.setState({correctName: true})
		else this.addPhone()
	}
	render () {
		const {
			state: {error, verifyCode, buttonState, correctName, errorCode, correctNumber},
			props: {titleHelmet, addPhone: onClick},
			getName, finishRegistration, addPhone, verify, close
		} = this
		return (
			<div styleName="verifyNumber">
				<Helmet>
					<title>
						{titleHelmet}
					</title>
				</Helmet>
				<div styleName="verifyNumber">
					<GetName {...{getName}} />
					{correctName && <span>Введите имя</span>}
				</div>
				<Number {...{error, onClick, addPhone}}/>
				<If condition={correctNumber}>
					<span>{error}</span>
				</If>
				<div styleName="verifyNumber">
					<If condition={verifyCode}>
						<VerifyCode resend={addPhone} close={close} verifyCode={verify}/>
					</If>
					<If condition={errorCode}>
						<span styleName="error">Не корректный проверочный код</span>
					</If>
				</div>
				<If condition={buttonState}>
					<Button styleName="verifyNumber-btn" onClick={finishRegistration}>
						Далее
					</Button>
				</If>
			</div>
		)
	}
}

VerifyNumber.propTypes = {
	verifyCode: PropTypes.func,
	addPhone: PropTypes.func,
	sendSmd: PropTypes.func,
	finishRegistration: PropTypes.func,
	phone: PropTypes.string,
	titleHelmet: PropTypes.string,
	redirectToVerify: PropTypes.func
}

export default VerifyNumber
