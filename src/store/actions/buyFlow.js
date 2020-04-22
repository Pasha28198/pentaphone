import {push} from 'react-router-redux'

import {
	deviceDetail,
	priceList,
	getTopList,
	getRecentlyAded,
	getRecommendet,
	postEmail
} from 'api'

import {
	GET_DEVICE_INFO,
	EDIT_IMAGES
} from './types'

export const getDeviceDetails = (id) => {
	return async (dispatch) => {
		const res = await deviceDetail(id)
		if (res.status === 404) {
			dispatch(push('/*'))
		}
		dispatch({type: GET_DEVICE_INFO, payload: res.data})
	}
}

export const getDeviceDetailsEdit = (id) => {
	return async (dispatch) => {
		const res = await deviceDetail(id)
		dispatch({type: GET_DEVICE_INFO, payload: res.data})
		dispatch({type: EDIT_IMAGES, payload: res.data.images})
	}
}

export const getPriceList = (id, kind) => {
	return async (dispatch) => {
		const res = await priceList(id, kind)
		return res
	}
}

export const getTopCatalog = () => {
	return async (dispatch) => {
		return getTopList()
	}
}

export const getTopRecentlyAded = () => {
	return async (dispatch) => {
		return getRecentlyAded()
	}
}

export const getTopRecommendet = (id) => {
	return async (dispatch) => {
		return getRecommendet(id)
	}
}
export const pushEmail = (data) => {
	return async () => {
		return postEmail(data)
	}
}
