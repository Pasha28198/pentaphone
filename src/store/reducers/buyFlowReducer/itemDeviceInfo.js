import {
	GET_DEVICE_INFO,
	CLEAN_DEVICE_INFO,
	DELETE_DEVICE_INFO,
	SET_FAVORITE_DEVICE
} from 'actions/types'

export default function (state = {}, {type, payload}) {
	switch (type) {
	case GET_DEVICE_INFO: {
		return payload
	}
	case DELETE_DEVICE_INFO: {
		state['in_favorite'] = false
		return {...state}
	}
	case SET_FAVORITE_DEVICE: {
		state['in_favorite'] = true
		return {...state}
	}
	case CLEAN_DEVICE_INFO: {
		return {}
	}
	default: {
		return state
	}
	}
}
