import React from 'react'

export default {
	slidesPerView: 'auto'
}

export const descConf = {
	slidesPerView: 3,
	spaceBetween: 'auto',
	freeMode: true

}

export function SliderItem (images, openModal) {
	if (typeof images === 'string') {
		return (
			<div 	styleName="labelImage-item">
				<img
					onClick={openModal}
					src={images}
					alt="imageDevice"
				/>
			</div>
		)
	}
	return (
		<For each='item' index='index' of={images}>
			<div 	styleName="labelImage-item"
				key={index}>
				<img
					onClick={() => { openModal(index) }}
					src={item.image.medium}
					alt="imageDevice"
				/>
			</div>
		</For>
	)
}

export const SliderItemDesc = (images, context) => {
	if (typeof images === 'string') {
		return (
			<div 	styleName="labelImageDesc-item">
				<img
					src={images}
					alt="imageDevice"
				/>
			</div>
		)
	}
	return (
		<For each='item' index='index' of={images}>
			<div 	styleName="labelImageDesc-item"
				key={index}>
				<img
					onClick={() => {
						context.swiper.slideTo(index)
						context.swiper2.slideTo(index)
					}}
					src={item.image.medium}
					alt="imageDevice"
				/>
			</div>
		</For>
	)
}
