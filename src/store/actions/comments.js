import {
	fetchComents,
	pushComents
} from 'api'

import {
	GET_COMENTS_LIST
} from 'actions/types'

export function getComentsList (id) {
	return async function (dispatch) {
		const {data} = await fetchComents(id)
		dispatch({type: GET_COMENTS_LIST, payload: data.results})
	}
}

export function createComent (dataComment) {
	return async function () {
		const res = await pushComents(dataComment)
		return res
	}
}
