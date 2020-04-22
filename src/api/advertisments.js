import {axiosInstance} from './axiosInstance'

export function fetchAdvertisments () {
	return (
		axiosInstance.get('item/my/')
	)
}
