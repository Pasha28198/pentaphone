import {
	DELETE_ITEM_INFO_ABOUT_DEVICE,
	CLEAN_MODELS
} from 'actions/types'
import {push} from 'react-router-redux'

export const mapStateToProps = ({sellFlow}) => {
	const images = sellFlow.dopInfo.uploadImages.filter(item => item.image && item)
	return {
		id: sellFlow.CreatedDeviceId,
		data: sellFlow.deviceInfoForSell,
		dataModels: sellFlow.models,
		dopData: sellFlow.dopInfo,
		middlePrice: sellFlow.dopInfo.middlePrice.price,
		images
	}
}
export const mapActionsToProps = (dispatch) => ({
	cleanInfo (payload) {
		!payload && dispatch({type: CLEAN_MODELS})
		dispatch({type: DELETE_ITEM_INFO_ABOUT_DEVICE, payload})
	},
	pushTo (path) { dispatch(push(`/buyout/${path}`)) }
})
