import React from 'react'
import Slider from 'react-slick'
import { itemList } from '../../../generalElements/productItem/infoItem'
import Timer from 'src/generalElements/productItem/timer'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import './styles.css'
import PropTypes from 'prop-types'

const SliderBig = (props) => {
	let phone = itemList[1]
	let headphone = itemList[5]
	const settings = {
		dots: true,
		infinite: true,
		adaptiveHeight: true,
		dotsClass: 'myDots',
		draggable: true,
		speed: 500,
		autoplay: true,
		autoplaySpeed: 3000,
		slidesToShow: 1,
		slidesToScroll: 1
	}

	return (
		<Slider {...settings} className='myDots'>
			<div>
				<Timer isInSlider={true}/>
				<img src={phone.img[2]}/>
				<i className='brend' >{phone.brend}</i>
				<h4 className='name' >{phone.name}</h4>
				<span className='prevPrise'>{phone.sale !== null ? `$ ${phone.prise + (phone.prise * (phone.sale / 100))}` : null}</span><span className='prise'>${phone.prise}</span>
			</div>
			<div>
				<Timer isInSlider={true}/>
				<img src={headphone.img[2]}/>
				<i className='brend'>{headphone.brend}</i>
				<h4 className='name' >{headphone.name}</h4>
				<span className='prevPrise'>{headphone.sale !== null ? `$ ${headphone.prise + (headphone.prise * (headphone.sale / 100))}` : null}</span><span className='prise'>${headphone.prise}</span>
			</div>
		</Slider>
	)
}
SliderBig.propTypes = {
	type: PropTypes.string
}

export default SliderBig
