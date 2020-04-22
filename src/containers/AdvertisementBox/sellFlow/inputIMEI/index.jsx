import React, {Component} from 'react'
import CSSModules from 'react-css-modules'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'

import styles from './styles.scss'
import {mapStateToProps, mapActionsToProps} from './redux.js'

@connect(mapStateToProps, mapActionsToProps)
@CSSModules(styles)

class inputIMEI extends Component {
	onChange = e => {this.props.setSerialNumber(e.target.value)}
	render () {
		const {onKeyPress,onChange} = this
		return (
			<div styleName="wrapperInputIMEI">
				IMEI:
				<input {...{onChange,onKeyPress,type: 'text'}}/>
				<p>Проверка IMEI подтвердит легальность телефона и повысит шансы на продажу. Его можно найти на коробке от смартфона или узнать по комбинации *#06# . Поле не является обязательным.
				</p>
			</div>
		)
	}
}

inputIMEI.propTypes = {
	setSerialNumber: PropTypes.number
}

export default inputIMEI
