import {confirmPassword} from 'actions'
import { SubmissionError } from 'redux-form'
import {push} from 'react-router-redux'

export const mapStateToProps = null
export const mapActionsToProps = (dispatch, {parentProps: {match}}) => ({
	sendNewPassword (data) {
		const {token, id} = match.params
		data.token = token
		data.uid = id
		return dispatch(confirmPassword(data))
			.then((res) => { dispatch(push('/auth/login')) })
			.catch(({response: {data}}) => {
				if ('new_password1' in data) {
					throw new SubmissionError({new_password1: data['new_password1'][0]})
				}
				if ('new_password2' in data) {
					throw new SubmissionError({new_password2: data['new_password2'][0]})
				}
			})
	}
})
