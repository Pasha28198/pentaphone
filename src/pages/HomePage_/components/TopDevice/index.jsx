import React, {Component} from 'react'
import CSSModules from 'react-css-modules'
import PropTypes from 'prop-types'
import Swiper from 'react-id-swiper'
import { Link } from 'react-router-dom'
import numeral from 'numeral'

import styles from './styles.scss'
import settings from './configs'
import conditions from 'utills/main/visCondition.js'

@CSSModules(styles)

class TopDevice extends Component {
	render () {
		const { data } = this.props
		return (
			<div styleName="TopDevice">
				<div styleName="TopDevice-title">
					<h2>Toп смартфонов</h2>
					<a href="/buy/phone">Ещё</a>
				</div>
				<div styleName="wrapperTopDevice">
					<Swiper {...settings} >
						<For
							each='item'
							index='index'
							of={data}
						>
							<div
								styleName="ItemDeviceWrapper"
								key={index}
							>
								<Link
									to={`/device/${item.name.split(' ').join('-').split('/')[0]}/${item.id}`}
								>
									<div
										styleName="ItemDevice"
									>
										<div styleName="ItemDevice-image">
											<If condition={item.images[0]}>
												<img
													src={item.images[0].image.medium}
													alt="deviceImage"
												/>
											</If>
										</div>
										<div
											styleName="ItemDevice-description"
										>
											<h3>{item.name.split(' ').splice(0, 3).join(' ')}</h3>
											<span>{conditions[item.condition]}</span>
											<p>{numeral(item.price).format('0,0').split(',').join(' ')} грн</p>
											<button>
												Купить
											</button>
										</div>
									</div>
								</Link>
							</div>
						</For>
					</Swiper>
				</div>
			</div>
		)
	}
}

TopDevice.propTypes = {
	data: PropTypes.array
}

export default TopDevice
