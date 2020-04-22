import { loginUser, registerUser, facebookAuth } from 'actions'
import { userInfo } from 'src/store/selectors/profile.js'
import { SubmissionError } from 'redux-form'
import {push} from 'react-router-redux'

export const mapStateToProps = state => ({
	id: userInfo(state, 'pk'),
	auth: state.auth.authenticated
})

export const pushToRoute = (route) => dispatch => {
	return dispatch(push(route))
}

export const onSubmitLogIn = ({email, password}) => (dispatch, getState, state) =>
	dispatch(loginUser(email, password))
		.then(({status}) => {
			if (window.location.pathname === '/auth/login' || window.location.pathname === '/auth/registration' || window.location.pathname === '/auth/login/facebook') {
				dispatch(push('/'))
			}
		})
		.catch(({response: {data}}) => {
			if ('email' in data) {
				throw new SubmissionError({email: data.email[0]})
			} else if ('non_field_errors' in data) {
				sessionStorage.setItem('resetPassword', email)
				throw new SubmissionError({password: data['non_field_errors'][0]})
			} else if ('password' in data) {
				throw new SubmissionError({password: data['password'][0]})
			}
		})

export const onSubmitRegistration = ({email, password1, password2}) => (dispatch) =>
	dispatch(registerUser({email, password1, password2}))
		.then(({status}) => {
			if (window.location.pathname === '/auth/login' || window.location.pathname === '/auth/registration') {
				dispatch(push('/'))
			}
		})
		.catch(({response}) => {
			const {data} = response
			if ('email' in data) {
				throw new SubmissionError({email: data.email[0]})
			} else if ('non_field_errors' in data) {
				throw new SubmissionError({password: data['non_field_errors'][0]})
			} else if ('password1' in data) {
				const {password1} = data
				const underString = password1[1] && password1[1].indexOf('только из цифр')
				if (password1.length === 2 && underString) {
					const firstPart = password1[0].substr(0, password1[0].length - 1)
					const error = firstPart + ' и состоит только из цифр'
					throw new SubmissionError({password1: error})
				} else {
					throw new SubmissionError({password1: password1[0]})
				}
			}
		})

export const pushTo = (obj, type) => dispatch => dispatch(facebookAuth(obj, type))
