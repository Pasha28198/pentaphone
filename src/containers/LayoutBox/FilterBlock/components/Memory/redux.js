import { fetchSpec } from 'actions'
import { sellFlowElements } from 'src/store/selectors/sellFlow.js'
import { setFilter } from 'src/store/actions/filters.js'
import { filterItem } from 'src/store/selectors/catalog.js'
import { GET_MEMORY } from 'actions/types'

export const mapStateToProps = (state) => ({
	memory: sellFlowElements(state, 'memory').map(({name, pk, slug}) => ({
		value: name,
		pk: slug,
		checked: filterItem(state, 'specs').includes(slug + '-memory')}))
})

export const mapActionsToProps = (dispatch) => ({
	getMemory: (data) => { dispatch(fetchSpec(data, 12, GET_MEMORY)) },
	setFilterNew: (key, value) => {
		dispatch(setFilter(key, value))
	}
})
