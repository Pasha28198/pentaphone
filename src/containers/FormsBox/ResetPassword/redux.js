import { formValueSelector } from 'redux-form'

export const mapStateToProps = (state) => {
	const initialValues = {
		email: sessionStorage.getItem('resetPassword')
	}
	return ({
		email: formValueSelector('fastRegistration')(state, 'email'),
		initialValues
	})
}
export const mapActionsToProps = (dispatch) => ({})
