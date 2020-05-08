import React from 'react'
import styles from './styles.scss'
import { NavLink } from 'react-router-dom'

function ShopList () {
	return (
		<div className={styles.shopList}>
			<div className={styles.layoutLinks}>
				<div className={styles.block}>
					<h4>SHOP PAGES</h4>
					<ul>
						<li><NavLink to=''>Default Shop</NavLink></li>
						<li><NavLink to=''>Product List View</NavLink></li>
						<li><NavLink to=''>Shop Grid</NavLink></li>
						<li><NavLink to=''>Hidden Sidebar</NavLink></li>
					</ul>
				</div>
				<div className={styles.block}>
					<h4>PRODUCTS</h4>
					<ul>
						<li><NavLink to=''>Product style 1</NavLink></li>
						<li><NavLink to=''>Product style 2</NavLink></li>
						<li><NavLink to=''>Product style 3</NavLink></li>
						<li><NavLink to=''>Product style 4</NavLink></li>
					</ul>
				</div>
				<div className={styles.block}>
					<h4>WOOCOMMERCE</h4>
					<ul>
						<li><NavLink to=''>Dokan dashboard</NavLink></li>
						<li><NavLink to=''>My account</NavLink></li>
						<li><NavLink to=''>Wishlist</NavLink></li>
						<li><NavLink to=''>Cart</NavLink></li>
						<li><NavLink to=''>Checkout</NavLink></li>
					</ul>
				</div>
				<div className={styles.block}>
					<h4>PRODUCT TYPES</h4>
					<ul>
						<li><NavLink to=''>Product – Simple</NavLink></li>
						<li><NavLink to=''>Product – On sale</NavLink></li>
						<li><NavLink to=''>Product – Out of stock</NavLink></li>
						<li><NavLink to=''>Product – Limited offer</NavLink></li>
						<li><NavLink to=''>Product – Variable</NavLink></li>
					</ul>
				</div>
			</div>
			<div className={styles.imgLink}>
				<NavLink to=''>
					<img src='https://via.placeholder.com/200x300' alt='' />
				</NavLink>
			</div>
			<div className={styles.helper}></div>
		</div>
	)
}
export default ShopList
