import {
	axiosInstance,
	setJWTTokenToHeader
} from 'api/axiosInstance'

import {
	expressRegistaration,
	fetchUserInfo,
	fetchFeedBack,
	resetPassword,
	confirmNewPassword,
	facebook,
	fetchCurrentUserInfo
} from 'api'

import {
	AUTH_USER,
	UNAUTH_USER,
	SET_USER_INFO,
	CLEAN_USER_INFO
} from './types'

export function loginUser (email, password) {
	return function (dispatch) {
		const res = axiosInstance.post(`auth/login/`, {email, password})
		res.then(res => {
			if (res.status === 200) {
				window.localStorage.setItem('JWT_TOKEN', res.data.token)
				setJWTTokenToHeader()
				window.localStorage.setItem('EMAIL_USER', email)
				dispatch(getUserInfo())
				dispatch({ type: AUTH_USER, payload: email })
			}
		})
		return res
	}
}

export function registerUser ({ email, password1, password2 }) {
	return function (dispatch) {
		const res = axiosInstance.post(`auth/registration/`, { email, password1, password2 })
		res.then(response => {
			window.localStorage.setItem('JWT_TOKEN', response.data.token)
			setJWTTokenToHeader()
			window.localStorage.setItem('EMAIL_USER', email)
			dispatch(getUserInfo())
			dispatch({ type: AUTH_USER, payload: email })
		})
		return res
	}
}

export function logoutUser () {
	return function (dispatch) {
		window.localStorage.removeItem('JWT_TOKEN')
		window.localStorage.removeItem('EMAIL_USER')
		dispatch({type: CLEAN_USER_INFO})
		dispatch({ type: UNAUTH_USER })
		window.location.href = '/auth/login'
	}
}
export function facebookAuth (data, type) {
	return function (dispatch) {
		return facebook(data, type).then(res => {
			window.localStorage.setItem('JWT_TOKEN', res.data.token)
			setJWTTokenToHeader(res.data.token)
			dispatch(getUserInfo())
			window.location.href = '/'
		})
	}
}

export function expressRegistr (mail) {
	return function (dispatch) {
		const res = expressRegistaration(mail)
		res.then(res => {
			if (res.status === 201) {
				window.localStorage.setItem('JWT_TOKEN', res.data.token)
				setJWTTokenToHeader()
				window.localStorage.setItem('EMAIL_USER', mail)
				dispatch(getUserInfo())
				dispatch({ type: AUTH_USER, payload: mail })
			}
		})
		return res
	}
}

export function getUserInfo () {
	return async function (dispatch) {
		const res = await fetchUserInfo()
		dispatch({type: SET_USER_INFO, payload: res.data})
		return res.status
	}
}

export function getCurrentUserInfo (id) {
	return async function (dispatch) {
		const res = await fetchCurrentUserInfo(id)
		return res
		// dispatch({type: SET_CURRENT_USER_INFO, payload: res.data})
	}
}

export function feedBack (userId) {
	return async function () {
		const res = await fetchFeedBack(userId)
		return res
	}
}

export function resetPasswordMail (data) {
	return async function () {
		const res = await resetPassword(data)
		return res
	}
}

export function confirmPassword (data) {
	return async function () {
		const res = await confirmNewPassword(data)
		return res
	}
}
