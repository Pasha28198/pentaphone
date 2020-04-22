import moment from 'moment'

import { fetchSales, orderBayCancel } from 'actions'
import {push} from 'react-router-redux'
import { sells } from 'src/store/selectors/profile.js'
import kiding from 'src/utills/configs/kiding.js'
import statusConfig from 'src/utills/order/sellerConfig.js'

export const mapStateToProps = (state) => ({
	data: sells(state, 'items').map(item => ({
		img: typeof item.item.images === 'string' ? item.item.images : item.item.images[0].image['small'],
		idItem: item.item.pk,
		time: moment(item['created_at']).format('L'),
		number: item.inumber,
		textFieldName: item.item.name,
		textFieldDescription: kiding[item.kind],
		check: {
			check: item.receipt,
			userInfo: {
				id: item['buyer_id'],
				rating: item.rating,
				verifiedSeller: item['verified_seller'],
				userName: item['buyer_first_name'],
				lastUserName: item['buyer_last_name']
			},
			kind: item.kind
		},
		statusData: {
			statusType: item.status,
			statusFunc: statusConfig[item.status],
			ttn: item['tracking_number'],
			orderId: item.pk,
			kind: item.kind
		}
	})),
	page: sells(state, 'countPages')
})

export const mapActionsToProps = (dispatch) => ({
	getMySales: () => { dispatch(fetchSales()) },
	confirmOrder (id, kind) {
		dispatch(push(`/order/contact-info/${id}${kind ? '#' + kind : ''}`))
	},
	cancelOrder (id) {
		dispatch(orderBayCancel(id))
			.then(({status}) => {
				dispatch(fetchSales())
			}
			)
	},
	nextPage: () => {}
})
