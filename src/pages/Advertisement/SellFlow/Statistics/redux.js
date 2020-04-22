import {
	priceWizard,
	dataStatistics
} from 'actions'
import {push} from 'react-router-redux'
export const mapStateToProps = (state) => ({
	id: state.sellFlow.CreatedDeviceId,
	data: state.sellFlow.deviceInfoForSell,
	middlePrice: state.sellFlow.dopInfo.middlePrice
})
export const mapActionsToProps = (dispatch) => ({
	getPriceWizard (id) {
		dispatch(priceWizard(id))
	},
	getStatistics (id) {
		return dispatch(dataStatistics(id))
	},
	toCategory () { dispatch(push('/sell/categories')) }
})
