import {
	SET_VISIBLE_FILTER,
	SET_DISABLE_FILTER
} from 'actions/types'

export default function visibleFilter (state = '', {type, payload}) {
	switch (type) {
	case SET_VISIBLE_FILTER: {
		return payload
	}
	case SET_DISABLE_FILTER: {
		return ''
	}
	default: {
		return state
	}
	}
}
