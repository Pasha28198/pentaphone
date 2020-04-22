import axios from 'axios'
import {API_ROOT} from './generateUrl'

export const axiosInstance = axios.create({
	baseURL: API_ROOT
})

axiosInstance.interceptors.response.use(
	function (response) { return response },
	function (error) {
		if (error.response && (error.response.status === 401 || error.response.status === 403)) {
			window.localStorage.removeItem('JWT_TOKEN')
			window.location.href = '/auth/login'
		}
		return Promise.reject(error)
	})

export function setJWTTokenToHeader (JWT_TOKEN = window.localStorage.getItem('JWT_TOKEN')) {
	if (JWT_TOKEN) {
		axiosInstance.defaults.headers.common['Authorization'] = `JWT ${JWT_TOKEN}`
	}
}

setJWTTokenToHeader()
