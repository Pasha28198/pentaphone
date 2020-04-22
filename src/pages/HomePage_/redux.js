import { getTopCatalog } from 'actions'

export const mapStateToProps = (state) => ({})
export const mapActionsToProps = (dispatch) => ({
	getTopElement () {
		return dispatch(getTopCatalog())
	}
})
