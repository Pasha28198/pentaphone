import moment from 'moment'
import { push } from 'react-router-redux'
import {
	fetchBuys, deleteItemOrders,
	paymentOrderInfo
} from 'actions'
import { buys } from 'src/store/selectors/profile.js'
import kiding from 'src/utills/configs/kiding.js'
import statusConfig from 'src/utills/order/BuyerConfigs.js'

export const mapStateToProps = (state) => ({
	data: buys(state, 'items').map(item => ({
		img: typeof item.item.images === 'string' ? item.item.images : item.item.images[0].image['small'],
		idItem: item.item.pk,
		time: moment(item['created_at']).format('L'),
		number: item.inumber,
		textFieldName: item.item.name,
		textFieldDescription: kiding[item.kind],
		check: {
			check: item.receipt,
			userInfo: {
				id: item['seller_id'],
				rating: item.rating,
				verifiedSeller: item['verified_seller'],
				userName: item['seller_first_name'],
				lastUserName: item['seller_middle_name']
			},
			kind: item.kind
		},
		statusData: {
			statusType: item.status,
			statusFunc: statusConfig[item.status],
			ttn: item['tracking_number'],
			orderId: item.pk
		}
	})),

	page: buys(state, 'countPages')
})

export const mapActionsToProps = (dispatch) => ({
	getMySales: () => { dispatch(fetchBuys()) },
	removeOrder (id) {
		dispatch(deleteItemOrders(id))
	},
	payMoney (id) {
		dispatch(paymentOrderInfo(id)).then((res) => {
			window.wayforpay.run(res, function (data) { console.log('wayPay') })
		})
	},
	addFeedBack (id) { dispatch(push(`/feedback/${id}`)) },
	nextPage: () => {}
})
