import {SET_ADRESS} from 'actions/types'

export const mapStateToProps = (state) => ({})
export const mapActionsToProps = (dispatch) => ({
	addAdress (payload) {
		dispatch({type: SET_ADRESS, payload})
	}
})
