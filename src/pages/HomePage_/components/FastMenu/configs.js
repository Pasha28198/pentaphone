import fmAuc from 'assets/price (1).png'
import fmBuy from 'assets/buy (1).png'
import fmSell from 'assets/sell (1).png'

const arr = [
	{
		to: '/buy/categories',
		src: fmBuy,
		alt: 'Купить',
		className: 'buy'
	},
	{
		to: '/sell/categories',
		src: fmSell,
		alt: 'Продать',
		className: 'sell'
	},
	{
		to: '/sell/phone',
		src: fmAuc,
		alt: 'Оценить',
		className: 'auc'
	}
]

export default arr
