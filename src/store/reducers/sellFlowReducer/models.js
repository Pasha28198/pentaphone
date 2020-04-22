import {
	GET_MODELS,
	CLEAN_MODELS
} from 'actions/types'

export default function models (state = [], {type, payload}) {
	switch (type) {
	case GET_MODELS: {
		return payload
	}
	case CLEAN_MODELS: {
		return []
	}
	default: return state
	}
}
