import React from 'react'

export default {
	slidesPerView: 'auto'
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
					onClick={openModal}
					src={item.image.medium}
					alt="imageDevice"
				/>
			</div>
		</For>
	)
}
