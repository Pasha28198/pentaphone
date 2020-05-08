import React from 'react'
import styles from './styles.scss'
import { NavLink } from 'react-router-dom'

const PagesList = () => {
	return <div>
		<ul className={styles.menuList}>
			<li><NavLink to='/1'>Blog</NavLink></li>
			<li><NavLink to='/2'>Portfolio</NavLink></li>
			<li><NavLink to='/3'>404</NavLink></li>
		</ul>
	</div>
}
export default PagesList
