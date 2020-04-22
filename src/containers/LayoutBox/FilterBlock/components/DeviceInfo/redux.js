import { fetchBrands, fetchModels } from 'actions'
import { sellFlowElements } from 'src/store/selectors/sellFlow.js'
import { setFilter, clearModels } from 'src/store/actions/filters.js'
import { filterItem } from 'src/store/selectors/catalog.js'

export const mapStateToProps = (state) => ({
	brands: sellFlowElements(state, 'brands').map(({name, slug}) => ({
		value: name,
		pk: slug,
		checked: filterItem(state, 'brand').includes(slug)
	})),
	brandsInFilter: filterItem(state, 'brand'),
	modelInFilter: filterItem(state, 'device'),
	models: sellFlowElements(state, 'models').map(({name, slug}) => ({
		value: name,
		pk: slug,
		checked: filterItem(state, 'device').includes(slug)
	}))
})

export const mapActionsToProps = (dispatch) => ({
	getBrandsElments: (priority) => { dispatch(fetchBrands(1, priority)) },
	getModels: (brand) => { dispatch(fetchModels(brand)) },
	setFilterNew: (key, value) => {
		dispatch(setFilter(key, value))
	},
	cleanModels: () => {
		dispatch(clearModels())
	}
})
