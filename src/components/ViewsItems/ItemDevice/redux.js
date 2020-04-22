import {
	setFavoritsItems,
	deleteFavoriteItem
} from 'actions'

import {
	DELETE_DEVICE_INFO,
	DELETE_FAVORITE_ITEM_PAGE
} from 'actions/types'

export const mapStateToProps = ({auth: {authenticated}}) => ({
	auth: authenticated
})
export const mapActionsToProps = (dispatch) => ({
	addToFavorite (id) {
		dispatch(setFavoritsItems(id))
	},
	deleteFavorite (id) {
		dispatch(deleteFavoriteItem(id))
		// dispatch({type: DELETE_FAVORITE_ITEM, payload: id})
		dispatch({type: DELETE_DEVICE_INFO})
	},
	deleteFavoriteItem (id, e) {
		e.preventDefault()
		dispatch({type: DELETE_FAVORITE_ITEM_PAGE, payload: id})
		dispatch(deleteFavoriteItem(id))
	}
})
