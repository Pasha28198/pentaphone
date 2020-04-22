import {
	getDeviceDetails,
	createExpressOrder as createEO,
	pushEmail
} from 'actions'
import {push, goBack} from 'react-router-redux'
import { exist } from 'utills/functional.js'

import { CLEAN_DEVICE_INFO } from 'actions/types'

export const mapStateToProps = ({buyFlow: {currentDevice}}) => ({
	images: exist(currentDevice, 'images') ? currentDevice.images : [],
	name: exist(currentDevice, 'name') ? currentDevice.name : '',
	verifySeller: exist(currentDevice, 'user') ? currentDevice.user['is_verified_seller'] : '',
	price: exist(currentDevice, 'price') ? currentDevice.price : 0,
	id: exist(currentDevice, 'id') ? currentDevice.id : '',
	type: exist(currentDevice, 'device_type') ? currentDevice['device_type'] : ''
})

export const mapActionsToProps = (dispatch) => ({
	getInfo (id) { dispatch(getDeviceDetails(id)) },
	createOrder (kind) { dispatch(push(`/order/${kind}/contact-info`)) },
	cleanInfo () { dispatch({type: CLEAN_DEVICE_INFO}) },
	createExpressOrder: (data) => dispatch(createEO(data)),
	toThankYouPage () { dispatch(push(`/sell/thank-you-page/order600`)) },
	sendEmail (data) { dispatch(pushEmail(data)) }
})
