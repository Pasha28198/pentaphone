import React, {Component} from 'react'
import CSSModules from 'react-css-modules'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'

import SliderUploadImage from './components/SliderUploadImage/index'
import ImageView from './components/ImageView/index'

import styles from './styles.scss'
import {mapStateToProps, mapActionsToProps} from './redux.js'

@connect(mapStateToProps, mapActionsToProps)
@CSSModules(styles)

class AddPhotosBlock extends Component {
	state = {
		activeIndex: 0
	}

	onChange = e => {
		// add photo
		const {uploadImage, images} = this.props
		let id
		for (let i = images.length - 1; i >= 0; i--) {
			if (images[i].image && !id) {
				id = images[i].pk + 1
				break
			} else if (!i && !id) {
				id = 1
			}
		}
		uploadImage(e.target.files[0], id)
		e.target.value = null
	}
	render () {
		const {
			props: {images: data, deleteImage}
		} = this
		return (
			<div styleName="uploadImage-wrapper">
				<div styleName="lable">Фото</div>
				<div styleName="uploadImage-slider">
					<ImageView
						data={data}
						upload={this.onChange}
						deleteImg={deleteImage}
						activeIndex={this.state.activeIndex}
					/>
					<SliderUploadImage
						{...{
							data,
							deleteImage,
							upload: this.onChange,
							changeView: (index) => { this.setState({activeIndex: index}) }
						}}
					/>
				</div>
			</div>
		)
	}
}

AddPhotosBlock.propTypes = {
	uploadImage: PropTypes.func,
	images: PropTypes.array,
	id: PropTypes.string,
	deleteImage: PropTypes.func
}

export default AddPhotosBlock
