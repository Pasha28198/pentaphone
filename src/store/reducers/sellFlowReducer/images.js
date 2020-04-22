import {
	ADD_IMAGES_TO_DRAFT
} from 'actions/types'

export default function deviseInfoForSell (state = [], {type, payload}) {
	switch (type) {
	case ADD_IMAGES_TO_DRAFT : {
		return [
			...state,
			payload
		]
	}
	default: return state
	}
}
