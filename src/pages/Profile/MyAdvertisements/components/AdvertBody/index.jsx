import React from 'react'
import CSSModules from 'react-css-modules'
import PropTypes from 'prop-types'

import eye from 'src/assets/svg/eye.svg'

import styles from './styles.scss'

const AdvertBody = ({image, name, price, hitCount}) =>
	<section styleName="advertBody">
		<img src={image} alt=""/>
		<div styleName="contentWrapper">
			<h1>{name}</h1>
			<p>
				<Choose>
					<When condition={price}>
						<span>
							{+price}
							<span>грн</span>
						</span>
					</When>
					<Otherwise>
						<span>Цена не указана</span>
					</Otherwise>
				</Choose>
				<span styleName="hitCount">
					<img src={eye} alt=""/>
					{hitCount}
				</span>
			</p>
		</div>
	</section>

AdvertBody.propTypes = {
	image: PropTypes.string,
	name: PropTypes.string,
	price: PropTypes.number,
	hitCount: PropTypes.number
}

export default CSSModules(AdvertBody, styles)
