import React from 'react'

import styles from './style.scss'

export default (fields) =>
	<div className={styles.wrapperField}>
		<textarea
			{...fields.input}
			type={fields.type}
			placeholder={fields.label}
		/>
		<If condition={ fields.meta.touched && fields.meta.errorst }>
			<span className={styles.error}>{fields.meta.error}</span>
		</If>
	</div>
