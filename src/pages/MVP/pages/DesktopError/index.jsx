import React from 'react'
import CSSModules from 'react-css-modules'

import image from 'src/assets/svg/errorDescImage.svg'

import styles from './styles.scss'

const DesctopError = () =>

	<div styleName="errorDesctop">
		<img src={image} alt=""/>
		<p>Сайт доступен для просмотра только с мобильного устройства.
			Воспользуйтесь для входа браузером смартфона или планшета.</p>
	</div>

export default CSSModules(DesctopError, styles)
