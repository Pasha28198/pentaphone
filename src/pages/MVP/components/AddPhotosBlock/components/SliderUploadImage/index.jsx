import React, {Component} from 'react'
import CSSModules from 'react-css-modules'
import Slider from 'react-slick'

import SpinnerUpload from 'assets/svg/SpinnerUpload.svg'
import PropTypes from 'prop-types'
import addPhoto from 'src/assets/addPhoto_sellFlow.svg'

import styles from './styles.scss'
import settings from './settingSlick'

@CSSModules(styles, {allowMultiple: true})

class SliderUploadImage extends Component {
	render () {
		const {data, upload, changeView, deleteImage} = this.props
		return (
			<div styleName="Images-wrapper">
				<Slider {...settings} styleName="sliderSlick">
					<For each='item' index="index" of={data}>
						<Choose key={index}>
							<When condition={ !item.image && !item.loadStatus }>
								<input
									style={{display: 'none'}}
									onChange={upload}
									type="file"
									multiple
									id={'uploadImage' + index}
								/>
								<label
									styleName="uploadImage-btn"
									htmlFor={'uploadImage' + index}
								>
									<img src={addPhoto} alt="photo"/>
								</label>
							</When>
							<When condition={ item.loadStatus }>
								<div styleName="Images-item upload" key={index}>
									<object type="image/svg+xml" data={SpinnerUpload}></object>
								</div>
							</When>
							<Otherwise>
								<div styleName="WrapperImage" key={index}>
									<img
										onClick={() => { changeView(index) }}
										key={index}
										src={item.image.medium}
										alt="image"
										styleName="Images-item"
									/>
									<div onClick={() => { deleteImage(item.pk) }}>
										Удалить
									</div>
								</div>
							</Otherwise>
						</Choose>
					</For>
				</Slider>
				<div styleName="withoutSlider">
					<For each='item' index="index" of={data}>
						<Choose key={index}>
							<When condition={ !item.image && !item.loadStatus }>
								<input
									style={{display: 'none'}}
									onChange={upload}
									type="file"
									multiple
									id={'uploadImage' + index}
								/>
								<label
									styleName="Images-item"
									htmlFor={'uploadImage' + index}
								>
									<img src={addPhoto} alt="photo"/>
								</label>
							</When>
							<When condition={ item.loadStatus }>
								<div styleName="Images-item upload" key={index}>
									<object type="image/svg+xml" data={SpinnerUpload}></object>
								</div>
							</When>
							<Otherwise>
								<img
									key={index}
									src={item.image.small}
									alt="image"
									styleName="Images-item"
									onClick={() => { changeView(index) }}
								/>
							</Otherwise>
						</Choose>
					</For>
				</div>
			</div>)
	}
}

SliderUploadImage.propTypes = {
	data: PropTypes.array,
	deleteImage: PropTypes.func,
	upload: PropTypes.func,
	changeView: PropTypes.func
}
SliderUploadImage.defaultValue = {
	data: []
}

export default SliderUploadImage
