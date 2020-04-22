import {
	SET_PRICE_ADVERTICMENT,
	SET_IS_BARGAIN,
	SET_DETAILS,
	SET_IS_WATTANTY,
	SET_IS_OWNER,
	CLEAN_DOP_INFO,
	SET_SERIAL_NUMBER
} from 'actions/types'

const initialState = {
	'price': 0,
	'is_bargain': false,
	'details': '',
	'is_warranty': false,
	'is_owner': false
}

export default function dopInfo (state = initialState, {type, payload}) {
	const newState = state
	switch (type) {
	case SET_DETAILS: {
		newState['details'] = payload
		return newState
	}
	case SET_SERIAL_NUMBER: {
		newState['serial_number'] = payload
		return newState
	}
	case CLEAN_DOP_INFO: {
		return {
			'price': 0,
			'is_bargain': false,
			'details': '',
			'is_warranty': false,
			'is_owner': false
		}
	}
	case SET_IS_BARGAIN: {
		newState['is_bargain'] = payload
		return newState
	}
	case SET_PRICE_ADVERTICMENT: {
		newState['price'] = payload
		return newState
	}
	case SET_IS_WATTANTY: {
		newState['is_warranty'] = payload
		return newState
	}
	case SET_IS_OWNER: {
		newState['is_owner'] = payload
		return newState
	}
	default: {
		return state
	}
	}
}
