import {exist} from 'utills/functional.js'

export const mapStateToProps = (state) => ({
	accessories: state.buyFlow.currentDevice.accessories || [],
	characteristics: state.buyFlow.currentDevice.specification || [],
	countComents: state.buyFlow.comments ? state.buyFlow.comments.length : 0,
	verifiedSeller: exist(state.buyFlow.currentDevice, 'user') && state.buyFlow.currentDevice.user['is_verified_seller']
})

export const mapActionsToProps = (dispatch) => ({})
