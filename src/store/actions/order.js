import {
	orederCityAutocomplate,
	orederDepartamentAutocomplate,
	createOrder,
	orderList,
	cancelOrder,
	patchSellerData,
	orderPaymentInfo,
	orderPaymentInfoSeller,
	addFeedBack,
	verify,
	orederCity,
	orederDepartament,
	expressOrder
} from 'api'

import {
	SET_LIST_OREDERS_BUY,
	FULL_PAGE_SPINNER_DISABLED,
	FULL_PAGE_SPINNER_ACTIVATE,
	DELETE_ORDER
} from './types'

export const getDepartments = (city, page, query) => {
	return async () => {
		const {data} = await orederDepartamentAutocomplate(city, page, query)
		return data
	}
}
export const getDepartment = (city) => {
	return async () => {
		const {data} = await orederDepartament(city)
		return data
	}
}
export const getCity = (query, act, page) => {
	return async () => {
		let res
		if (act) {
			res = await orederCity(query)
			const city = res.data
			return city
			// dispatch({type: SET_CITY, payload: city})
		} else {
			res = await orederCityAutocomplate(query, page)
			return res.data
			// dispatch({type: SET_CITY, payload: res.data.results})
		}
	}
}

export const deleteItemOrders = (id) => {
	return async (dispatch) => {
		dispatch({type: DELETE_ORDER, payload: id})
	}
}
export const createOrderItem = (data) => {
	return async () => {
		const res = await createOrder(data)
		return res
	}
}
export const fetchOrderList = () => {
	return async (dispatch) => {
		dispatch({type: FULL_PAGE_SPINNER_ACTIVATE})
		const res = await orderList()
		dispatch({type: SET_LIST_OREDERS_BUY, payload: res.data.results})
		dispatch({type: FULL_PAGE_SPINNER_DISABLED})
	}
}

export const orderBayCancel = (id) => {
	return async () => {
		const res = await cancelOrder(id)
		return res
	}
}

export const addSellerData = (id, data) => {
	return async () => {
		const res = await patchSellerData(id, data)
		return res
	}
}

export const feedBackSend = (data) => {
	return async () => {
		const res = await addFeedBack(data)
		return res
	}
}

export const paymentOrderInfo = (id, data) => {
	return async () => {
		const res = await orderPaymentInfo(id, data)
		const dataSend = {
			returnUrl: 'resell.com.ua/my-sales',
			merchantAccount: res.data['merchant_account'],
			merchantDomainName: res.data['merchant_domain_name'],
			authorizationType: res.data['authorization_type'],
			merchantSignature: res.data['merchant_signature'],
			orderReference: res.data['order_reference'],
			orderDate: `${res.data['order_date']}`,
			amount: `${res.data['amount']}`,
			currency: res.data['currency'],
			productName: res.data['product_name'],
			productPrice: `${res.data['amount']}`,
			productCount: '1',
			clientFirstName: res.data['buyer_first_name'],
			clientLastName: res.data['buyer_last_name'],
			clientEmail: res.data['client_email'],
			clientPhone: res.data['buyer_phone'],
			language: res.data['language'],
			merchantTransactionType: res.data['merchant_transaction_type']
		}

		return dataSend
	}
}
export const paymentSellerOrderInfo = (id) => {
	return async () => {
		const res = await orderPaymentInfoSeller(id)
		const dataSend = {
			returnUrl: 'resell.com.ua/my-sales',
			requestType: res.data['request_type'],
			merchantAccount: res.data['merchant_account'],
			merchantDomainName: res.data['merchant_domain_name'],
			authorizationType: res.data['authorization_type'],
			merchantSignature: res.data['merchant_signature'],
			orderReference: res.data['order_reference'],
			amount: res.data['amount'],
			currency: res.data['currency'],
			clientFirstName: res.data['seller_first_name'],
			clientLastName: res.data['seller_last_name'],
			clientEmail: res.data['client_email'],
			clientPhone: res.data['seller_phone'],
			language: res.data['language'],
			merchantTransactionType: res.data['merchant_transaction_type'],
			serviceUrl: res.data['service_url']
		}
		return dataSend
	}
}

export const verifyPost = (id, code) => {
	return async () => {
		const res = await verify(id, code)
		return res
	}
}
export const createExpressOrder = (data) => {
	return async () => {
		const res = await expressOrder(data)
		return res
	}
}
