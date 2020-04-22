import {
	getComentsList,
	createComent
} from 'actions'

export const mapStateToProps = (state) => ({
	commentsRedux: state.buyFlow.comments,
	id: state.buyFlow.currentDevice.id
})
export const mapActionsToProps = (dispatch) => ({
	getComments (id) { dispatch(getComentsList(id)) },
	pushComment (data) { return dispatch(createComent(data)) }
})
