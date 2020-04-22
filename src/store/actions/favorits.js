import {
	favoritsItems,
	patchFavoriteItem,
	deleteFavorite
} from 'api/favorits'

import {
	SET_FAVORITS_ITEMS,
	SET_NEXT_PAGE_FAVORITES,
	DELETE_FAVORITE_ITEM_PAGE
} from 'actions/types'

export function getFavoritsItems () {
	return async function (dispatch) {
		const {data} = await favoritsItems()
		dispatch({type: SET_FAVORITS_ITEMS, payload: data})
	}
}

export function getNextPageFavorites (page) {
	return async function (dispatch) {
		const {data} = await favoritsItems(page)
		dispatch({type: SET_NEXT_PAGE_FAVORITES, payload: data})
	}
}

export function setFavoritsItems (id) {
	return async function () {
		await patchFavoriteItem(id)
	}
}

export function deleteFavoriteItem (id) {
	return async function (dispatch) {
		await deleteFavorite(id)
		dispatch({type: DELETE_FAVORITE_ITEM_PAGE, payload: id})
	}
}
