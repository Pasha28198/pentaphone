import React, {Component} from 'react'
import CSSModules from 'react-css-modules'
import PropTypes from 'prop-types'

import arrow from 'src/assets/arrow_sellFlow.svg'
import styles from './styles.scss'
import checkConfig from 'utills/order/check.js'

class Сheck extends Component {
	state = {
		toomblerCheck: false
	}

	toomblerCheckHundler = () => {
		this.setState((prev) => ({toomblerCheck: !prev.toomblerCheck}))
	}

	render () {
		const {
			state: { toomblerCheck },
			toomblerCheckHundler,
			props: { data }
		} = this
		const currency = 'грн'

		return (
			<div
				onClick={toomblerCheckHundler}
				styleName="Check"
				style={
					toomblerCheck
						? {
							maxHeight: 500
						}
						: {}
				}
			>
				<div styleName="Check-details">
					<span>Детальнее</span>
					<span>
						{data.check.total} грн
						<img
							style={
								toomblerCheck
									? {
										transform: 'rotate(270deg)'
									}
									: {}
							}
							src={arrow}
							alt="arrow"
						/>
					</span>
				</div>
				<section>
					<article>
						<ul styleName="Check-prices">
							<For each="item" of={Object.keys(data.check)} index="index">
								<If condition={checkConfig[data.kind][item]}>
									<li key={index}>
										<span>{checkConfig[data.kind][item]}</span>
										<span>{`${data.check[item]} ${currency}`}</span>
									</li>
								</If>
							</For>
						</ul>
					</article>
					<article styleName="Check-userInfo">
						<If condition={data.userInfo.verifiedSeller}>
							<h2>Надежный продавец: </h2>
						</If>
						<a href={`/user/${data.userInfo.id}`}>{`${data.userInfo.userName} ${data.userInfo.lastUserName}`} ({data.userInfo.rating || '0'}/5) </a>
						{/* <span>Киев</span> */}
					</article>
				</section>
			</div>
		)
	}
}

Сheck.propTypes = {
	data: PropTypes.object
}

export default CSSModules(styles)(Сheck)
