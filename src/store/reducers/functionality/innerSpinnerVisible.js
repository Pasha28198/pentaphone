import {
	SPINNER_ACTIVATE,
	SPINNER_DISABLED
} from 'actions/types'

export default function innerSpinnerVisible (state = false, {type}) {
	switch (type) {
	case SPINNER_ACTIVATE: {
		return true
	}
	case SPINNER_DISABLED: {
		return false
	}
	default: {
		return state
	}
	}
}
