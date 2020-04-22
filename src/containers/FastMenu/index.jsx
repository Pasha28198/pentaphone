import React, {Component} from 'react'
import CSSModules from 'react-css-modules'
// import Swiper from 'react-id-swiper'
import {Link} from 'react-router-dom'

import configs from './config'
// import settings from './settings'

import styles from './styles.scss'

@CSSModules(styles)

class FastMenuItems extends Component {
	render () {
		const styleName = 'linkWrapper'
		return (
			<div styleName="wrapperSliderFastMenu">
				<div styleName='fastMenuSlider'>
					{/* <Swiper{...settings}> */}
					<For each='configs' index='key' of={configs}>
						<div
							{...{styleName}}
							key={key}
						>
							<Link {...{to: configs.to}}>
								<img {...{src: configs.src, alt: configs.alt}}/>
								<div>{configs.alt}</div>
							</Link>
						</div>
					</For>
					{/* </Swiper> */}
				</div>
				<div styleName="fastMenuSlider-desktop">
					<For each='configs' index='key' of={configs}>
						<div {...{styleName}} key={key}>
							<Link {...{to: configs.to}}>
								<img {...{src: configs.src, alt: configs.alt}}/>
								<div>{configs.alt}</div>
							</Link>
						</div>
					</For>
				</div>
			</div>
		)
	}
}

export default FastMenuItems
