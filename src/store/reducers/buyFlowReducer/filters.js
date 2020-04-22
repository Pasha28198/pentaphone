import { SET_NEW_FILTER, CLEAR_FILTERS, SET_FROM_QUERY, CLEAN_MODELS_FILTER } from 'actions/types'
const initialState = {
	device_type: '',
	brand: [],
	device: [],
	condition: '',
	specs: [],
	min_price: 0,
	max_price: 0,
	verified_seller: '',
	visual_condition: '',
	ordering: '',
	search: ''
}

export default function (state = {...initialState}, { type, payload }) {
	switch (type) {
	case SET_NEW_FILTER: {
		let verifyObject = typeof state[payload.key] === 'object'

		// delte if object has this value
		if (verifyObject) {
			let existInList = state[ payload.key ].includes(payload.value)
			if (existInList) {
				let i = state[ payload.key ]
					.findIndex((item) => item === payload.value)
				state[ payload.key ].splice(i, 1)
				state[ payload.key ] = [...state[ payload.key ]]
				return { ...state }
			}
		}
		// push new filter to filter obj
		state[payload.key] = verifyObject
			? [ ...state[ payload.key ], payload.value ]
			: payload.value === state[ payload.key ]
				? initialState[ payload.key ]
				: payload.value

		return { ...state }
	}

	case CLEAN_MODELS_FILTER: {
		console.log('open')
		state['device'] = []
		return {...state}
	}

	case SET_FROM_QUERY: {
		const newFilter = {...initialState}
		Object.keys(payload).forEach((item) => {
			let verifyObject = typeof state[item] === 'object'

			if (verifyObject && Array.isArray(payload[item])) {
				newFilter[item] = [
					...state[ item ],
					...payload[item]
				]
			} else if (verifyObject) {
				newFilter[item] = [
					...state[ item ],
					payload[item]
				]
			} else {
				newFilter[item] = payload[item]
			}
		})
		return {...newFilter}
	}

	case CLEAR_FILTERS: {
		return {...initialState}
	}

	default: {
		return state
	}
	}
}
