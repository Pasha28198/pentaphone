import {
	pushImage,
	deletImageAdvertisment
} from 'actions'
import {
	ADD_LOAD_IMAGE,
	IMAGE_LOADED
} from 'actions/types'

export const mapStateToProps = ({sellFlow, buyFlow}) => ({
	images: sellFlow.dopInfo.uploadImages,
	id: sellFlow.CreatedDeviceId || buyFlow.currentDevice.id
})
export const mapActionsToProps = (dispatch) => ({
	uploadImage (file, pk) {
		const image = new FormData()
		image.append('image', file)
		image.append('item', pk)
		dispatch({type: ADD_LOAD_IMAGE})
		dispatch(pushImage(image, pk)).then(({data}) => {
			dispatch({type: IMAGE_LOADED, payload: data})
		})
	},
	deleteImage (adsPk, imagePk) {
		dispatch(deletImageAdvertisment(adsPk, imagePk))
	}
})
