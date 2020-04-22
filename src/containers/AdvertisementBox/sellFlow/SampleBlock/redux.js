import {
	ADD_NEW_INFO_ABOUT_DEVICE
} from 'actions/types'

export const mapStateToProps = (state) => ({
	deviceInfo: state.sellFlow.deviceInfoForSell
})

export const mapActionsToProps = (dispatch) => ({
	dispatchWrapper (func, arg) {
		return dispatch(func(arg))
	},
	pushInfo (payload, key, label) {
		dispatch({
			type: ADD_NEW_INFO_ABOUT_DEVICE,
			payload: {...payload, key, label}
		})
	},
	setImage (payload) { dispatch({type: SET_MAIN_IMAGE, payload}) }
})
