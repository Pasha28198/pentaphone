import React, {Component} from 'react'
import CSSModules from 'react-css-modules'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'

import {mapStateToProps, mapActionsToProps} from './redux.js'
import styles from './styles.scss'

@connect(mapStateToProps, mapActionsToProps)
@CSSModules(styles)

class WhoVerifySeller extends Component {
	render () {
		const { verifiedSeller } = this.props
		if (!verifiedSeller) {
			return (
				<div></div>
			)
		}
		return (
			<div styleName="AboutDeviceAndSeller">
				<h2>Кого мы называем надежным продавцом? </h2>
				<p>
                    Надежный продавец - пользователь ReSell.com.ua, проверенный специалистами нашей компании. Его товары отмечены специальным значком и гарантированно соответствуют описанию. Надежный продавец отправляет товары максимально быстро.
				</p>
			</div>
		)
	}
}

WhoVerifySeller.propTypes = {
	verifiedSeller: PropTypes.bool
}

export default WhoVerifySeller
