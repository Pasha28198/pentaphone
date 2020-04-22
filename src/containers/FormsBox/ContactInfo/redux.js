import { formValueSelector } from 'redux-form'

export const mapStateToProps = (state) => {
	return ({
		firstName: state.profile.userInfo['first_name'],
		lastName: state.profile.userInfo['last_name'],
		middleName: state.profile.userInfo['middle_name'],
		phoneNumber: state.profile.userInfo.phone,
		phoneInRedux: formValueSelector('contactInfoOrder')(state, 'phoneNumber')
	})
}

export const mapActionsToProps = (dispatch) => ({})
