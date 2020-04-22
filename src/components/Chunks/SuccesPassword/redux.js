import { formValueSelector } from 'redux-form'
export const mapStateToProps = (state) => ({
	value: formValueSelector('registration')(state, 'password1') || formValueSelector('confirmPassword')(state, 'new_password1')
})
export const mapActionsToProps = (dispatch) => ({})
