import React from 'react'
import './styles.css'
import Slider from 'react-slick'
import ProductItem from 'src/generalElements/productItem'
import SliderBig from '../../slider/slider'
const HomeAllProd = (props) => {
	const settings = {
		dots: true,
		infinite: true,
		adaptiveHeight: true,
		dotsClass: 'dots',
		draggable: true,
		autoplay: true,
		autoplaySpeed: 3000,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1
	}
	return (
		<div className='bestsellersCont'>
			<div className='sliderContainer'>
				<Slider {...settings}>
					<div className='sliderElement'><ProductItem type='slider' numberOf={0} /></div>
					<div className='sliderElement'><ProductItem type='slider' numberOf={0} /></div>
				</Slider>
			</div>
			<div className='itemsContainer'>
				<div className='long'>
					<ProductItem type='bestsellersSec' numberOf={1} />
				</div>
				<div className='thin'>
					<ProductItem type='bestsellersMain' numberOf={3} startIndex={2}/>
				</div>
			</div>
		</div>
	)
}
export default HomeAllProd
