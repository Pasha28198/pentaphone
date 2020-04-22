import {push} from 'react-router-redux'

import {
	getCategories,
	getBrands,
	getAccessories,
	getVersions,
	pushDraftAds,
	uploadImage,
	verifyPhoneNumber,
	sendSms,
	patchDopInfo,
	deleteImage,
	getPriceWizard,
	getDataStatistics,
	delAdvertisment,
	getTopDeviceBrand,
	getModelsWithSlug,
	getColors,
	getPriseWizardVersions
} from 'api'
import {
	GET_BRANDS,
	GET_ACCESSORIES,
	GET_MODELS,
	GET_VERSIONS,
	GET_CHOICES,
	SET_CURRENT_DEVICE_ID,
	DELETE_IMAGE,
	SET_MIDDLE_PRICE,
	SET_MAIN_IMAGE,
	ADD_NEW_INFO_ABOUT_DEVICE
} from './types'

import PriceGraph from 'utills/sellFlow/dateGraph.js'

export const fetchCategories = () =>
	async function () {
		const {data} = await getCategories()
		return data.results
	}

export const fetchBrands = (type, priority) => {
	return async (dispatch) => {
		const res = await getBrands(window.location.pathname.split('/')[2], priority)
		dispatch({type: GET_BRANDS, payload: res.data})
	}
}

export const fetchSpec = (priority, pk, type) => {
	return async (dispatch) => {
		const res = await getColors(priority, pk)
		dispatch({type: type, payload: res.data})
	}
}

export const fetchModels = (type, query) => {
	return async (dispatch) => {
		let res = await getModelsWithSlug(type)

		// checking on query params and generate dop info for item depends on params
		if (query) {
			const payload = {
				name: type[0].toUpperCase() + type.substring(1),
				image: '',
				key: 'brands',
				pk: res.data[0].brand,
				label: 'Бренд',
				labelImage: false
			}
			dispatch({type: ADD_NEW_INFO_ABOUT_DEVICE, payload})
		}

		dispatch({type: GET_MODELS, payload: res.data})
	}
}

export const fetchAccessories = (type) => {
	return async (dispatch) => {
		const res = await getAccessories(type)
		dispatch({type: GET_ACCESSORIES, payload: res.data.results})
	}
}

export function fetchVersions (pkPhone, query) {
	return async (dispatch, getState) => {
		let version = getState().sellFlow.deviceInfoForSell
			.filter(item => item.key.split('_')[0] === 'versions')

		version = version.length ? version.reduce((prev, cur) => prev + 'specs=' + cur.pk + '&', '') : ''

		const model = getState().sellFlow.deviceInfoForSell.filter(item => item.key === 'model')[0]
		let res
		// getting data and generate redux if we have query params
		if (query) {
			// getting models and choose current model depends on pk
			// for all information to render device result with image
			const models = await getModelsWithSlug(query)
			const currenModel = models.data.find(item => item.pk === +pkPhone)

			// generate data for dop info
			const payload = {
				name: query[0].toUpperCase() + query.substring(1),
				image: '',
				key: 'brands',
				pk: currenModel.brand,
				label: 'Бренд',
				labelImage: false
			}

			// getting versions depends on pk
			res = await getVersions(currenModel.pk)

			// add generated info to redux
			dispatch({type: SET_MAIN_IMAGE, payload: currenModel.image})
			dispatch({type: ADD_NEW_INFO_ABOUT_DEVICE, payload})
			dispatch({
				type: ADD_NEW_INFO_ABOUT_DEVICE,
				payload: {
					...currenModel,
					key: 'model',
					label: 'Модель'
				}
			})
		} else {
			// getting data if we don't have query params
			res = await getVersions(model.pk, version)
		}

		dispatch({type: GET_VERSIONS, payload: res.data.results})
		dispatch({type: GET_CHOICES, payload: res.data.choices})
	}
}

export function pushDraft (data) {
	return async (dispatch) => {
		const {data: {id}} = await pushDraftAds(data)
		dispatch({type: SET_CURRENT_DEVICE_ID, payload: id})
	}
}

export function pushImage (data, pk) {
	console.log(data)
	return async () => {
		const res = await uploadImage(data, pk)
		return res
	}
}

export function verifyPhone (data) {
	return async () => {
		const res = await verifyPhoneNumber(data)
		return res
	}
}

export function sendSmsVerify () {
	return async () => {
		const res = await sendSms()
		return res
	}
}

export function updateAdvertisment (data, id) {
	return async (dispatch) => {
		const res = await patchDopInfo(data, id)
		if (res.status === 200) {
			dispatch(push('/my-advertisments'))
		}
	}
}

export function deletImageAdvertisment (adsPk, imagePk) {
	return async (dispatch) => {
		await deleteImage(adsPk, imagePk)
		dispatch({type: DELETE_IMAGE, payload: imagePk})
	}
}

export function priceWizard (id) {
	return async (dispatch) => {
		const res = await getPriceWizard(id)
		dispatch({type: SET_MIDDLE_PRICE, payload: res.data})
	}
}

export function dataStatistics (id) {
	return async () => {
		const {data} = await getDataStatistics(id)
		const priceGraph = PriceGraph(data['price_graph'])
		const priceGraphUsed = PriceGraph(data['price_graph_used'])
		return {
			price_graph: priceGraph,
			price_graph_used: priceGraphUsed
		}
	}
}
export function setMainImage (img) {
	return async (dispatch) => {
		dispatch({type: SET_MAIN_IMAGE, payload: img})
	}
}
export function pushStartPrice (id, data) {
	return async () => {
		const res = await patchDopInfo(data, id)
		return res
	}
}
export function deleteAdvertisment (id) {
	return async () => {
		const res = await delAdvertisment(id)
		return res
	}
}

export function getTopDeviceByBrand (brand) {
	return getTopDeviceBrand(brand)
}
export function loadAllImages (images, pk) {
	return async () => {
		for (var i = 0; i < images.length; i++) {
			const image = new FormData()
			image.append('image', images[i])
			image.append('item', pk)
			await uploadImage(image, pk)
		}
	}
}
export function getPriseWizardVers (version, condition, visCond) {
	return async (dispatch) => {
		const res = await getPriseWizardVersions(version, condition, visCond)
		dispatch({type: SET_MIDDLE_PRICE, payload: res.data})
	}
}
