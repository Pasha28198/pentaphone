import React from 'react'

import configs from './config'
import smile from 'assets/svg/smile.png'

import styles from './styles.scss'

const NoData = () => {
	const {pathname} = window.location

	const key = pathname.split('/')[1]
	const {h2, p} = configs[key] || configs['favorites']
	return (
		<div className={styles.NoData}>
			<img
				src={smile}
				alt="noData"
			/>
			<h2>{h2}</h2>
			<p>{p}</p>
		</div>
	)
}
export default NoData
