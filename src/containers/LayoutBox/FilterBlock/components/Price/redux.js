import { fetchSpec } from 'actions'
import { setFilter } from 'src/store/actions/filters.js'
import { filterItem } from 'src/store/selectors/catalog.js'
import { GET_MEMORY } from 'actions/types'

export const mapStateToProps = (state) => ({
	minPrice: filterItem(state, 'min_price'),
	maxPrice: filterItem(state, 'max_price')
})

export const mapActionsToProps = (dispatch) => ({
	getMemory: () => { dispatch(fetchSpec(true, 12, GET_MEMORY)) },
	setFilterNew: (key, value) => {
		dispatch(setFilter(key, value))
	}
})
