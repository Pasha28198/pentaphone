import { clearFilter, setFilter } from 'actions/filters'
import filterArray from 'src/utills/catalog/filterListChose.js'
import { condition, visualConditional } from 'src/utills/main/conditional.js'

let con = {
	'condition': condition,
	'visual_condition': visualConditional
}

function getKeyByValue (object, value) {
	return Object.keys(object).find(key => object[key] === value)
}

export const mapStateToProps = (state) => ({
	filters: filterArray(state.catalog.filters),
	existFilters: filterArray(state.catalog.filters).filter(item => typeof item.value === 'object' ? item.value.length : item.value).length
})

export const mapActionsToProps = (dispatch) => ({
	clearFilters: () => { dispatch(clearFilter()) },
	deleteFilter: (key, value) => {
		if (key === 'condition' || key === 'visual_condition') {
			dispatch(setFilter(key, getKeyByValue(con, value)))
			return
		}

		dispatch(setFilter(key, value))
	}
})
