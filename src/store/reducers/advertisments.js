import {SET_ADVERTISMENTS} from 'actions/types'

export default function (state = {}, { type, payload }) {
	switch (type) {
	case SET_ADVERTISMENTS: {
		state.list = payload
		return {...state}
	}
	default: {
		return state
	}
	}
}
