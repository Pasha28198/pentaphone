import React from 'react'
import CSSModules from 'react-css-modules'
import PropTypes from 'prop-types'

import generateExistTime from 'src/utills/generateExistTime.js'

import styles from './styles.scss'

const InfoBar = ({feedback, date, goods}) => {
	const existTime = generateExistTime(date)
	return (
		<div styleName="infoBar">
			<div>
				<span>{goods}</span><br/>
				товар(ов)
			</div>
			<div styleName="centerBlock">
				<span>{feedback}</span><br/>
				отзывы
			</div>
			<div>
				<span>
					<Choose>
						<When condition={typeof existTime === 'string'}>
							{existTime}
						</When>
						<Otherwise>
							<If condition={existTime.countYears}>
								{existTime.countYears}
								<span> {existTime.textYears}</span> <br/>
							</If>
							{existTime.countMonth}
							<span> {existTime.textMonth}</span>
						</Otherwise>
					</Choose>
				</span><br/>
				на сайте
			</div>
		</div>
	)
}

InfoBar.propTypes = {
	feedback: PropTypes.number,
	date: PropTypes.object,
	goods: PropTypes.string
}

export default CSSModules(InfoBar, styles)
