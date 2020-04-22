import {axiosInstance} from './axiosInstance'

export const advertismentBargainList = (query, deviceType) => {
	return (
		axiosInstance
			.get(`/item/bet/${deviceType || 1}/?${query || ''}/`)
	)
}

export function deviceDetail (id) {
	return axiosInstance.get(`/item-detail/${id}/`)
}

export function addToFavorites (id) {
	return axiosInstance.get(`/item-detail/${id}`)
}

export function fetchComents (id) {
	return axiosInstance.get(`/comment/${id}/list/`)
}

export function pushComents (data) {
	return axiosInstance.post(`/comment/`, data)
}

export function priceList (id, kind = '100') {
	return axiosInstance.get(`/item/${id}/receipt/${kind}/`)
}

export const advertaismentListBest = (query, deviceType) => {
	return (
		axiosInstance
			.get(`/item/${deviceType || 1}/?${query || ''}`)
	)
}

export const getRecentlyAded = () => {
	return (
		axiosInstance
			.get(`/item/?max_price=30000&ordering=-created_at&page_size=30&page=1&spec=&`)
	)
}

export const getTopList = () => {
	return (
		axiosInstance.get(`/item/phone/popular/`)
	)
}

export const getTopDeviceBrand = (brand) => {
	return (
		axiosInstance.get(`/item/?brand=${brand}&condition=100&visual_condition=&min_price=&max_price=&is_warranty=&is_bargain=&is_owner=&is_review=`)
	)
}

export const getRecommendet = (id) => {
	return (
		axiosInstance.get(`/item/recommended/${id}/`)
	)
}
export const postEmail = data => {
	return (
		axiosInstance.post(`/watch-item/`, data)
	)
}
