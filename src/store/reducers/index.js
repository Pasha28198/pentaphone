import {combineReducers} from 'redux'
import {reducer as formReducer} from 'redux-form'
import { routerReducer } from 'react-router-redux'

// root reducers

import authReducer from './auth'

// sell flow reducers

import deviceInfoForSell from './sellFlowReducer/deviseInfoForSell'
import brands from './sellFlowReducer/brands'
import models from './sellFlowReducer/models.js'
import accessories from './sellFlowReducer/accessories.js'
import mainImage from './sellFlowReducer/mainImage.js'
import versions from './sellFlowReducer/versions.js'
import choices from './sellFlowReducer/choices.js'
import images from './sellFlowReducer/images.js'
import CreatedDeviceId from './sellFlowReducer/currentDevice.js'
import setDopInfo from './sellFlowReducer/dopInfo'
import uploadImages from './sellFlowReducer/imagesAds'
import middlePrice from './sellFlowReducer/middlePrice'

// buy flow reducers

import currentDevice from './buyFlowReducer/itemDeviceInfo.js'
import comments from './buyFlowReducer/coments.js'
import catalog from './buyFlowReducer/catalog.js'
import filters from './buyFlowReducer/filters.js'

// profile data

import userInfo from './userInfo.js'
import city from './order/city.js'
import departments from './order/departaments.js'
import ordersList from './order/list.js'
import orderBuyList from './order/OrderBuyList.js'
import advertisments from './advertisments'

// functionality reducers

import NavigationPanesState from './functionality/NavigationPanesState.js'
import innerSpinnerVisible from './functionality/innerSpinnerVisible.js'
import fullPageSpinnerVisible from './functionality/fullPageSpinnerVisible.js'
import modalWindow from './functionality/modalWindow'
import colors from './buyFlowReducer/colors'
import memory from './buyFlowReducer/memory'

// MVP reducer

import mvpInfo from './MVP/mvpInfo'

// profile

import getFavoritItems from './profile/favorits'
import sells from './profile/mySales.js'
import buys from './profile/myBuys.js'

const rootReducer = combineReducers({
	routing: routerReducer,
	auth: authReducer,
	form: formReducer,
	functionality: combineReducers({
		navState: NavigationPanesState,
		innerSpinnerVisible,
		fullPageSpinnerVisible,
		modalWindow
	}),
	sellFlow: combineReducers({
		memory,
		colors,
		deviceInfoForSell,
		brands,
		models,
		accessories,
		mainImage,
		versions,
		choices,
		images,
		CreatedDeviceId,
		dopInfo: combineReducers({setDopInfo, uploadImages, middlePrice})
	}),
	profile: combineReducers({
		sells,
		buys,
		favorits: getFavoritItems,
		userInfo
	}),
	order: combineReducers({
		city,
		departments,
		ordersList,
		orderBuyList
	}),
	catalog: combineReducers({
		list: catalog,
		filters
	}),
	buyFlow: combineReducers({
		comments,
		currentDevice
	}),
	advertisments,
	mvpInfo
})

export default rootReducer
