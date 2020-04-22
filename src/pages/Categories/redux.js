import {fetchCategories} from 'actions/sellFlow.js'

export const mapStateToProps = null

export const mapActionToProps = (dispatch) => ({
	getCategories: () => dispatch(fetchCategories())
})
