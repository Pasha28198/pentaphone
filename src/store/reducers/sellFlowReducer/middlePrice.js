import {
	SET_MIDDLE_PRICE
} from 'actions/types'

export default function middlePrice (state = 0, {type, payload}) {
	switch (type) {
	case SET_MIDDLE_PRICE: {
		return payload
	}
	default: return state
	}
}
