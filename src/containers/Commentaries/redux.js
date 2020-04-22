import {
	getComentsList,
	createComent
} from 'actions'

import {
	CLEAR_COMENTS
} from 'actions/types'

export const mapStateToProps = (state) => ({
	commentsRedux: state.buyFlow.comments,
	id: state.buyFlow.currentDevice.id,
	userId: state.profile.userInfo.pk,
	userImage: state.profile.userInfo.photo
})
export const mapActionsToProps = (dispatch) => ({
	getComments (id) { dispatch(getComentsList(id)) },
	clearComents () { dispatch({type: CLEAR_COMENTS}) },
	pushComment (data) { return dispatch(createComent(data)) }
})
