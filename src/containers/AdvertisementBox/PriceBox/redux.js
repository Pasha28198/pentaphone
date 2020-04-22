import {
	SET_PRICE_ADVERTICMENT
} from 'actions/types'

export const mapStateToProps = (state) => ({
	value: state.sellFlow.dopInfo.setDopInfo.price,
	middlePrice: state.sellFlow.dopInfo.middlePrice.price,
	min: state.sellFlow.dopInfo.middlePrice.min_price,
	max: state.sellFlow.dopInfo.middlePrice.max_price
})

export const mapActionsToProps = (dispatch) => ({
	setNewPrice (value) {
		dispatch({type: SET_PRICE_ADVERTICMENT, payload: value})
	}
})
