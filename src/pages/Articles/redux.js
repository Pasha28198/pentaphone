import {getArtMarkDown} from 'actions'

export const mapStateToProps = (state) => ({})
export const mapActionsToProps = (dispatch) => ({
	getArticle (path) {
		return dispatch(getArtMarkDown(path))
	}
})
