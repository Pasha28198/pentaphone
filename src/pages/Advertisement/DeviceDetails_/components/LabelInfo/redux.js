import {push} from 'react-router-redux'
import { exist } from 'utills/functional.js'
import {
	setFavoritsItems,
	deleteFavoriteItem
} from 'actions'
import {
	SET_FAVORITE_DEVICE,
	DELETE_DEVICE_INFO
} from 'actions/types'

export const mapStateToProps = ({buyFlow: {currentDevice}}) => ({
	images: exist(currentDevice, 'images') ? currentDevice.images : [],
	inFavorite: currentDevice['in_favorite'],
	number: currentDevice.inumber,
	id: currentDevice.id,
	name: currentDevice.name,
	rating: exist(currentDevice, 'user') && currentDevice.user.rating,
	ratingTelephone: exist(currentDevice, 'ratings') && currentDevice.ratings ? currentDevice.ratings.rating : 0,
	view: currentDevice.views,
	condition: currentDevice.condition,
	visualCondition: currentDevice['visual_condition'],
	verify: currentDevice['is_review'],
	verifiedSeller: exist(currentDevice, 'user') && currentDevice.user['is_verified_seller'],
	price: currentDevice['price'],
	newPrice: currentDevice['device_price']
})
export const mapActionsToProps = (dispatch) => ({
	addToFavorite (id) {
		if (id) {
			dispatch(setFavoritsItems(id))
			dispatch({type: SET_FAVORITE_DEVICE})
		}
	},
	createOrder (kind) {
		dispatch(push(`/order/${kind}/contact-info`))
	},
	deleteFavorite (id) {
		dispatch(deleteFavoriteItem(id))
		dispatch({type: DELETE_DEVICE_INFO})
	}
})
