import React from 'react'
import styles from './styles.scss'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faEye } from '@fortawesome/free-regular-svg-icons'
import { faRandom, faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { itemList } from './infoItem'

const itemTypes = {
	lastChanse: {},
	trending: {},
	bestsellers: {},
	LatestProd: {},
	hotDeals: {},
	viewed: {},
	slider: {}
}

const ProductItem = (props) => {
	function returnProductItem (type, numberOf) {
		return (
			itemList.map((item, i) => {
				return <div key={i} className={styles.prodItem}>
					<div className={styles.outOf}>{item.outOf}</div>
					<div className={styles.sale}>{item.sale ? `-${item.sale}%` : null}</div>
					<div className={styles.icons}>
						<FontAwesomeIcon icon={faShoppingCart} />
						<FontAwesomeIcon icon={faHeart} />
						<FontAwesomeIcon icon={faRandom} />
						<FontAwesomeIcon icon={faEye} />
					</div>
					<div className={styles.imgCont}>
						<img className={styles.img} src={item.img[0]} alt={item.name}/>
						<img className={styles.imgTwo} src={item.img[1]} alt={item.name} />
						{item.timer}
					</div>
					<div className={styles.info}>
						<p className={styles.brend}>{item.brend}</p>
						<h6 className={styles.name}>{item.name}</h6>
						<span className={styles.prevPrise}>{item.sale !== null ? `$ ${item.prise + (item.prise * (item.sale / 100))}` : null}</span><span className={styles.prise}>${item.prise}</span>
					</div>
				</div>
			})
		)
	}
	return (
		<div className={styles.productContainer}>
			{returnProductItem(props.type, props.numberOf)}
		</div>
	)
}
ProductItem.propTypes = {
	type: PropTypes.string,
	numberOf: PropTypes.number
}
export default ProductItem
