import {push} from 'react-router-redux'
import {updateAdvertisment} from 'actions'
import {
	CLEAN_DOP_INFO,
	SET_SERIAL_NUMBER
} from 'actions/types'

export const mapStateToProps = (state) => ({
	data: state.sellFlow.deviceInfoForSell,
	dopInfo: state.sellFlow.dopInfo.setDopInfo,
	id: state.sellFlow.CreatedDeviceId,
	imagesExist: state.sellFlow.dopInfo.uploadImages.filter(item => item.item).length,
	verify: state.profile.userInfo['is_verify']
})
export const mapActionsToProps = (dispatch) => ({
	nextStep (data, id, verify) {
		dispatch(updateAdvertisment(data, id)).then(res => {
			if (res.status === 200) {
				dispatch(push(verify ? '/sell/verify' : '/sell/verify-number'))
			}
		})
	},
	cleanDopInfo () {
		dispatch({type: CLEAN_DOP_INFO})
	},
	setImey (data) {
		dispatch({type: SET_SERIAL_NUMBER, payload: data})
	},
	toCatalog () {
		dispatch(push('/sell/categories'))
	}
})
