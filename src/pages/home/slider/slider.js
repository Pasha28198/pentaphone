import React from 'react'
import Slider from 'react-slick'
import { itemList } from '../../../generalElements/productItem/infoItem'
import Timer from 'src/generalElements/productItem/timer'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import styles from './styles.scss'

const SliderBig = () => {
	let phone = itemList[1]
	let headphone = itemList[5]
	const settings = {
		dots: true,
		infinite: true,
		adaptiveHeight: true,
		// dotsClass: styles.myDots,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1
	}

	return (
		<Slider {...settings} className={styles.myDots}>
			<div>
				<Timer isInSlider={true}/>
				<img src={phone.img[2]}/>
				<i className={styles.brend} >{phone.brend}</i>
				<h4 className={styles.name} >{phone.name}</h4>
				<span className={styles.prevPrise}>{phone.sale !== null ? `$ ${phone.prise + (phone.prise * (phone.sale / 100))}` : null}</span><span className={styles.prise}>${phone.prise}</span>
			</div>
			<div>
				<Timer isInSlider={true}/>
				<img src={headphone.img[2]}/>
				<i>{headphone.brend}</i>
				<h4>{headphone.name}</h4>
				<span className={styles.prevPrise}>{headphone.sale !== null ? `$ ${headphone.prise + (headphone.prise * (headphone.sale / 100))}` : null}</span><span className={styles.prise}>${headphone.prise}</span>
			</div>
		</Slider>
	)
}

export default SliderBig
