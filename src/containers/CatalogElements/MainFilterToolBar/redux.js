import { setFilter } from 'src/store/actions/filters.js'
import { filterItem } from 'src/store/selectors/catalog.js'

export const mapStateToProps = (state) => ({
	review: filterItem(state, 'verified_seller'),
	price: filterItem(state, 'ordering'),
	countActiveFilter: Object.keys(state.catalog.filters).reduce((prev, current) => {
		if (typeof state.catalog.filters[current] === 'object') {
			return prev + state.catalog.filters[current].length
		} else if (state.catalog.filters[current]) {
			return prev + 1
		}
		return prev
	}, -1)
})
export const mapActionsToProps = (dispatch) => ({
	setFilterNew: (key, value) => {
		dispatch(setFilter(key, value))
	}
})
