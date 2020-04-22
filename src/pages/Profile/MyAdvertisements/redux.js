import {
	fetchAdvertisments,
	deleteItemOrders,
	updateAdvertisment,
	deleteAdvertisment
} from 'actions'

export const mapStateToProps = (state) => ({
	data: state.advertisments.list,
	auth: state.auth.authenticated
})
export const mapActionsToProps = (dispatch) => ({
	fetchAdvert () {
		dispatch(fetchAdvertisments())
	},
	removeAdvert (id) {
		dispatch(deleteItemOrders(id))
	},
	deactivate (id, data) {
		dispatch(updateAdvertisment(data, id, true)).then(() => dispatch(fetchAdvertisments()))
	},
	delAdvertisment (id) {
		dispatch(deleteAdvertisment(id)).then(() => dispatch(fetchAdvertisments()))
	}
})
