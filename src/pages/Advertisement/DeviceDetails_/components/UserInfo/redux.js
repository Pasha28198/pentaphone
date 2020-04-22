import { exist } from 'utills/functional.js'

export const mapStateToProps = ({buyFlow: {currentDevice}}) => ({
	userId: exist(currentDevice, 'user') && currentDevice.user.pk,
	userName: exist(currentDevice, 'user') && currentDevice.user['first_name'],
	userRating: exist(currentDevice, 'user') && currentDevice.user.rating,
	verifyUser: exist(currentDevice, 'user') && currentDevice.user['is_verified_seller']
})
export const mapActionsToProps = null
