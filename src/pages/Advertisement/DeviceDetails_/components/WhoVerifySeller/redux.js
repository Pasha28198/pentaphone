import {exist} from 'utills/functional.js'

export const mapStateToProps = ({buyFlow: {currentDevice}}) => ({
	verifiedSeller: exist(currentDevice, 'user') && currentDevice.user['is_verified_seller']
})
export const mapActionsToProps = (dispatch) => ({})
