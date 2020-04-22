import {
	SET_ITEMS_CATALOG, CLEAN_CATALOG,
	TOOMBLER_FAVORITE_CATALOG
} from 'actions/types'

const iniState = {
	count: 0,
	countPages: 0,
	items: []
}

export default function (state = iniState, {type, payload}) {
	switch (type) {
	case SET_ITEMS_CATALOG: {
		state.countPages = Math.ceil(payload.count / 20)
		state.count = payload.count
		state.items = [...state.items, ...payload.results]

		return {...state}
	}

	case CLEAN_CATALOG: {
		return {
			count: 0,
			countPages: 0,
			items: []
		}
	}

	case TOOMBLER_FAVORITE_CATALOG: {
		let index = state.items.findIndex(item => item.id === payload)
		const { items } = state

		items[index]['in_favorite'] = !items[index]['in_favorite']
		state.items = [...items]

		return {...state}
	}

	default: {
		return state
	}
	}
}
