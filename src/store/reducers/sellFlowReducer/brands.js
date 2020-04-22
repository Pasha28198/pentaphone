import {
	GET_BRANDS,
	CLEAN_BRAND
} from 'actions/types'

export default function brands (state = [], {type, payload}) {
	switch (type) {
	case GET_BRANDS: {
		return payload
	}
	case CLEAN_BRAND: {
		return []
	}
	default: return state
	}
}
