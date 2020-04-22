import {
	SET_MAIN_IMAGE
} from 'actions/types'

import iphone from 'src/assets/svg/iPhone6Preview.svg'

export default function mainImage (state = iphone, {type, payload}) {
	switch (type) {
	case SET_MAIN_IMAGE: return payload
	default: return state
	}
}
