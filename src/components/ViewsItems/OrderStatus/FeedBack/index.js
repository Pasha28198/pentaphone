import React from 'react'
import PropTypes from 'prop-types'

import styles from './styles.scss'

function FeedBack (props) {
	const {confirm} = props
	return (
		<div className={styles.ConfirmationBtn} onClick={confirm}>
			<span
				className={styles.ConfirmBtn}
			>
				Оставить отзыв
			</span>
		</div>
	)
}

FeedBack.propTypes = {
	confirm: PropTypes.func.isRequired
}

export default FeedBack
