import {
	ADD_LOAD_IMAGE,
	IMAGE_LOADED,
	DELETE_IMAGE
} from 'actions/types'

export const mapStateToProps = ({sellFlow, buyFlow}) => ({
	images: sellFlow.dopInfo.uploadImages,
	id: sellFlow.CreatedDeviceId || buyFlow.currentDevice.id
})
export const mapActionsToProps = (dispatch) => ({
	uploadImage (file, pk) {
		dispatch({type: ADD_LOAD_IMAGE})
		const data = {
			image: {medium: URL.createObjectURL(file)},
			file,
			pk
		}
		dispatch({type: IMAGE_LOADED, payload: data})
	},
	deleteImage (imagePk) {
		dispatch({type: DELETE_IMAGE, payload: imagePk})
	}
})
