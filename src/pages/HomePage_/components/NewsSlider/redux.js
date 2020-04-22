import {getArticles} from 'actions/articles'

export const mapStateToProps = () => ({})
export const mapActionsToProps = (dispatch) => ({
	fetchArticles () { return dispatch(getArticles()) }
})
