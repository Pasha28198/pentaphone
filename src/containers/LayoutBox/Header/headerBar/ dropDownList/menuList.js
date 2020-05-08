import React from 'react'
import styles from './styles.scss'
import { NavLink } from 'react-router-dom'

const MenuList = () => {
	return (
		<ul className={styles.menuList}>
			<li><NavLink to='/1'>Modern</NavLink></li>
			<li><NavLink to='/2'>Contemporary</NavLink></li>
			<li><NavLink to='/3'>Minimal</NavLink></li>
			<li><NavLink to='/4'>Yellow</NavLink></li>
			<li><NavLink to='/5'>Strong</NavLink></li>
			<li><NavLink to='/6'>Creative</NavLink></li>
			<li><NavLink to='/7'>Trendly</NavLink></li>
			<li><NavLink to='/8'>Classic</NavLink></li>
		</ul>
	)
}
export default MenuList
