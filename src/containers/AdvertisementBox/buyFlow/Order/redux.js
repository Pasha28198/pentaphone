import {
	getCity,
	createOrderItem,
	addSellerData,
	paymentOrderInfo as payBuyer,
	getPriceList,
	paymentSellerOrderInfo as paySeller,
	verifyPost,
	expressRegistr
} from 'actions'

import {CLEAN_DEVICE_INFO} from 'actions/types'
import { formValueSelector } from 'redux-form'
import {push, goBack} from 'react-router-redux'

const paySellerWay = function (data) {
	window.wayforpay.run(data, function (response) {
		window.location.href = '/my-sales'
		console.log(response, 'fasdf1')
	}, function (response) {
		console.log(response, 'fasdf2')
	}, function (response) {
		console.log(response, 'fasdf3')
	})
}

const payBuyerWay = function (data) {
	window.wayforpay.run(data, function (response) {
		window.location.href = '/my-buys'
		console.log(response, 'fasdf1')
	}, function (response) {
		console.log(response, 'fasdf2')
	}, function (response) {
		console.log(response, 'fasdf3')
	})
}

export const mapStateToProps = (state) => {
	const id = 'id' in state.buyFlow.currentDevice ? state.buyFlow.currentDevice.id : ''
	const prefix = id ? 'buyer' : 'seller'
	return {
		item: id,
		prefix,
		contactOrderInfo: formValueSelector('infoForTTN')(state, 'contactOrderInfo'),
		branchPost: formValueSelector('infoForTTN')(state, 'branchPost'),
		shipDepart: state.profile.userInfo.shipment_department,
		shipCity: state.profile.userInfo.shipment_city,
		user: state.profile.userInfo.pk,
		auth: state.auth.authenticated
	}
}

export const mapActionsToProps = (dispatch) => ({
	fastRegisterUser (mail) {
		return dispatch(expressRegistr(mail))
	},
	fetchCity () { dispatch(getCity()) },
	sendBuyerData (data, kind) {
		data.kind = parseInt(kind)
		return dispatch(createOrderItem(data))
	},
	sendSellerData (id, data) {
		return dispatch(addSellerData(id, data))
	},
	toHome () { dispatch(push('/')) },
	toThYouPage (type) {
		dispatch(push(`/sell/thank-you-page/${type}`))
	},
	orderPaymentInfo (id) {
		dispatch(payBuyer(id)).then(res => payBuyerWay(res))
	},
	fetchPriceList (id, kind) { return dispatch(getPriceList(id, kind)) },
	orderPaymentSeller (id) {
		dispatch(paySeller(id)).then(res => {
			paySellerWay(res)
		})
	},
	clearAds () { dispatch({type: CLEAN_DEVICE_INFO}) },
	verify (id, code) { return dispatch(verifyPost(id, code)) },
	goBack () { dispatch(goBack()) }
})
