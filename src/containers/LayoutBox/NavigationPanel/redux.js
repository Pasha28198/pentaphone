import { DISABLE_NAVIGATION } from 'actions/types'
import {getUserInfo} from 'actions/auth'

export const mapStateToProps = (state) => ({
	navState: state.functionality.navState,
	data: state.profile.userInfo,
	auth: state.auth.authenticated
})

export const mapActionsToProps = (dispatch) => ({
	closeNav () {
		dispatch({ type: DISABLE_NAVIGATION })
	},
	getUserInformation () {
		dispatch(getUserInfo())
	}

})
