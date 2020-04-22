import React, {Component} from 'react'
import CSSModules from 'react-css-modules'
// import {connect} from 'react-redux'
import PropTypes from 'prop-types'

// import {mapStateToProps, mapActionsToProps} from './redux.js'
import styles from './styles.scss'

// @connect(mapStateToProps, mapActionsToProps)
@CSSModules(styles)

class Example extends Component {
	verifyCode = () => {
		this.props.verifyCode(
			[
				this.firstLetter.value,
				this.secondElement.value,
				this.theerdElement.value,
				this.fourElement.value,
				this.fiveElement.value,
				this.sixElement.value
			]
		)
	}
	render () {
		return (
			<form styleName="wrapperInput">
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
					onChange={(e) => e.target.value ? this.sixElement.focus() : this.fourElement.focus()}
					maxLength={1}
				/>
				<input
					type="text"
					ref={(element) => { this.sixElement = element }}
					onChange={(e) => e.target.value ? this.verifyCode() : this.fiveElement.focus()}
					maxLength={1}
				/>
			</form>
		)
	}
}

Example.propTypes = {
	verifyCode: PropTypes.func
}

export default Example
