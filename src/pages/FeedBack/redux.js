import {feedBackSend} from 'actions'
import {push} from 'react-router-redux'
import {s} from 'utills/functional.js'

export const mapStateToProps = () => ({})
export const mapActionsToProps = (dispatch) => ({
	addFeedBack (data) {
		dispatch(feedBackSend(data))
			.then(({status: st}) => s(st) && dispatch(push('/my-buys')))
	}
})
