import {
	SET_COUNT_RESULT
} from 'actions/types'

export default function countResult (state = '', {type, payload}) {
	switch (type) {
	case SET_COUNT_RESULT: {
		return payload
	}
	default: return state
	}
}
