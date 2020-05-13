import React from 'react'
import styles from './styles.scss'
import ProductItem from 'src/generalElements/productItem'
import { NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock } from '@fortawesome/free-regular-svg-icons'
import { faVolumeUp, faCamera, faHeadphones, faLaptop, faMobileAlt } from '@fortawesome/free-solid-svg-icons'

const HotDeals = () => {
	return (
		<div className={styles.HotDeals}>
			<h4>Hot Deals</h4>
			<div className={styles.HotDealscontent}>
				<ul>
					<li><NavLink activeClassName={styles.hotActive} to=''>Watches <FontAwesomeIcon icon={faClock}/></NavLink></li>
					<li><NavLink activeClassName={styles.hotActive} to='/sdff'>Speakers <FontAwesomeIcon icon={faVolumeUp}/></NavLink></li>
					<li><NavLink activeClassName={styles.hotActive} to='/sdfsf'>Computers <FontAwesomeIcon icon={faLaptop}/></NavLink></li>
					<li><NavLink activeClassName={styles.hotActive} to='/ssdfsf'>Smartphones <FontAwesomeIcon icon={faMobileAlt}/></NavLink></li>
					<li><NavLink activeClassName={styles.hotActive} to='/sdfsf'>Cameras <FontAwesomeIcon icon={faCamera}/></NavLink></li>
					<li><NavLink activeClassName={styles.hotActive} to='/sfsffs'>Headphone <FontAwesomeIcon icon={faHeadphones}/></NavLink></li>
				</ul>
				<div className={styles.HotDealsItemContainer}>
					<ProductItem type='hotDeals' numberOf={5} />
				</div>
			</div>
		</div>
	)
}
export default HotDeals
