import {
	GET_ACCESSORIES
} from 'actions/types'

export default function accessories (state = [], {type, payload}) {
	switch (type) {
	case GET_ACCESSORIES: {
		return payload
	}
	default: return state
	}
}
