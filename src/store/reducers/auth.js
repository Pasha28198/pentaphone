import {
	AUTH_USER,
	UNAUTH_USER
} from '../actions/types'

const token = window.localStorage.getItem('JWT_TOKEN')
const INITIAL_STATE = token
	? {authenticated: true, email: window.localStorage.getItem('EMAIL_USER')}
	: { authenticated: false, email: '' }

export default function (state = INITIAL_STATE, {type, payload}) {
	switch (type) {
	case AUTH_USER:
		return {
			authenticated: true,
			email: payload
		}
	case UNAUTH_USER:
		return {
			authenticated: false,
			email: ''
		}
	default: return state
	}
}
