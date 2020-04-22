import {
	SET_USER_INFO,
	CLEAN_USER_INFO,
	SET_IS_VERIFY,
	SET_PHOTO_USER
} from 'actions/types'

export default function stateNavigation (state = {}, {type, payload}) {
	switch (type) {
	case SET_USER_INFO: {
		return payload
	}
	case CLEAN_USER_INFO: {
		return {}
	}
	case SET_IS_VERIFY: {
		state['is_verify'] = true
		return {...state}
	}
	case SET_PHOTO_USER: {
		state.photo = payload
		return {...state}
	}
	default: {
		return state
	}
	}
}
