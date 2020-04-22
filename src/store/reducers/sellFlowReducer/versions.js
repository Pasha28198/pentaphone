import {
	GET_VERSIONS
} from 'actions/types'

export default function versions (state = {}, {type, payload}) {
	switch (type) {
	case GET_VERSIONS: {
		return payload
	}
	default: {
		return state
	}
	}
}
