import {
	putUserInfo,
	phoneNumber,
	sales, orderList
} from 'api'

import {
	SET_ITEMS_MY_SALES,
	SET_ITEMS_MY_BUYS
} from './types'

export function setNewInfoForUser (data) {
	return async () => {
		const res = await phoneNumber(data)
		return res
	}
}

export function sendUserInfo (data) {
	return async () => {
		const res = await putUserInfo(data)
		return res
	}
}

export function fetchSales () {
	return async (dispatch) => {
		const res = await sales()
		dispatch({type: SET_ITEMS_MY_SALES, payload: res.data})
	}
}

export function fetchBuys () {
	return async (dispatch) => {
		const res = await orderList()
		dispatch({type: SET_ITEMS_MY_BUYS, payload: res.data})
	}
}
