import {resetPasswordMail} from 'actions'
import {push} from 'react-router-redux'
import { SubmissionError } from 'redux-form'

export const mapStateToProps = null
export const mapActionsToProps = (dispatch) => ({
	sendResetPassword (data) {
		return dispatch(resetPasswordMail(data))
			.then(() => {
				dispatch(push('/sell/thank-you-page/resetPassword'))
			})
			.catch(({response}) => {
				throw new SubmissionError({email: response && response.data.email[0]})
			})
	}
})
