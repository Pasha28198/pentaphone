import React from 'react'
import './style.css'
import Slider from 'react-slick'
import ProductItem from 'src/generalElements/productItem'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import PropTypes from 'prop-types'

const RecentlyViewed = () => {
	function SampleNextArrow (props) {
		const { onClick } = props
		return (
			<div className='nextArrowCont' onClick={onClick}>
				<div className='nextArrow' />
			</div>

		)
	}

	function SamplePrevArrow (props) {
		const { onClick } = props
		return (
			<div className='prevArrowCont' onClick={onClick}>
				<div className='prevArrow' />
			</div>

		)
	}
	const settings = {
		infinite: true,
		adaptiveHeight: true,
		draggable: true,
		speed: 500,
		slidesToShow: 6,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 3000,
		nextArrow: <SampleNextArrow />,
		prevArrow: <SamplePrevArrow />,
		responsive: [
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
					initialSlide: 2
				}
			},
			{
				breakpoint: 400,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}
		]
	}
	return (
		<React.Fragment>
			<div className='title'>
				<h3>Recently Viewed</h3>
			</div>
			<div className='sliderLatest'>
				<Slider {...settings}>
					<div>
						<ProductItem type='viewed' numberOf={0} startIndex={0} />
					</div>
					<div>
						<ProductItem type='viewed' numberOf={0} startIndex={1} />
					</div>
					<div>
						<ProductItem type='viewed' numberOf={0} startIndex={2} />
					</div>
					<div>
						<ProductItem type='viewed' numberOf={0} startIndex={3} />
					</div>
					<div>
						<ProductItem type='viewed' numberOf={0} startIndex={4} />
					</div>
					<div>
						<ProductItem type='viewed' numberOf={0} startIndex={5} />
					</div>
					<div>
						<ProductItem type='viewed' numberOf={0} startIndex={6} />
					</div>
				</Slider>
			</div>
		</React.Fragment>
	)
}
RecentlyViewed.propTypes = {
	onClick: PropTypes.func
}
export default RecentlyViewed
