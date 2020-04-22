import {SET_ADRESS} from 'actions/types'

export default (state = {}, {type, payload}) => {
	switch (type) {
	case SET_ADRESS:
		return {...state, ...payload}
	default: return state
	}
}
