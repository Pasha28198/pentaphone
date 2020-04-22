import {getArticles} from 'actions/articles'

export const mapStateToProps = (state) => ({})
export const mapActionsToProps = (dispatch) => ({
	fetchArticles () {
		return dispatch(getArticles())
	}
})
