import { GET_COLORS } from 'actions/types'

const iniState = []

export default function (state = iniState, {type, payload}) {
	switch (type) {
	case GET_COLORS: {
		return payload.results
	}
	default: {
		return state
	}
	}
}
