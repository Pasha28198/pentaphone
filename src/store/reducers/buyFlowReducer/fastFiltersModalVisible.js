import {
	ACTIVE_MODAL_FAST_FILTERS,
	DISABLE_MODAL_FAST_FILTER
} from 'actions/types'

export default function fastFiltersModalVisible (state = false, {type}) {
	switch (type) {
	case ACTIVE_MODAL_FAST_FILTERS: {
		return true
	}
	case DISABLE_MODAL_FAST_FILTER: {
		return false
	}
	default: {
		return state
	}
	}
}
