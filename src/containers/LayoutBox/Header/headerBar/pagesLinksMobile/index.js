import React from 'react'
import styles from './styles.scss'
import PropTypes, { func } from 'prop-types'
import search from 'src/assets/search.svg'

const PagesLinksMobile = (props) => {
	return (
		<div className={styles.pagesLinksMobile}>
			<div className={styles.linksContainer}>
				{
					props.links()
				}
			</div>
			<div className={styles.search}>
				<input className={styles.inputMob} placeholder='What are you looking' type='text'/>
				<button><img src={search} alt='search' /></button>
			</div>
		</div>
	)
}
PagesLinksMobile.propTypes = {
	links: PropTypes.func
}
export default PagesLinksMobile
