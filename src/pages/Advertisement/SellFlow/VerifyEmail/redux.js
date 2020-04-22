import {confirmEmail} from 'actions'
import {push} from 'react-router-redux'

export const mapStateToProps = null
export const mapActionsToProps = (dispatch) => ({
	verify (data) {
		dispatch(confirmEmail(data))
		dispatch(push('/sell/thank-you-page/emailVerify'))
	}

})
