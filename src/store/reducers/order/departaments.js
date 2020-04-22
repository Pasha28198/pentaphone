import {
	SET_DEPARTMENTS_POST
} from 'actions/types'

export default function departaments (state = [], {type, payload}) {
	switch (type) {
	case SET_DEPARTMENTS_POST: {
		return payload
	}
	default: return state
	}
}
