import {SET_DETAILS} from 'actions/types'
export const mapStateToProps = (state) => ({})
export const mapActionsToProps = (dispatch) => ({
	setDetails (data) { dispatch({type: SET_DETAILS, payload: data}) }
})
