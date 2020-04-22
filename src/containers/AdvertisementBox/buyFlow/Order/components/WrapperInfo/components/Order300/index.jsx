import React, {Component} from 'react'
import CSSModules from 'react-css-modules'
import PropTypes from 'prop-types'
import imageArrow from 'src/assets/Shape (2).svg'

import Warranty from './components/Warranty/index'
import styles from './styles.scss'

class Order300 extends Component {
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
		price: {
			item_price: price, transaction_price: commission,
			delivery_price: delivery, checking_price: technicalCheck,
			resell_fee_check: saveMoney, total, warranty_3: war3, warranty_12: war12
		},
		fetch,
		fetchKind
	} = this.props
	const { activeCheck } = this.state
	const extendWar = (fetchKind === 400 && war3) || (fetchKind === 500 && war12)
	return (
		<div>
			<If condition={war12 || war3}>
				<Warranty {...{fetch, fetchKind, war3, war12}}/>
			</If>
			<div styleName="wrapper">
				<div styleName="priceList">
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
					<div styleName={activeCheck ? 'priceList info infoActive' : 'priceList info '}>
						<p>
							<div>
								Стоимость устройства
							</div>
							<span>{`${Math.round(+price)} грн`}</span>
						</p>
						<p>
							<div>
								Комиссия платежной системы<br/>
								<span>(По тарифам Wayforpay)</span>
							</div>
							<span>{`${Math.round(+commission)} грн`}</span>
						</p>
						<p>
							<div>
								Стоимость доставки через сервис центр <br/>
								<span>{`("По тарифам Новая пошта")`}</span>
							</div>
							<span>{`${Math.round(+delivery)} грн`}</span>
						</p>
						<p>
							<div>
								Техническая проверка <span>(support.ua)</span>
							</div>
							<span>{`${Math.round(+technicalCheck)} грн`}</span>
						</p>
						<p>
							<div>
								Финансовая безопасность и гарантия <br/>
								10 дней
								<span> (ReSell)</span>
							</div>
							<span>{`${Math.round(+saveMoney)} грн`}</span>
						</p>
						<If condition={extendWar}>
							<p>
								<div>
									Расширенная гарантия <span>(support.ua)</span>
								</div>
								<span>{`${Math.round(+extendWar)} грн`}</span>
							</p>
						</If>
					</div>
				</div>
			</div>
		</div>
	)
}
}

Order300.propTypes = {
	price: PropTypes.object,
	fetch: PropTypes.func,
	fetchKind: PropTypes.number,
	item: PropTypes.item
}

export default CSSModules(Order300, styles, {allowMultiple: true})
