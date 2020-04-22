import React from 'react'
import {Input} from 'semantic-ui-react'

import styles from './styles.scss'

export default (fields) =>

	<div className={styles.wrapperInput}>
		<Input
			className={styles.uaInput}
			{...fields.input}
			type={fields.type}
			placeholder={fields.label}
		/>
		<If condition={fields.meta.error && fields.meta.touched}>
			<span className={styles.error}>{fields.meta.error}</span>
		</If>
	</div>
