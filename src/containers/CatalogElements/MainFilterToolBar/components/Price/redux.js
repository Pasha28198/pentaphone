import { setFilter } from 'src/store/actions/filters.js'
import { filterItem } from 'src/store/selectors/catalog.js'

export const mapStateToProps = (state) => ({
	min: filterItem(state, 'min_price'),
	max: filterItem(state, 'max_price')
})
export const mapActionsToProps = (dispatch) => ({
	setFilterNew: (key, value) => {
		dispatch(setFilter(key, value))
	}
})
