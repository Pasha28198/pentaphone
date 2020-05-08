import React from 'react'
import styles from './styles.scss'
import PropTypes from 'prop-types'

import ProductItem from 'src/generalElements/productItem'
import { NavLink } from 'react-router-dom'
import SliderBig from '../slider/slider'

const TrendingDeales = (props) => {
	return (
		<div className={styles.trendingContainer}>
			<div className={styles.trendingContent}>
				<h2>Trending deals</h2>
				<div className={styles.trendingLinks}>
					<NavLink to=''>Latest Products</NavLink>
					<NavLink to=''>Mobiles & Tablets</NavLink>
					<NavLink to=''>Computers & Accessories</NavLink>
					<NavLink to=''>Accessories</NavLink>
				</div>
				<div className={styles.productContainer}>
					<ProductItem type='trending' numberOf={8} />
				</div>
			</div>
			<div className={styles.slider}>
				<h3>Deal of the Day</h3>
				<div className={styles.separator}></div>
				<SliderBig />
			</div>
		</div>
	)
}
ProductItem.propTypes = {
	type: PropTypes.string,
	numberOf: PropTypes.number
}
export default TrendingDeales
