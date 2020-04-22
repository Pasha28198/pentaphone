import {
	SET_CURRENT_DEVICE_ID,
	CLEAN_CURRENT_DEVICE
} from 'actions/types'

export default function currentDevice (state = '', {type, payload}) {
	switch (type) {
	case SET_CURRENT_DEVICE_ID : {
		return payload
	}
	case CLEAN_CURRENT_DEVICE: {
		return ''
	}
	default: return state
	}
}
