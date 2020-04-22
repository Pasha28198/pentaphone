import React from 'react'
import CSSModules from 'react-css-modules'
import {Helmet} from 'react-helmet'

import styles from './styles.scss'
import Ghost from 'assets/svg/Ghost.svg'

const NotFound = () =>

	<div styleName="NotFound">
		<Helmet>
			<title>page 404 - not found</title>
		</Helmet>
		<h6 >Error: 404 Page Not Found </h6>
		<div styleName="NotFound-content">
			<span>
					4
			</span>
			<div>
				<img src={Ghost} alt="image"/>
			</div>
			<span>4</span>
		</div>
		<p>
				Упс! Ваша страничка не найдена
				или что-то пошло не так.
		</p>
	</div>

export default CSSModules(NotFound, styles)
