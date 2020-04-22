import {
	getItemsUser,
	feedBack,
	getCurrentUserInfo,
	setFavoritsCatalog,
	deleteFavoritsCatalog
} from 'actions'
import { CLEAN_CATALOG } from 'actions/types'
import { catalogItems } from 'src/store/selectors/catalog'
import { verifyImg, getLazyImage } from 'src/utills/functional'
import { priceFormat } from 'src/utills/functional.js'
import { condition } from 'src/utills/main/conditional.js'

export const mapStateToProps = (state) => ({
	userInfo: state.profile.userInfo,
	pages: catalogItems(state, 'countPages'),
	count: catalogItems(state, 'count'),
	items: catalogItems(state, 'items')
		.map(item => ({
			id: item.id,
			inFavorit: item['in_favorite'],
			imageCard: verifyImg(item.images),
			lazyImage: getLazyImage(item.images),
			nameCard: item.name,
			price: priceFormat(+item.price),
			textField1: condition[item.condition],
			textField2: item.user && item.user['is_verified_seller'] ? 'Надежный продавец' : '',
			currency: 'грн',
			favoriteActive: item['in_favorite']
		}))
})

export const mapActionsToProps = (dispatch) => ({
	fetchFeedBeck (id) { return dispatch(feedBack(id)) },
	fetchCurrentUser (id) { return dispatch(getCurrentUserInfo(id)) },
	fetchItems (page) { return dispatch(getItemsUser(page)) },
	cleanCatalog () { dispatch({type: CLEAN_CATALOG}) },
	toomblerFavorite (inFavoriteBool, id) { inFavoriteBool ? dispatch(deleteFavoritsCatalog(id)) : dispatch(setFavoritsCatalog(id)) }
})
