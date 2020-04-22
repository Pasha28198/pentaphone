import {
	SET_CITY
} from 'actions/types'

export default function city (state = [], {type, payload}) {
	switch (type) {
	case SET_CITY: {
		return payload
	}
	default: return state
	}
}
