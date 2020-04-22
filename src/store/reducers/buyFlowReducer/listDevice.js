import {
	GET_LIST_DEVICE,
	ADD_NEXT_DATA,
	CLEAN_DATA,
	DELETE_FAVORITE_ITEM
} from 'actions/types'

export default function listDevice (state = [], {type, payload}) {
	switch (type) {
	case GET_LIST_DEVICE : {
		return payload
	}
	case ADD_NEXT_DATA: {
		if (state.results[0].id !== payload.results[0].id) {
			state.results = [...state.results, ...payload.results]
		}
		return {...state}
	}
	case DELETE_FAVORITE_ITEM: {
		const index = state.results.findIndex(item => item.id === payload)
		state.results[index]['in_favorite'] = false
		return {...state}
	}
	case CLEAN_DATA: {
		return {}
	}
	default: {
		return state
	}
	}
}
