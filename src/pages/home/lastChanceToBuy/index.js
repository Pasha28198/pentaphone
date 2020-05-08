import React from 'react'
import styles from './styles.scss'
import ProductItem from 'src/generalElements/productItem'

const LastChanseToBuy = () => {
	return (
		<div className={styles.chanseCont}>
			<h4>Last Chance to buy</h4>
			<ProductItem type='lastChanse' numberOf={3}/>
		</div>
	)
}
export default LastChanseToBuy
