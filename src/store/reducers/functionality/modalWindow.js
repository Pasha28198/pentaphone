import {TOOGLE_MODAL_WINDOW} from 'actions/types'

const initialState = {
	status: false,
	content: null
}
export default function stateNavigation (state = initialState, {type, payload}) {
	switch (type) {
	case TOOGLE_MODAL_WINDOW: {
		state.status = !state.status
		state.content = payload
		return state
	}
	default: {
		return state
	}
	}
}
