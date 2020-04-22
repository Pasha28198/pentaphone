import {goBack} from 'react-router-redux'
import {
	DELETE_ITEM_INFO_ABOUT_DEVICE,
	CLEAN_MODELS
} from 'actions/types'

export const mapStateToProps = (state) => ({
	deviceType: state.routing.location.pathname.split('/')[2],
	data: state.sellFlow.deviceInfoForSell,
	dataModels: state.sellFlow.models,
	dopData: state.sellFlow.dopInfo,
	middlePrice: state.sellFlow.dopInfo.middlePrice.price,
	mainImage: state.sellFlow.mainImage
})
export const mapActionsToProps = (dispatch) => ({
	cleanInfo (payload) {
		!payload && dispatch({type: CLEAN_MODELS})
		dispatch({type: DELETE_ITEM_INFO_ABOUT_DEVICE, payload})
	},
	goBack () {
		dispatch(goBack())
	}
})
