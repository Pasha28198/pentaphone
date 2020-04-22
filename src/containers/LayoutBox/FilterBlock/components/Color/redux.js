import { fetchSpec } from 'actions'
import { sellFlowElements } from 'src/store/selectors/sellFlow.js'
import { setFilter } from 'src/store/actions/filters.js'
import { filterItem } from 'src/store/selectors/catalog.js'
import { GET_COLORS } from 'actions/types'

export const mapStateToProps = (state) => ({
	colors: sellFlowElements(state, 'colors').map(({name, slug}) => ({
		value: name,
		pk: slug,
		checked: filterItem(state, 'specs').includes(slug + '-color')}))
})

export const mapActionsToProps = (dispatch) => ({
	getColors: (data) => { dispatch(fetchSpec(data, 13, GET_COLORS)) },
	setFilterNew: (key, value) => {
		dispatch(setFilter(key, value))
	}
})
