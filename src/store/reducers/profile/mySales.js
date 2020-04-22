import {
	SET_ITEMS_MY_SALES, CLEAN_MY_SALE
} from 'actions/types'

const iniState = {
	count: 0,
	countPages: 0,
	items: []
}

export default function (state = iniState, {type, payload}) {
	switch (type) {
	case SET_ITEMS_MY_SALES: {
		state.countPages = Math.ceil(payload.count / 20)
		state.count = payload.count / 20
		state.items = [...state.items, ...payload.results]

		return {...state}
	}

	case CLEAN_MY_SALE: {
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
