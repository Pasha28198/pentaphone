import React from 'react'
import CSSModules from 'react-css-modules'
import PropTypes from 'prop-types'

import checked from 'assets/images/checked.png'
import empty from 'assets/svg/empty.svg'

import styles from './styles.scss'

const Warranty = ({fetch, fetchKind, war3, war12}) =>
	<div styleName='wrapAssura'>
		<p>Гарантия</p>
		<div styleName="wrapper">
			<figure onClick={() => fetch(300)}>
				<img
					styleName="desk"
					src={fetchKind === 300 ? checked : empty} alt=""
				/>
				<p>
						10 дней <br/>
					<span>
						Гарантия от Resell, входит в стоимость проверки
					</span>
				</p>
				<img
					styleName='mob'
					src={fetchKind === 300 ? checked : empty}
				/>
			</figure>
			<figure onClick={() => fetch(400)}>
				<img
					styleName="desk"
					src={fetchKind === 400 ? checked : empty} alt=""
				/>
				<p>
						3 месяца <br/>
					<span>
						{`Расширенная гарантия от support.ua, ${+war3} грн`}
					</span>
				</p>
				<img
					styleName='mob'
					src={fetchKind === 400 ? checked : empty}
				/>
			</figure>
			<figure onClick={() => fetch(500)}>
				<img
					styleName="desk"
					src={fetchKind === 500 ? checked : empty}
				/>
				<p>
						12 месяцев <br/>
					<span>
						{`Расширенная гарантия от support.ua, ${+war12} грн`}
					</span>
				</p>
				<img
					styleName='mob'
					src={fetchKind === 500 ? checked : empty} alt=""
				/>
			</figure>
		</div>
	</div>

Warranty.propTypes = {
	fetchKind: PropTypes.number,
	fetch: PropTypes.func,
	war3: PropTypes.string,
	war12: PropTypes.string
}

export default CSSModules(Warranty, styles)
