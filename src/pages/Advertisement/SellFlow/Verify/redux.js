import {updateAdvertisment} from 'actions'
import {push} from 'react-router-redux'

export const mapStateToProps = (state) => ({
	id: state.sellFlow.CreatedDeviceId
})
export const mapActionsToProps = (dispatch) => ({
	patchBargain (data, id) { dispatch(updateAdvertisment(data, id)) },
	nextPage () {
		dispatch(push('/sell/thank-you-page/noCheckToModer'))
	},
	redirectToCategories () {
		dispatch(push('/sell/categories'))
	}
})
