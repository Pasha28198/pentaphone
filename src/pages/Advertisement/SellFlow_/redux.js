import {push} from 'react-router-redux'

import {
	ADD_NEW_INFO_ABOUT_DEVICE,
	CLEAN_INFO_ABOUT_DEVICE,
	CLEAN_CURRENT_DEVICE,
	CLEAN_IMAGES_STORE,
	CLEAN_BRAND,
	CLEAN_MODELS,
	CLEAR_CHOICES,
	SET_MAIN_IMAGE
} from 'actions/types'

import {
	fetchBrands,
	pushDraft,
	expressRegistr
} from 'actions'

import defaultConfigDevice from 'src/utills/sellFlow/defaultConfigDevice.js'
import laptopConfigDevice from 'src/utills/sellFlow/laptopConfigDevice.js'

export const mapStateToProps = ({sellFlow, auth, routing: {location: {pathname}}}) => {
	let version

	if (sellFlow.deviceInfoForSell.length > 3) {
		version = sellFlow.versions[0] && sellFlow.versions[0].pk
	}
	return {
		accs: sellFlow.accessories,
		data: pathname.split('/')[2] === 'laptop'
			? laptopConfigDevice(sellFlow, pathname.split('/')[2])
			: defaultConfigDevice(sellFlow, pathname.split('/')[2]),
		deviceInfoForSell: sellFlow.deviceInfoForSell,
		auth: auth.authenticated,
		version
	}
}

export const mapActionsToProps = (dispatch) => ({
	getBrands (type) { return dispatch(fetchBrands(type)) },
	pushToDopInfo (infoForSell, version) {
		const condition = infoForSell.find((item) => item.key === 'condition').pk
		const visualCond = infoForSell.find((item) => item.key === 'visual_condition').pk
		const data = {
			'device': infoForSell.find((item) => item.key === 'model').pk,
			'brand': infoForSell.find((item) => item.key === 'brands').pk,
			'name': infoForSell.find((item) => item.key === 'brands').name,
			'condition': condition !== '200' ? condition : visualCond,
			'accessories': infoForSell.filter(item => item.key === 'accessories').map(item => item.pk),
			version
		}

		dispatch(pushDraft(data))
		dispatch(push('/sell/dop-info'))
	},
	dispatchWrapper (func, arg, type) {
		if (type) return dispatch(func(arg, type))

		return dispatch(func(arg))
	},
	pushInfo (payload, key, label) {
		return dispatch({
			type: ADD_NEW_INFO_ABOUT_DEVICE,
			payload: {...payload, key, label}
		})
	},
	setImage (payload) { dispatch({type: SET_MAIN_IMAGE, payload}) },
	cleanCreatedId () {
		dispatch({type: CLEAN_CURRENT_DEVICE})
		dispatch({type: CLEAN_IMAGES_STORE})
	},
	cleanCreatedDevice () {
		dispatch({type: CLEAN_INFO_ABOUT_DEVICE})
		dispatch({type: CLEAN_BRAND})
		dispatch({type: CLEAN_MODELS})
		dispatch({type: CLEAR_CHOICES})
	},
	fastRegisterUser: (mail) => dispatch(expressRegistr(mail))

})
