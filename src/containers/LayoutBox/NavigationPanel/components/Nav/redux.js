import {logoutUser} from 'actions'

export const mapStateToProps = (state) => ({
	auth: state.auth.authenticated
})
export const mapActionsToProps = (dispatch) => ({
	logOut () { dispatch(logoutUser()) }
})
