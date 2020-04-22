import {
	GET_COMENTS_LIST,
	CLEAR_COMENTS
} from 'actions/types'

export default function comments (state = [], {type, payload}) {
	switch (type) {
	case GET_COMENTS_LIST: {
		return payload
	}
	case CLEAR_COMENTS: {
		return []
	}
	default: return state
	}
}
