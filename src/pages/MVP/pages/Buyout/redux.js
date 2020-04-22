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
	getPriseWizardVers
} from 'actions'

import defaultConfigDevice from 'src/utills/sellFlow/defaultConfigDevice.js'
import laptopConfigDevice from 'src/utills/sellFlow/laptopConfigDevice.js'

export const mapStateToProps = ({sellFlow, auth, routing: {location: {pathname}}}) => {
	let version

	if (sellFlow.deviceInfoForSell.length > 3) {
		version = sellFlow.versions[0].pk
	}

	return {
		data: pathname.split('/')[2] === 'laptop'
			? laptopConfigDevice(sellFlow, pathname.split('/')[2])
			: defaultConfigDevice(sellFlow, pathname.split('/')[2]),
		deviceInfoForSell: sellFlow.deviceInfoForSell,
		images: sellFlow.dopInfo.uploadImages,
		version,
		auth: auth.authenticated
	}
}

export const mapActionsToProps = (dispatch) => ({
	getBrands (type) { return dispatch(fetchBrands(type)) },

	pushToDopInfo (infoForSell, version) {
		dispatch(getPriseWizardVers(
			version,
			infoForSell.find((item) => item.key === 'condition').pk,
			infoForSell.find((item) => item.key === 'visual_condition').pk
		))
	},
	dispatchWrapper (func, arg, type) {
		return type ? dispatch(func(arg, type)) : dispatch(func(arg))
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
	pushToError: () => dispatch(push('/buyout/error-desktop'))

})
