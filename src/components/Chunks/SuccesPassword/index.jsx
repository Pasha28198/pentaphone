import React, {Component} from 'react'
import CSSModules from 'react-css-modules'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'

import EllipseOk from 'src/assets/rating/active.svg'
import EllipseFail from 'src/assets/rating/error.svg'

import styles from './styles.scss'
import {mapStateToProps, mapActionsToProps} from './redux.js'

@connect(mapStateToProps, mapActionsToProps)
@CSSModules(styles)

class Example extends Component {
	state = {
		length: 'disable',
		numberExist: 'disable',
		chartExist: 'disable'
	}
	componentWillReceiveProps ({value}) {
		// checking password on right symbols
		let hasNumber = /\d/
		let hasChart = /[а-яА-Яa-zA-Z_]/
		let symbol = /[-+=&{}<>~`'";:/.,!*+?%#@!^$()|[\]\\]/g
		if (value && value !== this.props.value) {
			if (value.length >= 8) {
				this.setState({length: true})
			} else {
				this.setState({length: false})
			}
			if (hasNumber.test(value)) {
				this.setState({numberExist: true})
			} else {
				this.setState({numberExist: false})
			}
			if (hasChart.test(value) || symbol.test(value)) {
				this.setState({chartExist: true})
			} else {
				this.setState({chartExist: false})
			}
		} else {
			this.setState({
				chartExist: false,
				numberExist: false,
				length: false
			})
		}
	}
	render () {
		const {length, numberExist, chartExist} = this.state
		return (
			<div styleName="SuccessList">
				<Choose>
					<When condition={this.state.length !== 'disable'}>
						<div styleName="SuccessList-item">
							<img src={length ? EllipseOk : EllipseFail} alt="ok"/>
							8 символов минимум
						</div>
						<div styleName="SuccessList-item">
							<img src={numberExist ? EllipseOk : EllipseFail} alt="fail"/>
							Включает цифры
						</div>
						<div styleName="SuccessList-item">
							<img src={chartExist ? EllipseOk : EllipseFail} alt="erro"/>
							Включает буквы или символы
						</div>
					</When>
				</Choose>
			</div>
		)
	}
}

Example.propTypes = {
	value: PropTypes.object
}

export default Example
