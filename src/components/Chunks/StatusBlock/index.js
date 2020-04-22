import React from 'react'
import PropTypes from 'prop-types'

import styles from './styles.scss'

function StatusBlock ({children}) {
	return (
		<div className={styles.status}>
			<span>Статус:</span>
			<p>{children}</p>
		</div>
	)
}

StatusBlock.propTypes = {
	children: PropTypes.string
}

export default StatusBlock
