import React from 'react'
import styles from './styles.scss'
import { NavLink } from 'react-router-dom'

const ElementsList = () => {
	return (
		<div className={styles.elementsList}>
			<div>
				<h4>Elements 1</h4>
				<ul>
					<li><NavLink to=''>Featured Products</NavLink></li>
					<li><NavLink to=''>Hot Deals</NavLink></li>
					<li><NavLink to=''>Deal Of The Day</NavLink></li>
					<li><NavLink to=''>Category Banner</NavLink></li>
					<li><NavLink to=''>Product Width Hint</NavLink></li>
				</ul>
			</div>
			<div>
				<h4>Elements 2</h4>
				<ul>
					<li><NavLink to=''>Product Grid With Sync Carousel</NavLink></li>
					<li><NavLink to=''>Products Grid</NavLink></li>
					<li><NavLink to=''>Products Carousel</NavLink></li>
					<li><NavLink to=''>Products Grid With Categories</NavLink></li>
					<li><NavLink to=''>Products in tabs</NavLink></li>
				</ul>
			</div>
			<div>
				<h4>Elements 3</h4>
				<ul>
					<li><NavLink to=''>Product Categories Carousel</NavLink></li>
					<li><NavLink to=''>Buttons</NavLink></li>
					<li><NavLink to=''>Icon box</NavLink></li>
					<li><NavLink to=''>Countdown</NavLink></li>
					<li><NavLink to=''>Post list</NavLink></li>
				</ul>
			</div>
			<div>
				<img src='https://via.placeholder.com/150x150' alt='' />
			</div>
			<div className={styles.helper}></div>
		</div>)
}
export default ElementsList
