import React, {Component} from 'react'
import CSSModules from 'react-css-modules'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'

import configs from './config'

import styles from './styles.scss'
import check from 'src/assets/rating/active.svg'

const InfoVerify = ({verifySeller, type}) =>
	<div styleName="InfoVerify">
		<If condition={!verifySeller}>
			<h3>Проверка устройства</h3>
			<p>Продавец этого устройства согласен на его диагностику. Закажите услугу, и наши специалисты проверят исправность устройства и отправят вам видеоотчет.</p>
			<span>Что именно проверяется:</span>
		</If>
		<If condition={verifySeller}>
			<h3>10  пунктов проверки</h3>
			<span>Перед продажей устройств проверили по следующим пунктам:</span>
		</If>
		<ul>
			<If condition={type}>
				<For
					each='item'
					index='i'
					of={configs[type]}
				>
					<li
						styleName = {
							i === 4 && type !== 'laptop'
								? 'bigList' : ''
						}
					>
						<img src={check} alt=""/>
						<span>{item}</span>
					</li>
				</For>
			</If>
		</ul>
	</div>

InfoVerify.propTypes = {
	verifySeller: PropTypes.bool,
	type: PropTypes.string
}

export default CSSModules(InfoVerify, styles)
