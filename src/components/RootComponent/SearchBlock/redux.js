import {push} from 'react-router-redux'
import { setFilter } from 'src/store/actions/filters.js'
import { getModelItems } from 'src/store/actions/catalog.js'

export const mapStateToProps = (state) => ({
	value: state.catalog.filters.search
})

export const mapActionsToProps = (dispatch) => ({
	setFilterNew: (key, value) => {
		dispatch(setFilter(key, value))
	},
	redirectToCatalog (string, type) {
		dispatch(push(`/buy/${type}?search=${string}`))
	},
	getItems (value) {
		return dispatch(getModelItems(value))
	}
})
