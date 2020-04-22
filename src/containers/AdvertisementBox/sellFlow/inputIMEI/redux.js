import {SET_SERIAL_NUMBER} from 'actions/types'

export const mapStateToProps = (state) => ({})
export const mapActionsToProps = (dispatch) => ({
	setSerialNumber (payload) {
		dispatch({type: SET_SERIAL_NUMBER, payload})
	}
})
