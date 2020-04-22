import { formValueSelector } from 'redux-form'

export const mapStateToProps = (state) => {
	const initialValues = {
		lastName: state.profile.userInfo['last_name'],
		firstName: state.profile.userInfo['first_name'],
		middleName: state.profile.userInfo['middle_name'],
		email: state.profile.userInfo.email,
		description: state.profile.userInfo.description,
		phone: state.profile.userInfo.phone && state.profile.userInfo.phone.substr(3),
		shipment_city: state.profile.userInfo['shipment_city']
	}
	return {
		userInfo: state.profile.userInfo,
		lastName: formValueSelector('refactorProfile')(state, 'lastName'),
		firstName: formValueSelector('refactorProfile')(state, 'firstName'),
		middleName: formValueSelector('refactorProfile')(state, 'middleName'),
		email: formValueSelector('refactorProfile')(state, 'email'),
		description: formValueSelector('refactorProfile')(state, 'description'),
		defaultCity: state.profile.userInfo['shipment_city'],
		initialValues
	}
}
export const mapActionsToProps = dispatch => ({})
