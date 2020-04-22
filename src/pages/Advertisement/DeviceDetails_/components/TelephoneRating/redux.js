import {exist} from 'utills/functional.js'

export const mapStateToProps = (state) => ({
	name: state.buyFlow.currentDevice.name || '',
	rating: exist(state.buyFlow.currentDevice, 'ratings') ? state.buyFlow.currentDevice.ratings : {}
})

export const mapActionsToProps = (dispatch) => ({})
