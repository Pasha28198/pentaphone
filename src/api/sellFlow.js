import {axiosInstance} from './axiosInstance'

export function getCategories () {
	return axiosInstance.get('/device/types/')
}

export function getBrands (category = 'phone', priority) {
	return (
		axiosInstance.get(`/device/brand/?device_type=${category}&limit=200${priority ? '&priority=true' : ''}`)
	)
}

export function getColors (priority, pk) {
	return (
		axiosInstance.get(`/device/spec/${pk}${priority ? '?priority=true' : ''}`)
	)
}

export function getModels (brand) {
	return (
		axiosInstance.get(`/device/${brand}/?limit=200`)
	)
}

export function getModelsWithSlug (brand) {
	return (
		axiosInstance.get(`/device/?limit=200&brand=${brand}&priority=true`)
	)
}

export function getAccessories (category) {
	return (
		axiosInstance.get(`device/accessory/?device_type=${category}`)
	)
}

export function expressRegistaration (email) {
	return axiosInstance.post('/auth/express-registration/', {email})
}

export function getVersions (pkPhone, query = '') {
	return axiosInstance.get(`/device/version/${pkPhone}/?${query}`)
}

export function pushDraftAds (data) {
	return axiosInstance.post('item-detail/', data)
}

export function uploadImage (data, pk) {
	return axiosInstance.post(`/item/${pk}/image/`, data)
}
export function deleteImage (adsPk, imagePk) {
	return axiosInstance.delete(`/item/${adsPk}/image/${imagePk}/`)
}
export function phoneNumber (data) {
	return axiosInstance.patch(`/auth/me/`, data)
}
export function verifyPhoneNumber (data) {
	return axiosInstance.post(`/auth/mobile-verification/`, data)
}
export function sendSms () {
	return axiosInstance.get(`/auth/mobile-verification/`)
}

export function patchDopInfo (data, id) {
	return axiosInstance.patch(`/item-detail/${id}/`, data)
}
export function delAdvertisment (id) {
	return axiosInstance.delete(`/item-detail/${id}/`)
}
export function getPriceWizard (id) {
	return axiosInstance.get(`/price-wizard/${id}/`)
}

export function getDataStatistics (id) {
	return axiosInstance.get(`/price-graph/${id}/`)
}
export function getPriseWizardVersions (version, condition, visCond) {
	return axiosInstance.get(`/version-price-wizard/${version}/${condition}/${visCond}/`)
}
