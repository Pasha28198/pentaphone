import {
	SET_ITEMS_MY_BUYS, CLEAN_MY_BUYS
} from 'actions/types'

const iniState = {
	count: 0,
	countPages: 0,
	items: []
}

export default function (state = iniState, {type, payload}) {
	switch (type) {
	case SET_ITEMS_MY_BUYS: {
		state.countPages = Math.ceil(payload.count / 20)
		state.count = payload.count / 20
		state.items = [...state.items, ...payload.results]

		return {...state}
	}

	case CLEAN_MY_BUYS: {
		return {
			count: 0,
			countPages: 0,
			items: []
		}
	}

	default: {
		return state
	}
	}
}
