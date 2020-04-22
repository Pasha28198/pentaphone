import {
	SET_NEW_FILTER, CLEAN_CATALOG,
	CLEAR_FILTERS, SET_FROM_QUERY,
	CLEAN_MODELS_FILTER, CLEAN_MODELS
} from 'actions/types'
import { getItems } from 'actions'
import pushQuery from 'src/utills/catalog/pushQuery.js'

export function setFilter (key, value) {
	return async function (dispatch) {
		dispatch({type: SET_NEW_FILTER, payload: {key, value}})
		dispatch({type: CLEAN_CATALOG})
		pushQuery('')
		dispatch(getItems(1))
	}
}

export function clearFilter () {
	return async function (dispatch) {
		dispatch({type: CLEAR_FILTERS})
		dispatch({type: CLEAN_CATALOG})
		pushQuery('')
		dispatch(getItems(1))
	}
}

export function clearModels () {
	return async function (dispatch) {
		dispatch({type: CLEAN_MODELS_FILTER})
		dispatch({type: CLEAN_MODELS})
		dispatch({type: CLEAN_CATALOG})
		pushQuery('')
		// dispatch(getItems(1))
	}
}

export function setQuertyFilter (obj) {
	return async function (dispatch) {
		dispatch({type: SET_FROM_QUERY, payload: obj})
		dispatch({type: CLEAN_CATALOG})
		dispatch(getItems(1))
	}
}
