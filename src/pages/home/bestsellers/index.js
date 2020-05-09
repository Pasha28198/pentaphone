import React, { Component } from 'react'
import styles from './styles.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faListAlt, faClock } from '@fortawesome/free-regular-svg-icons'
import { faChartLine, faCamera, faHeadphones } from '@fortawesome/free-solid-svg-icons'
import { NavLink, Route, Switch } from 'react-router-dom'
import PropTypes from 'prop-types'
import HomeAllProd from './homeAllProd/index'

const Bestsellers = ({match}) => {
	console.log(match)
	return (
		<div>
			<div className={styles.titleContainer}>
				<h4>Bestsellers</h4>
				<div>
					<NavLink activeClassName={styles.choosen} to=''><FontAwesomeIcon icon={faListAlt}/></NavLink>
					<NavLink activeClassName={styles.choosen} to=''><FontAwesomeIcon icon={faChartLine}/></NavLink>
					<NavLink activeClassName={styles.choosen} to=''><FontAwesomeIcon icon={faCamera}/></NavLink>
					<NavLink activeClassName={styles.choosen} to='' ><FontAwesomeIcon icon={faClock}/></NavLink>
					<NavLink activeClassName={styles.choosen} to='' ><FontAwesomeIcon icon={faHeadphones}/></NavLink>
				</div>
			</div>
			<div>
				<HomeAllProd />
			</div>
		</div>
	)
}
Bestsellers.propTypes = {
	match: PropTypes.string
}

export default Bestsellers
