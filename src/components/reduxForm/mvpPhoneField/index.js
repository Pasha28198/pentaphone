import React from 'react'

import styles from './styles.scss'

export default (fields) => {
	return (
		<div className={styles.wrapperField}>
			<p>{fields.label}</p>
			<input
				{...fields.input}
				type={fields.type}
				onChange={(e) => {
					fields.input.onChange.call(e.target, e)
					e.target.focus()
					return false
				}}
			/>
			<If condition={ fields.meta.touched && fields.meta.error }>
				<span className={styles.error}>{fields.meta.error}</span>
			</If>
		</div>
	)
}
