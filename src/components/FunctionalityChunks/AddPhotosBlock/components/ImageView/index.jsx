import React, {Component} from 'react'
import CSSModules from 'react-css-modules'
import PropTypes from 'prop-types'
import Slider from 'react-slick'

import addPhoto from 'src/assets/addPhoto_sellFlow.svg'
import settings from './setting'
import arrow from 'src/assets/arrow_sellFlow.svg'
import rubbish from 'src/assets/rubbish_sellFlow.svg'
import './swiper.css'

import styles from './styles.scss'

@CSSModules(styles)

class ImageView extends Component {
	deleteImage = (imgs) => {
		const adsPk = imgs[this.swiper.state.currentSlide].item
		const imagePk = imgs[this.swiper.state.currentSlide].pk
		this.props.deleteImg(adsPk, imagePk)
	}

	goNext () { if (this.swiper) this.swiper.slickNext() }

	goPrev () { if (this.swiper) this.swiper.slickPrev() }

	componentWillReceiveProps ({activeIndex}) {
		if (this.swiper) {
			if (activeIndex !== this.swiper.state.currentSlide) {
				this.swiper.slickGoTo(activeIndex)
			}
		}
	}

	componentDidMount () {
		this.goNext = this.goNext.bind(this)
		this.goPrev = this.goPrev.bind(this)
	}
	render () {
		const { data, upload } = this.props
		const images = data.filter(item => item.image)
		return (
			<div styleName="ImageView">
				<Choose>
					<When condition={ images && images.length }>
						<Slider
							{...settings}
							ref={node => { (node) && (this.swiper = node.innerSlider) }}
						>
							<For each='item' index="index" of={images}>
								<div key={index}>
									<img
										styleName="imageSlider"
										src={item.image.medium}
										alt="image"
									/>
								</div>
							</For>
						</Slider>
						<img src={arrow} alt="arrow" onClick={this.goPrev} styleName="prevArrow"/>
						<img src={arrow} alt="arrow" onClick={this.goNext} styleName="nextArrow"/>
						<img src={rubbish} alt="rubbish" onClick={() => { this.deleteImage(images) }} styleName="rubbish"/>
						<div styleName="borderSide"></div>
					</When>
					<Otherwise>
						<img
							styleName="ImageView-uploadImage"
							src={addPhoto}
							alt="uploadImage"
						/>
						<input
							style={{display: 'none'}}
							onChange={upload}
							type="file"
							accept="image/x-png,image/gif,image/jpeg"
							multiple
							id={'uploadImage'}
						/>
						<label
							styleName="ImageView-uploadBtn"
							htmlFor={'uploadImage'}
						>
                            Добавить фотографии
						</label>
					</Otherwise>
				</Choose>
			</div>
		)
	}
}

ImageView.propTypes = {
	data: PropTypes.array,
	upload: PropTypes.func,
	deleteImg: PropTypes.func,
	activeIndex: PropTypes.number
}

export default ImageView
