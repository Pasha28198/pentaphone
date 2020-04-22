import { GET_MEMORY } from 'actions/types'

const iniState = []

export default function (state = iniState, {type, payload}) {
	switch (type) {
	case GET_MEMORY: {
		return payload.results
	}
	default: {
		return state
	}
	}
}
