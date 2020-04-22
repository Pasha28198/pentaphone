import {axiosInstance} from './axiosInstance'

export function favoritsItems (page) {
	return (
		axiosInstance.get(`/item/favorite/list/?page=${page || '1'}`)
	)
}

export function patchFavoriteItem (item) {
	return (
		axiosInstance.post(`/item/favorite/`, {item})
	)
}

export function deleteFavorite (item) {
	return (
		axiosInstance.delete(`/item/favorite/${item}`)
	)
}
