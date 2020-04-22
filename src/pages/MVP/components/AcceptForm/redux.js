export const mapStateToProps = (state) => ({
	initialValues: {
		city: state.mvpInfo.city,
		adress: state.mvpInfo.adress,
		phone: state.profile.userInfo.phone && state.profile.userInfo.phone.substr(3)
	}
})
export const mapActionsToProps = (dispatch) => ({

})
