import React from 'react'
import styles from './style.scss'

export default (fields) => (
	<div className={styles.wrapperField}>
		<input
			{...fields.input}
			type={fields.type}
			placeholder={fields.label}
		/>
		<If condition={ fields.meta.touched && fields.meta.error }>
			<span className={styles.error}>{fields.meta.error}</span>
		</If>
	</div>
)
