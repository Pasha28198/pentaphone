import {
	setFavoritsItems,
	deleteFavoriteItem
} from 'actions'

import {
	DELETE_FAVORITE_ITEM
} from 'actions/types'

export const mapStateToProps = (state) => ({
	auth: state.auth.authenticated
})
export const mapActionsToProps = (dispatch) => ({
	addToFavorite (id) {
		dispatch(setFavoritsItems(id))
	},
	deleteFavorite (id) {
		dispatch(deleteFavoriteItem(id))
		dispatch({type: DELETE_FAVORITE_ITEM, payload: id})
	}
})
