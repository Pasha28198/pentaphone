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
		nextArrow: <SampleNextArrow />,
		prevArrow: <SamplePrevArrow />
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
