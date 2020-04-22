import {
	SET_ADVERTISMENTS
} from './types'
import {fetchAdvertisments as getAdver} from 'api'

export const fetchAdvertisments = () => {
	return async (dispatch) => {
		const {data} = await getAdver()
		dispatch({type: SET_ADVERTISMENTS, payload: data.results})
	}
}
