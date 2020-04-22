import {
	SET_LIST_OREDERS,
	DELETE_ORDER
} from 'actions/types'

export default function departaments (state = {}, {type, payload}) {
	switch (type) {
	case SET_LIST_OREDERS: {
		return payload
	}
	case DELETE_ORDER: {
		const newState = [...state]
		let index = state.findIndex(({id}) => id === payload)
		newState.splice(index, 1)
		return [...newState]
	}
	default: return state
	}
}
