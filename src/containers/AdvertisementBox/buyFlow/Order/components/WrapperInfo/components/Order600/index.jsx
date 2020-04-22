import React, {Component} from 'react'
import CSSModules from 'react-css-modules'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'

import {mapStateToProps, mapActionsToProps} from './redux.js'
import styles from './styles.scss'

@connect(mapStateToProps, mapActionsToProps)
@CSSModules(styles)

class Order600 extends Component {
	render () {
		return (
			<div>
				<p styleName="price">Стоимость устройства <span>{+this.props.price['item_price']} грн</span></p>
				<p styleName='description'><span>*</span>Дополнительно оплачивается доставка и наложенный платеж в отделении «Нова пошта»</p>
			</div>
		)
	}
}

Order600.propTypes = {
	price: PropTypes.string
}

export default Order600
