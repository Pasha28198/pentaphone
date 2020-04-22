import {
	GET_BARGAIN_COMENTS_LIST
} from 'actions/types'

export default function comments (state = [], {type, payload}) {
	switch (type) {
	case GET_BARGAIN_COMENTS_LIST: {
		return payload
	}
	default: return state
	}
}
