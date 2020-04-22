import { getTopDeviceByBrand } from 'actions'

export const mapStateToProps = (state) => ({})
export const mapActionsToProps = (dispatch) => ({
	getTopIphone () {
		return getTopDeviceByBrand('samsung')
	}
})
