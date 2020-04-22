import React, {Component} from 'react'
import CSSModules from 'react-css-modules'
// import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import styles from './styles.scss'
import configs from './configs'

@CSSModules(styles)

class FastMenu extends Component {
	render () {
		return (
			<div
				ref={el => { this.el = el }}
				styleName="FastMenu"
			>
				<h2>Покупайте и продавайте безопасно</h2>
				<div styleName='FastMenu-select'>
					<For each='configs' index='key' of={configs}>
						<Link
							{...{to: configs.to}}
							key={key}
						>
							<div
								styleName={configs.className}
							>
								<img
									styleName="FastMenu-select-img"
									{...{src: configs.src, alt: configs.alt}}
								/>
								<div styleName="FastMenu-select-text">{configs.alt}</div>
							</div>
						</Link>
					</For>
				</div>
			</div>
		)
	}
}

FastMenu.propTypes = {}

export default FastMenu
