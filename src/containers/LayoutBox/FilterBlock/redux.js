import { clearFilter } from 'actions/filters'
import filterArray from 'src/utills/catalog/filterListChose.js'

export const mapStateToProps = (state) => ({
	existFilters: filterArray(state.catalog.filters).filter(item => typeof item.value === 'object' ? item.value.length : item.value).length
})
export const mapActionsToProps = (dispatch) => ({
	clearFilters: () => { dispatch(clearFilter()) }
})
