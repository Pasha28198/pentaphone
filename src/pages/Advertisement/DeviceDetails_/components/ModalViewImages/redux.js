import exist from 'utills/exist.js'

export const mapStateToProps = ({buyFlow: {currentDevice}}) => ({
	images: exist(currentDevice, 'images') ? currentDevice.images : []
})
export const mapActionsToProps = (dispatch) => ({})
