import { setFilter } from 'src/store/actions/filters.js'
import { filterItem } from 'src/store/selectors/catalog.js'
import condition from 'utills/main/visCondition.js'

export const mapStateToProps = (state) => ({
	conditions: Object.keys(condition).map(item => ({
		value: condition[item],
		pk: item,
		checked: +filterItem(state, 'condition') === +item
	}))
})

export const mapActionsToProps = (dispatch) => ({
	setFilterNew: (key, value) => {
		dispatch(setFilter(key, value))
	}
})
