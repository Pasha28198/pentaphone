import {axiosInstance} from './axiosInstance'

export function login (email, password) {
	return (
		axiosInstance.post('/auth/login/', {email, password})
	)
}

export function logout () {
	return (
		axiosInstance.get('/auth/logout/')
	)
}

export function signin (data) {
	return (
		axiosInstance.post('/auth/registration/', data)
	)
}
export function facebook (data, type) {
	return (
		axiosInstance.post(`/auth/${type}/`, data)
	)
}

export function VerifyEmail (data) {
	return (
		axiosInstance.post('/auth/registration/verify-email/', data)
	)
}
export function resetPassword (data) {
	return (
		axiosInstance.post('/auth/password/reset/', data)
	)
}

export function confirmNewPassword (data) {
	return (
		axiosInstance.post('/auth/password/reset/confirm/', data)
	)
}

export function fetchUserInfo () {
	return (
		axiosInstance.get('/auth/me/')
	)
}

export function fetchCurrentUserInfo (id) {
	return (
		axiosInstance.get(`/user/${id}/info/`)
	)
}

export function fetchFeedBack (userId) {
	return (
		axiosInstance.get(`/feedback/${userId}/`)
	)
}

export function putUserInfo (data) {
	return (
		axiosInstance.patch('/auth/me/', data)
	)
}
