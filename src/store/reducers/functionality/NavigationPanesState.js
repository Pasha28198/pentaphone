import {
	DISABLE_NAVIGATION,
	ACTIVE_NAVIGATION
} from 'actions/types'

export default function stateNavigation (state = false, {type}) {
	switch (type) {
	case DISABLE_NAVIGATION: {
		return false
	}
	case ACTIVE_NAVIGATION: {
		return true
	}
	default: {
		return state
	}
	}
}
