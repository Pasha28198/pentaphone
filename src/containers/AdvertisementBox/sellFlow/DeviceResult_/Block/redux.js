import {
	DELETE_ITEM_INFO_ABOUT_DEVICE,
	CLEAN_MODELS,
	CLEAR_CHOICES,
	SET_MAIN_IMAGE
} from 'actions/types'
import {
	fetchBrands,
	fetchModels
} from 'actions'
import imageDeviceInfoDefault from 'src/utills/configs/configImageInDeviceInfoSellFlow.js'

export const mapStateToProps = (state) => ({
	brands: state.sellFlow.brands,
	models: state.sellFlow.models,
	cureentPosition: state.routing.location.pathname.split('/')[2]
})

export const mapActionsToProps = (dispatch) => ({
	getBrands () {
		return dispatch(fetchBrands())
	},
	getModels (brand) { return dispatch(fetchModels(brand)) },
	clearDopInfo (payload) {
		dispatch({type: DELETE_ITEM_INFO_ABOUT_DEVICE, payload})
	},
	clearInfo (payload, type) {
		if (payload === 'brands') {
			dispatch({type: CLEAN_MODELS})
			dispatch({type: CLEAR_CHOICES})
			dispatch({type: SET_MAIN_IMAGE, payload: imageDeviceInfoDefault[type]})
		} else if (payload === 'model') {
			dispatch({type: CLEAR_CHOICES})
			dispatch({type: SET_MAIN_IMAGE, payload: imageDeviceInfoDefault[type]})
		}
	}
})
