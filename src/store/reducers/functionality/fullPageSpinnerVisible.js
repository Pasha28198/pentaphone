import {
	FULL_PAGE_SPINNER_ACTIVATE,
	FULL_PAGE_SPINNER_DISABLED
} from 'actions/types'

export default function fullPageSpinnerVisible (state = false, {type}) {
	switch (type) {
	case FULL_PAGE_SPINNER_ACTIVATE: {
		return true
	}
	case FULL_PAGE_SPINNER_DISABLED: {
		return false
	}
	default: {
		return state
	}
	}
}
