import {facebookAuth} from 'actions'
export const mapStateToProps = (state) => ({})
export const mapActionsToProps = (dispatch) => ({
	facebook (data) {
		dispatch(facebookAuth(data))
	}
})
