import { getFavoritsItems, getNextPageFavorites, deleteFavoriteItem } from 'actions/favorits'
import { CLEAN_FAVORITE_DATA } from 'actions/types'
import { verifyImg, getLazyImage } from 'src/utills/functional.js'
import { priceFormat } from 'src/utills/functional'
import condition from 'src/utills/main/visCondition.js'

export const mapStateToProps = ({profile}) => ({
	items: profile.favorits.items.map(item => ({
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
	})),
	pages: profile.favorits.countPages
})

export const mapActionsToProps = (dispatch) => ({
	getItems: () => { return dispatch(getFavoritsItems()) },
	cleanFavorites: () => { dispatch({ type: CLEAN_FAVORITE_DATA }) },
	deleteFavorite: (id) => { dispatch(deleteFavoriteItem(id)) },
	nextPage: () => { dispatch(getNextPageFavorites()) }
})
