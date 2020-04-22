import {
	ADD_LOAD_IMAGE,
	IMAGE_LOADED,
	CLEAN_IMAGES_STORE,
	EDIT_IMAGES
} from 'actions/types'

import {DELETE_IMAGE} from '../../actions/types'

const initialState = [
	{
		loadStatus: false
	},
	{
		loadStatus: false
	},
	{
		loadStatus: false
	},
	{
		loadStatus: false
	},
	{
		loadStatus: false
	},
	{
		loadStatus: false
	}
]

export default function uploadImages (state = initialState, {type, payload}) {
	let newState = [...state]
	switch (type) {
	case ADD_LOAD_IMAGE: {
		for (let i = 0; i < newState.length; i++) {
			if (!newState[i].loadStatus && !newState[i].image) {
				newState[i].loadStatus = true
				break
			}
		}
		return newState
	}
	case DELETE_IMAGE: {
		let index = newState.findIndex(({pk}) => pk === payload)
		newState.splice(index, 1)
		newState.push({loadStatus: false})
		return newState
	}
	case IMAGE_LOADED: {
		for (let i = 0; i < newState.length; i++) {
			if (!newState[i].image) {
				newState[i].loadStatus = false
				newState[i] = {...newState[i], ...payload}
				break
			}
		}
		return newState
	}
	case EDIT_IMAGES: {
		if (typeof payload === 'string') {
			state = []
		} else {
			for (let i = 0; i < payload.length; i++) {
				state[i].image = payload[i].image
				state[i].item = payload[i].item
				state[i].pk = payload[i].pk
			}
		}
		return [...state]
	}
	case CLEAN_IMAGES_STORE: {
		return [
			{
				loadStatus: false
			},
			{
				loadStatus: false
			},
			{
				loadStatus: false
			},
			{
				loadStatus: false
			},
			{
				loadStatus: false
			},
			{
				loadStatus: false
			}
		]
	}
	default: {
		return state
	}
	}
}
