import {
	SET_FAVORITS_ITEMS,
	CLEAN_FAVORITE_DATA,
	SET_NEXT_PAGE_FAVORITES,
	DELETE_FAVORITE_ITEM_PAGE
} from 'actions/types'

const iniState = {
	count: 0,
	countPages: 0,
	items: []
}

export default function (state = iniState, { type, payload }) {
	switch (type) {
	case SET_FAVORITS_ITEMS: {
		state.countPages = Math.ceil(payload.count / 20)
		state.count = payload.count / 20
		state.items = payload.results

		return {...state}
	}
	case SET_NEXT_PAGE_FAVORITES: {
		state.countPages = Math.round(payload.count / 20)
		state.count = payload.count / 20
		state.items = [...state.items, ...payload.results]

		return {...state}
	}
	case DELETE_FAVORITE_ITEM_PAGE: {
		state.items = state.items.filter(item => item.id !== payload)
		return {...state}
	}
	case CLEAN_FAVORITE_DATA: {
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
