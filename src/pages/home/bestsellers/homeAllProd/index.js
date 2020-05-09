import React from 'react'
import styles from './styles.scss'
import Slider from 'react-slick'
import ProductItem from 'src/generalElements/productItem'
const HomeAllProd = (props) => {
	return (
		<div className={styles.bestsellersCont}>
			<div className={styles.sliderContainer}>
				<Slider>
					<ProductItem type='slider' numberOf={1}/>
				</Slider>
			</div>
			<div className={styles.itemsContainer}>
				<div className={styles.long}>
					<ProductItem type='bestsellersSec' numberOf={1}/>
				</div>
				<div>
					<ProductItem type='bestsellersMain' numberOf={3}/>
				</div>
			</div>
		</div>
	)
}
export default HomeAllProd
