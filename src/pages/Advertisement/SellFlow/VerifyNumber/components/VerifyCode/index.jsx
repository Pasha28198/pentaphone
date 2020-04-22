import React, {Component} from 'react'
import CSSModules from 'react-css-modules'
import PropTypes from 'prop-types'

import styles from './styles.scss'

@CSSModules(styles, {allowMultiple: true})

class VerifyCode extends Component {
    state = {min: 1, sec: 0, error: ''}
	verify = () => {
		const {
			firstLetter,
			secondElement,
			theerdElement,
			fourElement,
			fiveElement
		} = this
		const {verifyCode} = this.props
		verifyCode(`${firstLetter.value}${secondElement.value}${theerdElement.value}${fourElement.value}${fiveElement.value}`)
	}
	resend = () => {
		if (!this.state.sec) {
			this.props.resend()
			this.setState({min: 1, sec: 0})
			this.startTimer()
		}
	}
	startTimer = () => {
		const interval = setInterval(
			() => {
				if (!this.state.sec && this.state.min) this.setState({min: 0, sec: 59})
				else this.setState({sec: this.state.sec ? this.state.sec - 1 : 0})
			}, 1000
		)
		setTimeout(() => clearInterval(interval), 62000)
	}
	componentWillMount () { (this.props.type !== 'refactorInfo') && this.startTimer() }
	componentWillReceiveProps (nxt) {
		if (nxt.verifyStatus) {
			nxt.verifyStatus !== this.props.verifyStatus &&
			this.startTimer()
		} else this.setState({min: 1, sec: 0})
	}
	render () {
		const {
			props: {verifyStatus, close, type},
			state: {min, sec, error}, resend
		} = this
		const styleName = verifyStatus ? 'verifyCode verify full' : 'verifyCode verify'
		return (
			<div styleName= {type === 'number' ? 'verifyCode' : styleName}>
				<h5>Введите код подтверждения из СМС</h5>
				<span>{`${min} : ${sec}`}</span>
				<div styleName="verifyCode-inputs">
					<input
						type="text"
						ref={(element) => { this.firstLetter = element }}
						onChange={(e) => e.target.value ? this.secondElement.focus() : ''}
						maxLength={1}
					/>
					<input
						type="text"
						ref={(element) => { this.secondElement = element }}
						onChange={(e) => e.target.value ? this.theerdElement.focus() : this.firstLetter.focus()}
						maxLength={1}
					/>
					<input
						type="text"
						ref={(element) => { this.theerdElement = element }}
						onChange={(e) => e.target.value ? this.fourElement.focus() : this.secondElement.focus()}
						maxLength={1}
					/>
					<input
						type="text"
						ref={(element) => { this.fourElement = element }}
						onChange={(e) => e.target.value ? this.fiveElement.focus() : this.theerdElement.focus()}
						maxLength={1}
					/>
					<input
						type="text"
						ref={(element) => { this.fiveElement = element }}
						onChange={(e) => e.target.value ? this.verify() : this.fourElement.focus()}
						maxLength={1}
					/>
				</div>
				<div>{error}</div>
				<div styleName="verifyCode-funcBtn">
					<span styleName={sec ? 'disabled' : ''} onClick={resend}>
						Прислать код повторно
					</span>
					<span onClick={close}>
						Отменить
					</span>
				</div>
			</div>
		)
	}
}

VerifyCode.propTypes = {
	verifyCode: PropTypes.func,
	style: PropTypes.bool,
	close: PropTypes.func,
	resend: PropTypes.func,
	verifyStatus: PropTypes.bool,
	type: PropTypes.string
}
VerifyCode.defaultProps = {
	verifyStatus: false,
	type: 'number'
}

export default VerifyCode
