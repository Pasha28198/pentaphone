import React from 'react'
import PropTypes from 'prop-types'

import styles from './styles.scss'

function ConfirmExist (props) {
	const {confirm, cancel} = props
	return (
		<div className={styles.ConfirmationBtn}>
			<span
				onClick={cancel}
				className={styles.CancelBtn}
			>
				Отменить
			</span>
			<span
				onClick={confirm}
				className={styles.ConfirmBtn}
			>
				Подтвердить
			</span>
		</div>
	)
}

ConfirmExist.propTypes = {
	confirm: PropTypes.func.isRequired,
	cancel: PropTypes.func.isRequired
}

export default ConfirmExist
