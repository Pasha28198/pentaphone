import {getAgreem} from 'actions'

export const mapStateToProps = (state) => ({})
export const mapActionsToProps = (dispatch) => ({
	getAgreements () {
		return dispatch(getAgreem())
	}
})
