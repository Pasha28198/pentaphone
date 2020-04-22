import {formValueSelector} from 'redux-form'
import {push} from 'react-router-redux'
import {
	setNewInfoForUser,
	verifyPhone,
	sendSmsVerify
} from 'actions'
export const mapStateToProps = (state) => ({
	phone: formValueSelector('verifyNumber')(state, 'phone')
})
export const mapActionsToProps = (dispatch) => ({
	verifyCode (data) {
		return dispatch(verifyPhone({'verification_number': data}))
	},
	addPhone (data) {
		const newData = new FormData()
		newData.append('phone', '+38' + data)
		return dispatch(setNewInfoForUser(newData))
	},
	sendSmd () {
		dispatch(sendSmsVerify())
	},
	finishRegistration (data) {
		const newData = new FormData()
		newData.append('first_name', data)
		dispatch(setNewInfoForUser(newData))
		dispatch(push('/sell/verify'))
	}
})
