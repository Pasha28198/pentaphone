import React from 'react'
import './styles.css'
import Slider from 'react-slick'
import ProductItem from 'src/generalElements/productItem'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import PropTypes from 'prop-types'

const LatestProduct = () => {
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
	// function renderProductItem (needToRender) {
	// 	for (let i = 0; i++; i <= needToRender) {
	// 		return (
	// 			<div>
	// 				<ProductItem type='LatestProd' numberOf={0} startIndex={i}/>
	// 			</div>
	// 		)
	// 	}
	// }
	return (
		<React.Fragment>
			<div className='title'>
				<h3>Latest Product</h3>
			</div>
			<div className='sliderLatest'>
				<Slider {...settings}>
					<div>
						<ProductItem type='LatestProd' numberOf={0} startIndex={0} />
					</div>
					<div>
						<ProductItem type='LatestProd' numberOf={0} startIndex={1} />
					</div>
					<div>
						<ProductItem type='LatestProd' numberOf={0} startIndex={2} />
					</div>
					<div>
						<ProductItem type='LatestProd' numberOf={0} startIndex={3} />
					</div>
					<div>
						<ProductItem type='LatestProd' numberOf={0} startIndex={4} />
					</div>
					<div>
						<ProductItem type='LatestProd' numberOf={0} startIndex={5} />
					</div>
					<div>
						<ProductItem type='LatestProd' numberOf={0} startIndex={6} />
					</div>
				</Slider>
			</div>
		</React.Fragment>
	)
}
LatestProduct.propTypes = {
	onClick: PropTypes.func
}
export default LatestProduct
