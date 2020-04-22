import { SET_ITEMS_CATALOG, TOOMBLER_FAVORITE_CATALOG, CLEAN_CATALOG } from 'actions/types'
import generateQuery, { createQueryInLink } from 'src/utills/catalog/generateFilter.js'
import { patchFavoriteItem, deleteFavorite } from 'src/api/favorits.js'
import { getCatalogItems, getItemsUserWithId, getItemsDrop } from 'api/catalog'
import pushQuery from 'src/utills/catalog/pushQuery.js'

export const getItems = (page) => {
	return async function (dispatch, getState) {
		const {catalog: {filters}} = getState()
		const {data} = await getCatalogItems(createQueryInLink(filters), 1, page)
		if (generateQuery(filters).slice(1)) {
			pushQuery('?' + generateQuery(filters).slice(1))
		}

		!data.next && !data.previous && dispatch({ type: CLEAN_CATALOG })
		dispatch({ type: SET_ITEMS_CATALOG, payload: data })
	}
}
export const getItemsUser = (page) => {
	return async function (dispatch) {
		const id = window.location.pathname.split('/')[2]
		const {data} = await getItemsUserWithId(page, id)
		dispatch({type: SET_ITEMS_CATALOG, payload: data})
	}
}
export function setFavoritsCatalog (id) {
	return async function (dispatch) {
		await patchFavoriteItem(id)
		dispatch({type: TOOMBLER_FAVORITE_CATALOG, payload: id})
	}
}

export function deleteFavoritsCatalog (id) {
	return async function (dispatch) {
		await deleteFavorite(id)
		dispatch({type: TOOMBLER_FAVORITE_CATALOG, payload: id})
	}
}
export function getModelItems (value) {
	return async function (dispatch) {
		const {results} = await getItemsDrop(value)
		return results
	}
}
