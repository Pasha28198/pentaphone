import React from 'react'
import styles from './styles.scss'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faEye } from '@fortawesome/free-regular-svg-icons'
import { faRandom, faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { itemList } from './infoItem'
import Timer from './timer'

const itemTypes = {
	'lastChanse': styles.prodItemLast,
	'trending': styles.prodItem,
	'bestsellersMain': styles.prodItemBestMain,
	'bestsellersSec': styles.prodItemBestSec,
	'LatestProd': [],
	'hotDeals': [],
	'viewed': [],
	'slider': []
}

const ProductItem = (props) => {
	function returnProductItem (type, numberOf) {
		let currentStylesList
		let saleIsNumber = false
		Object.keys(itemTypes).map((elem) => {
			if (type === elem) {
				currentStylesList = itemTypes[elem]
			}
			if (type === 'bestsellersMain' || 'bestsellersSec' || 'hotDeals') {
				saleIsNumber = true
			}
		})

		return (
			itemList.map((item, i) => {
				let sale = 'SALE'
				if (i > numberOf) { return }
				if (saleIsNumber && item.sale) {
					sale = item.sale + '%'
				}

				return <div key={i} className={currentStylesList}>
					<div className={styles.outOf}>{item.outOf}</div>
					<div className={styles.sale}>{item.sale ? sale : null}</div>
					<div className={styles.icons}>
						<FontAwesomeIcon icon={faShoppingCart} />
						<FontAwesomeIcon icon={faHeart} />
						<FontAwesomeIcon icon={faRandom} />
						<FontAwesomeIcon icon={faEye} />
					</div>
					<div className={styles.imgCont}>
						<img className={styles.img} src={item.img[0]} alt={item.name}/>
						<img className={styles.imgTwo} src={item.img[1]} alt={item.name} />
						<div className={styles.timer}>{item.timer}</div>
					</div>
					<div className={styles.info}>
						<p className={styles.brend}>{item.brend}</p>
						<h6 className={styles.name}>{item.name}</h6>
						{type === 'bestsellersSec' ? <Timer className={styles.timerSecondType}/> : null}
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
