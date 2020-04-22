import { getDeviceDetailsEdit, updateAdvertisment } from 'actions'
import { CLEAN_IMAGES_STORE } from 'actions/types'
import { choseImageForEditDevice } from 'utills/functional.js'

export const mapStateToProps = ({buyFlow, sellFlow}) => ({
	title: buyFlow.currentDevice.name,
	thumbnail: choseImageForEditDevice(buyFlow, sellFlow),
	data: buyFlow.currentDevice
})

export const mapActionsToProps = (dispatch) => ({
	getDeviceInfo (id) { dispatch(getDeviceDetailsEdit(id)) },

	clearImages () { dispatch({type: CLEAN_IMAGES_STORE}) },

	edit (data, id) {
		const newData = {
			price: data.price,
			details: data.details,
			condition: data.condition,
			'serial_number': data.serialNumber,
			'visual_condition': data.visualCondition,
			'is_warranty': data.isWarranty,
			'is_bargain': data.isBargain,
			'is_owner': data.isOwner,
			'is_review': data.isReview,
			'start_price': data.startPrice,
			'is_bet': data.isBet
		}

		dispatch(updateAdvertisment(newData, id))
	}
})
