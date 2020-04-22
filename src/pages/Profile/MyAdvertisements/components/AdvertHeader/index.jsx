import React from 'react'
import CSSModules from 'react-css-modules'
import PropTypes from 'prop-types'

import rubbish from 'assets/svg/rubbish-bin.svg'

import styles from './styles.scss'

const AdvertHeader = ({create, number, deleteAdvertisment, id, status}) => {
	const arr = create.split('T')

	const data = arr[0].split('-').reverse().join(' ')

	const time = arr[1].split(':').slice(0, 2).join(':')

	return (
		<section styleName='adverHeader'>
			<div>
				<p>
					Дата создания:
					<span>{` ${data}, ${time}`}</span>
				</p>
			</div>
			<If
				condition={
					status === 200 ||
					status === 500 ||
					status === 800
				}
			>
				<img src={rubbish} onClick={() => deleteAdvertisment(id)}/>
			</If>
		</section>
	)
}

AdvertHeader.propTypes = {
	create: PropTypes.string,
	number: PropTypes.number,
	deleteAdvertisment: PropTypes.func,
	id: PropTypes.string,
	status: PropTypes.number
}

export default CSSModules(AdvertHeader, styles)
