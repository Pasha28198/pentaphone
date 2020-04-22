import {
	ADD_NEW_INFO_ABOUT_DEVICE,
	DELETE_ITEM_INFO_ABOUT_DEVICE,
	CLEAN_DOP_INFO,
	CLEAN_INFO_ABOUT_DEVICE
} from 'actions/types'

export default function deviseInfoForSell (state = [], {type, payload}) {
	switch (type) {
	case ADD_NEW_INFO_ABOUT_DEVICE : {
		return [
			...state,
			payload
		]
	}
	case DELETE_ITEM_INFO_ABOUT_DEVICE: {
		const arr = state
		arr.splice(payload)
		return [...arr]
	}

	case CLEAN_INFO_ABOUT_DEVICE: {
		return []
	}
	case CLEAN_DOP_INFO: {
		return [...state.filter(({key}) => key !== 'dopInfo')]
	}
	default: return state
	}
}
