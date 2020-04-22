import React, {Component} from 'react'
import CSSModules from 'react-css-modules'
import PropTypes from 'prop-types'

import styles from './styles.scss'

@CSSModules(styles)

class EditPrice extends Component {
	handleChangePrice = (e) => {
		if (+e.target.value < 100001) {
			this.props.changePrice('price', e.target.value)
		}
	}
	render () {
		const {price} = this.props

		return (
			<div styleName="EditPrice">
				<p>
					Ваша цена
				</p>
				<div styleName="EditPrice-price">
					<input
						type="text"
						value={+price}
						onChange={this.handleChangePrice}
					/>
					<span>грн</span>
				</div>
			</div>
		)
	}
}

EditPrice.propTypes = {
	price: PropTypes.number,
	changePrice: PropTypes.func
}

export default EditPrice
