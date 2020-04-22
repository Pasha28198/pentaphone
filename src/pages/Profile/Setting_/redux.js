import {
	verifyPhone,
	sendSmsVerify,
	setNewInfoForUser,
	sendUserInfo,
	getUserInfo
} from 'actions'
import {push} from 'react-router-redux'

export const mapStateToProps = (state) => ({
	userInfo: state.profile.userInfo,
	department: state.profile.userInfo['shipment_department'] || ''
})

export const mapActionsToProps = (dispatch) => ({
	pushToProfile () {
		dispatch(push('/my-rating'))
	},
	verifyCode (data) {
		return dispatch(verifyPhone({'verification_number': data}))
	},
	sendSmd () {
		dispatch(sendSmsVerify())
	},
	addPhone (data) {
		const newData = new FormData()
		newData.append('phone', '+38' + data)
		return dispatch(setNewInfoForUser(newData))
	},
	onSubmit (
		{
			email,
			firstName,
			lastName,
			description,
			phone,
			shipment_city: city,
			shipment_department: department,
			middleName,
			photo
		}
	) {
		const data = new FormData()

		data.append('phone', '+38' + phone)
		data.append('email', email)
		data.append('first_name', firstName)
		data.append('last_name', lastName)
		data.append('description', description || '')
		data.append('shipment_city', city)
		data.append('shipment_department', department)
		data.append('middle_name', middleName)
		photo && data.append('photo', photo)

		return dispatch(sendUserInfo(data))
			.then(() => {
				dispatch(getUserInfo())
				dispatch(push('/my-rating'))
			})
	}
})
