import {
	getCity,
	getDepartments,
	getDepartment
} from 'actions'
import {formValueSelector} from 'redux-form'

export const mapStateToProps = (state) => {
	const editProfileCity = formValueSelector('refactorProfile')(state, 'shipment_city')
	const orderCity = formValueSelector('infoForTTN')(state, 'branchPost')
	return {
		defaultCity: state.profile.userInfo['shipment_city'],
		defaultDepart: state.profile.userInfo['shipment_department'],
		cityInReduxForm: editProfileCity || (orderCity && orderCity['shipment_city']) || ''
	}
}
export const mapActionsToProps = (dispatch) => ({
	searchCities (query, city, page) {
		return dispatch(getCity(query, city, page))
	},
	searchDepartment (uuid) {
		return dispatch(getDepartment(uuid))
	},
	searchDepartments (city, page, query) {
		return dispatch(getDepartments(city, page, query))
	}
})
