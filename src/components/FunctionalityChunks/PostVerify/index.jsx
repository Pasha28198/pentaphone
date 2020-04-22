import React, {Component} from 'react'
import CSSModules from 'react-css-modules'
import errorImg from 'assets/svg/error.svg'
// import {connect} from 'react-redux'
import PropTypes from 'prop-types'

import npLogo from 'assets/images/NP_Logo.png'
import VerifyCode from './VerifyCode/index'

// import {mapStateToProps, mapActionsToProps} from './redux.js'
import styles from './styles.scss'

// @connect(mapStateToProps, mapActionsToProps)
@CSSModules(styles)

class Example extends Component {
	state={code: ''}
	verifyCode = (array) => {
		// generate code to one string
		const code = array.reduce((sum, item) => (sum += item), '')
		this.setState({code})
	}
	onClick = () => { this.props.verify(this.state.code) }
	render () {
		const {props: {error}, verifyCode, onClick} = this
		return (
			<div styleName="postVerify">
				<img src={npLogo} alt=""/>
				<h3>
					Смс код подтверждения<br/>
					от Нова Пошта
				</h3>
				<p>
					Введите код
				</p>
				<VerifyCode {...{verifyCode}}/>
				<If condition={error}>
					<span><img src={errorImg} alt=""/> Заполните все поля</span>
				</If>
				<button {...{onClick}}>Подтвердить</button>
			</div>
		)
	}
}

Example.propTypes = {
	verify: PropTypes.func,
	error: PropTypes.bool
}

export default Example
