import {
	GET_CHOICES,
	CLEAR_CHOICES
} from 'actions/types'

export default function choices (state = {}, {type, payload}) {
	switch (type) {
	case GET_CHOICES: {
		return payload
	}
	case CLEAR_CHOICES: {
		return {}
	}
	default: {
		return state
	}
	}
}
