import { getItems, setFavoritsCatalog, deleteFavoritsCatalog } from 'actions'
import { setQuertyFilter } from 'actions/filters.js'
import { catalogItems } from 'src/store/selectors/catalog'
import { CLEAN_CATALOG } from 'actions/types'
import { verifyImg, getLazyImage } from 'src/utills/functional'
import { priceFormat } from 'src/utills/functional.js'
import conditions from 'utills/main/visCondition.js'
import configHeader from 'src/utills/catalog/configurationHeader.js'
import {push} from 'react-router-redux'

export const mapStateToProps = (state) => {
	return {
		pages: catalogItems(state, 'countPages'),
		count: catalogItems(state, 'count'),
		headerFiltered: configHeader(state.catalog.filters, window.location.pathname.split('/')[2]),
		items: catalogItems(state, 'items')
			.map(item => ({
				id: item.id,
				inFavorit: item['in_favorite'],
				imageCard: verifyImg(item.images),
				lazyImage: getLazyImage(item.images),
				nameCard: item.name,
				price: priceFormat(+item.price),
				textField1: conditions[item.condition],
				textField2: item.user && item.user['is_verified_seller'],
				currency: 'грн',
				favoriteActive: item['in_favorite']
			}))
	}
}

export const mapActionsToProps = (dispatch) => ({
	getItems: (page) => { dispatch(getItems(page)) },
	setFilters: (obj) => { dispatch(setQuertyFilter(obj)) },
	cleanCatalog: () => { dispatch({type: CLEAN_CATALOG}) },
	toomblerFavorite: (inFavoriteBool, id) => inFavoriteBool ? dispatch(deleteFavoritsCatalog(id)) : dispatch(setFavoritsCatalog(id)),
	pushTo (path) { dispatch(push(path)) }
})
