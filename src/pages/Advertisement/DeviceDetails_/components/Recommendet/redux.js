import { getTopRecommendet } from 'actions'

export const mapStateToProps = (state) => ({})
export const mapActionsToProps = (dispatch) => ({
	getTopIphone (id) {
		return dispatch(getTopRecommendet(id))
	}
})
