import {axiosInstance} from './axiosInstance'

export function createOrder (data) {
	return (
		axiosInstance.post('/order/', data)
	)
}

export function sales () {
	return (
		axiosInstance.get('/order/my-sales/')
	)
}

export function orederCityAutocomplate (query, page) {
	return (
		axiosInstance.get(`/order/city/autocomplete?page=${page}&search=${query || ''}`)
	)
}
export function orederCity (query) {
	return (
		axiosInstance.get(`/order/city/${query}`)
	)
}

export function orederDepartamentAutocomplate (city, page, query) {
	return (
		axiosInstance.get(`/order/department/autocomplete/${city}/?page=${page}&search=${query || ''}`)
	)
}
export function orederDepartament (city) {
	return (
		axiosInstance.get(`/order/department/${city}/`)
	)
}
export function getTopColors (flag) {
	return (
		axiosInstance.get(`/device/spec/13/?${!flag ? 'priority=true' : ''}${flag ? '&limit=200' : ''}`)
	)
}

export function getTopOpacity () {
	return (
		axiosInstance.get('/device/spec/12/?priority=true')
	)
}

export function getSpec (key) {
	return (
		axiosInstance.get(`/device/spec/${key}/`)
	)
}

export function getTopBrands () {
	return (
		axiosInstance.get('/device/brand/1/?priority=true')
	)
}

export function deleteOrder (id) {
	return (
		axiosInstance.delete(`/item/${id}/image/`)
	)
}

export function orderList () {
	return (
		axiosInstance.get(`order/my-purchases/`)
	)
}

export function cancelOrder (id) {
	return (
		axiosInstance.get(`/order/${id}/cancel/`)
	)
}

export function patchSellerData (id, data) {
	return (
		axiosInstance.patch(`/order/${id}/`, data)
	)
}

export function orderPaymentInfo (id) {
	return (
		axiosInstance.get(`/order/${id}/payment-info/`)
	)
}

export function orderPaymentInfoSeller (id) {
	return (
		axiosInstance.get(`/order/${id}/payment-verify/`)
	)
}

export function addFeedBack (data) {
	return (
		axiosInstance.post(`/feedback/`, data)
	)
}

export function verifyCard (data) {
	return (
		fetch(`https://secure.wayforpay.com/verify/`, {
			method: 'post',
			body: data
		})
	)
}
export function verify (id, code) {
	return (
		axiosInstance.get(`/order/${id}/register?code=${code}`)
	)
}
export function expressOrder (data) {
	return (
		axiosInstance.post('/express-order/', data)
	)
}
