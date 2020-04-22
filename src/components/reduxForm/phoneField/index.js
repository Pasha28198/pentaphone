import React from 'react'

import styles from './style.scss'

export default (fields) => {
	return (
		<div className={styles.wrapperField}>
			<div className={styles.wrapperInput}>
				<input
					disabled={fields.disable}
					className={fields.meta.touched && fields.meta.error ? styles.errorInput : ''}
					{...fields.input}
					type={fields.type}
					placeholder={fields.label}
					onChange={(e) => {
						fields.input.onChange.call(e.target, e)
						e.target.focus()
						return false
					}}
				/>
			</div>
			<If condition={ fields.meta.touched && fields.meta.error }>
				<span className={styles.error}>{fields.meta.error}</span>
			</If>
		</div>
	)
}
