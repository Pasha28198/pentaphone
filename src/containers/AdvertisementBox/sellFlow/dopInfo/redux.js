import {
	SET_IS_BARGAIN,
	SET_IS_WATTANTY,
	SET_IS_OWNER
} from 'actions/types'

export const mapStateToProps = (state) => ({})
export const mapActionsToProps = (dispatch) => ({
	setBargain (data) {
		dispatch({type: SET_IS_BARGAIN, payload: data})
	},
	setWarranty (data) {
		dispatch({type: SET_IS_WATTANTY, payload: data})
	},
	setOwner (data) {
		dispatch({type: SET_IS_OWNER, payload: data})
	}
})
