export const mapStateToProps = ({sellFlow: {dopInfo: {uploadImages}}}) => {
	const images = uploadImages.filter(item => item.image && item)
	return {images}
}
export const mapActionsToProps = (dispatch) => ({
})
