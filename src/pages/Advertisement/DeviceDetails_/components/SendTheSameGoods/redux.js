export const mapStateToProps = (state) => {
	const initialValues = {email: state.profile.userInfo.email || ''}
	return {initialValues}
}

export const mapActionsToProps = (dispatch) => ({})
