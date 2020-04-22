import {push} from 'react-router-redux'
import {pushDraft} from 'actions'
import {SET_ADRESS} from 'actions/types'

export const mapStateToProps = (state) => ({
	auth: state.auth.authenticated,
	infoForSell: state.sellFlow.deviceInfoForSell,
	version: state.sellFlow.versions[0] && state.sellFlow.versions[0].pk,
	images: state.sellFlow.dopInfo.uploadImages
})
export const mapActionsToProps = (dispatch) => ({
	pushInfo (infoForSell, version) {
		const data = {
			'device': infoForSell.find((item) => item.key === 'model').pk,
			'brand': infoForSell.find((item) => item.key === 'brands').pk,
			'name': infoForSell.find((item) => item.key === 'brands').name,
			'condition': infoForSell.find((item) => item.key === 'condition').pk,
			'visual_condition': infoForSell.find((item) => item.key === 'visual_condition').pk,
			'accessories': infoForSell.filter(item => item.key === 'accessories').map(item => item.pk),
			version
		}
		dispatch(pushDraft(data))
		dispatch(push('/buyout/accept-request'))
	},
	pushTo (path) { dispatch(push(`/buyout/${path}`)) },
	addAdress (payload) {
		dispatch({type: SET_ADRESS, payload})
	}
})
