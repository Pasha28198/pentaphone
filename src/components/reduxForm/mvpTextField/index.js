import React from 'react'
import styles from './styles.scss'

export default (fields) =>
	<div className={styles.wrapperField}>
		<p>{fields.label}</p>
		<input
			{...fields.input}
			placeholder={fields.placeholder}
		/>
		<If condition={ fields.meta.touched && fields.meta.error }>
			<span className={styles.error}>{fields.meta.error}</span>
		</If>
	</div>
