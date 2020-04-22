import {
	SET_LIST_OREDERS_BUY
} from 'actions/types'

export default function OrderBuyList (state = {}, {type, payload}) {
	switch (type) {
	case SET_LIST_OREDERS_BUY: {
		return payload
	}
	default: return state
	}
}
