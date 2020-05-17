import React, { useState } from 'react'
import styles from './styles.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons'
import { NavLink } from 'react-router-dom'
import PropTypes from 'prop-types'

import CategoryList from './categoryList'
import MenuList from './ dropDownList/menuList'
import ShopList from './ dropDownList/shopList'
import PagesList from './ dropDownList/pagesList'
import ElementsList from './ dropDownList/elementsList'

const HeaderBar = (props) => {
	console.log(window.innerWidth)
	const classes = [styles.containerAdd, 'container']
	const location = props.location

	function renderLinks () {
		const linksParam = [
			{name: 'Home', to: '/', exact: true, inner: <MenuList />},
			{name: 'Shop', to: '/shop', exact: true, inner: <ShopList/>},
			{name: 'About Us', to: '/aboutUs', exact: true, inner: ''},
			{name: 'Contact us', to: '/contactUs', exact: true, inner: ''},
			{name: 'Coming Soon', to: '/comingSoon', exact: true, inner: ''},
			{name: 'Pages', to: '/pages', exact: true, inner: <PagesList />},
			{name: 'Elements', to: '/elements', exact: true, inner: <ElementsList/>}
		]

		return (

			linksParam.map((item, i) => {
				return <NavLink
					activeClassName={styles.clicked}
					to={item.to}
					key={i}
					exact={item.exact}
				>{item.name} {item.inner}</NavLink>
			})

		)
	}

	return (
		<div className={styles.bottomBar}>
			<div className={classes.join(' ')}>
				<div className='row align-items-center justify-content-between'>
					<div className='col-sm-3 col-lg-3 col-md-4 col-sm-6 col-9'>
						<div className={styles.category}>
							<div className={styles.toggleCat}>
								<span>CATEGORIES</span>
								{
									(location === '' || location === '/')
										? null
										: <div
											className={styles.toggleIcon}
											onClick={() => props.toggleList()}>
											{
												(props.icon)
													? <FontAwesomeIcon icon={faTimes} />
													: <FontAwesomeIcon icon={faBars} />
											}
										</div>
								}

							</div>
							{
								(location === '' || location === '/' || props.icon)
									? 	<CategoryList/>
									: null
							}
							<div className={styles.mobileBurger}>
								<FontAwesomeIcon icon={faBars} />
							</div>

						</div>
					</div>
					<div className='col-lg col-md col-sm-6 col-3'>
						<div>
							<ul className={styles.links}>
								{ renderLinks() }
							</ul>
						</div>
						<div className={styles.linksMobile}>
							<FontAwesomeIcon icon={faBars} />
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
HeaderBar.propTypes = {
	location: PropTypes.string,
	toggleList: PropTypes.function,
	icon: PropTypes.bool
}
export default HeaderBar
