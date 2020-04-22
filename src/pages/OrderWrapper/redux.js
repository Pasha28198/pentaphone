import {
	loginUser
	// registerUser,
	// facebookAuth
} from 'actions'
import { SubmissionError } from 'redux-form'
import {push} from 'react-router-redux'

export const mapStateToProps = ({auth, buyFlow, userInfo}) => ({
	auth: auth.authenticated,
	id: buyFlow.currentDevice.id,
	userInfo: userInfo
})
export const onSubmitLogIn = ({email, password}) => (dispatch) =>
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
