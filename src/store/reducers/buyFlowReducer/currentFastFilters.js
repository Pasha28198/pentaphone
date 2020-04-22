import {
	CHANGE_FAST_FILTER
} from 'actions/types'

export default function currentFastFilters (state = '', {type, payload}) {
	switch (type) {
	case CHANGE_FAST_FILTER: {
		return payload
	}
	default: return state
	}
}
