export const mapStateToProps = ({buyFlow: {currentDevice}}) => ({
	description: currentDevice.details
})
export const mapActionsToProps = (dispatch) => ({})
