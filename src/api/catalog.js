import {axiosInstance} from './axiosInstance'

export const getCatalogItems = (query, deviceType, page) => {
	return (
		axiosInstance
			.get(`/item/?&page=${page}${query || ''}`)
	)
}
export const getItemsUserWithId = (page, id) => {
	return (
		axiosInstance
			.get(`/item/?&page=${page}&user=${id}`)
	)
}
export const getItemsDrop = (value) => {
	return fetch(`https://resell.com.ua/device-autocomplete/?q=${value}`)
		.then((res) => res.json())
		.then((res) => res)
}
