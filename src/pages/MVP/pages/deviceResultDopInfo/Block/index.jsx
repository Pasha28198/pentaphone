import React from 'react'
import PropTypes from 'prop-types'

import styles from '../styles.scss'

const Block = props => {
	const {item: {image, name}, index, cleanInfo} = props
	const onClick = () => { cleanInfo(index) }
	return (
		<div {...{className: styles.itemInfo, onClick}}>
			<Choose>
				<When condition={ image }>
					<img src={image} alt="item.name" />
				</When>
				<Otherwise>{''}</Otherwise>
			</Choose>
			<Choose>
				<When condition={ image }>{''}</When>
				<Otherwise>{name}</Otherwise>
			</Choose>
		</div>
	)
}

Block.propTypes = {
	index: PropTypes.number,
	item: PropTypes.object,
	cleanInfo: PropTypes.func
}

export default Block
