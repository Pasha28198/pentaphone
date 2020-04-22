import React, {Component} from 'react'
import CSSModules from 'react-css-modules'
import PropTypes from 'prop-types'

import imageArrow from 'src/assets/Shape (2).svg'

import styles from './styles.scss'

class Order100 extends Component {
	state = {
		activeCheck: false
	}
	tunblerInfo = () => {
		this.setState({
			activeCheck: !this.state.activeCheck
		})
	}
	render () {
		const {
			delivery_price: delivery,
			item_price: item,
			resell_fee: resell,
			total_cod: tN,
			total
		} = this.props.price
		const { activeCheck } = this.state
		return (
			<div styleName="priceList">
				<div styleName="wrapper">
					<p styleName="mainPrice">
						<div>
                            К оплате сейчас<br/>
						</div>
						<span>
							{`${Math.round(+total)} грн`}
							<img
								styleName={activeCheck ? 'imageArrow activeArrow' : 'imageArrow'}
								src={imageArrow}
								alt="arrow open check"
								onClick={this.tunblerInfo}
							/>
						</span>
					</p>
					<div styleName={activeCheck ? 'wrapper info infoActive' : 'wrapper info '}>
						<h3>{`К оплате в отделении "Нова пошта"`}</h3>
						<p>
							<div>
                                Стоимость устройства
								<span>{` ("Нова пошта")`}</span>
							</div>
							<span>{`${Math.round(+item)} грн`}</span>
						</p>
						<p>
							<div>
                                Стоимость денежного перевода<br/>
								<span>{`(Согласно тарифов "Нова пошта")`}</span>
							</div>
							<span>{`${Math.round(+tN - +item)} грн`}</span>
						</p>
						<h3>К оплате через ReSell</h3>
						<p>
							<div>
                                Стоимость доставки <br/>
								<span>{`(Согласно тарифов "Нова пошта")`}</span>
							</div>
							<span>{`${Math.round(+delivery)} грн`}</span>
						</p>
						<p>
							<div>
                                Обеспечение безопасности сделки<br/>
								<span>(ReSell)</span>
							</div>
							<span>{`${Math.round(+resell)} грн`}</span>
						</p>
					</div>
				</div>
			</div>
		)
	}
}

Order100.propTypes = {
	price: PropTypes.object
}
export default CSSModules(Order100, styles, {allowMultiple: true})
