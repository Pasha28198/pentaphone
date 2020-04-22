import { getTopRecentlyAded } from 'actions'
export const mapStateToProps = (state) => ({})
export const mapActionsToProps = (dispatch) => ({
	getRecent () {
		return dispatch(getTopRecentlyAded())
	}
})
