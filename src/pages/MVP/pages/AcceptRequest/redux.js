import {push} from 'react-router-redux'
import {
	loadAllImages,
	sendUserInfo,
	updateAdvertisment
} from 'actions'

export const mapStateToProps = (state) => ({
	images: state.sellFlow.dopInfo.uploadImages,
	deviceId: state.sellFlow.CreatedDeviceId,
	deviceInfo: state.sellFlow.deviceInfoForSell,
	middlePrice: state.sellFlow.dopInfo.middlePrice.price
})

export const mapActionsToProps = (dispatch) => ({
	pushTo (path) { dispatch(push(`/buyout/${path}`)) },

	loadImages (images, id) { dispatch(loadAllImages(images, id)) },

	sendUserInfo ({phone, city, adress}) {
		const data = new FormData()

		data.append('phone', '+38' + phone)
		data.append('city', city)
		data.append('adress', adress)

		return dispatch(sendUserInfo(data))
	},

	updateAdvertisment (details, payment, id, price) {
		const data = {
			details,
			price,
			'payment_type': payment,
			'is_buyout': true
		}

		dispatch(updateAdvertisment(data, id))
			.then(() => dispatch(push('/sell/thank-you-page/buyout')))
	}
})
