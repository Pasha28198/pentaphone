import React from 'react'

import styles from './style.scss'

import letter from 'assets/svg/letter.svg'
import lock from 'assets/svg/lock.svg'

const config = {mail: letter, password: lock}

export default (fields) =>
	<div className={styles.wrapperField}>
		<div className={styles.wrapperInput}>
			<div>
				<img src={config[fields.icon]} alt="mail"/>
			</div>
			<input
				{...fields.input}
				type={fields.type}
				placeholder={fields.label}
			/>
		</div>
		<If condition={ fields.meta.touched && fields.meta.error }>
			<span className={styles.error}>{fields.meta.error}</span>
		</If>
	</div>
