import React, {Component} from 'react'
import CSSModules from 'react-css-modules'
import Swiper from 'react-id-swiper'
import './styleBanner.css'

import arrow from 'assets/icons/arr_left.svg'

import settings from './setting'
import configs from 'utills/configs/bannerConfig.js'

import styles from './styles.scss'

@CSSModules(styles)

class BannerSlider extends Component {
	state={
		visibleBtns: false
	}
	componentDidMount () {
		this.wrapper && this.wrapper.addEventListener('mouseover', () => {
			this.setState({visibleBtns: true})
		})
		this.wrapper && this.wrapper.addEventListener('mouseout', () => {
			this.setState({visibleBtns: false})
		})
	}
	render () {
		return (
			<div
				ref={wrapper => (this.wrapper = wrapper)}
				styleName="sliderWrapper"
			>
				<Swiper
					ref={node => { (node) && (this.swiper = node.swiper) }}
					{...settings}
				>
					<For
						each='item'
						index='index'
						of={configs}
					>
						<a
							key={index}
							target="_blank"
							href={window.location.origin + item.url}
						>
							<img
								key={index}
								styleName="BannerImage"
								src={item.img}
								alt="bannerImage"
							/>
						</a>
					</For>
				</Swiper>

				<button
					styleName={this.state.visibleBtns ? 'visible' : 'hidden'}
					onClick={() => this.swiper.slideTo(this.swiper.activeIndex - 1)}
					ref={btn => (this.btn2 = btn)}
				>
					<img
						src={arrow}
					/>
				</button>
				<button
					styleName={this.state.visibleBtns ? 'visible' : 'hidden'}
					onClick={() => this.swiper.slideTo(this.swiper.activeIndex + 1)}
					ref={btn => (this.btn = btn)}
				>
					<img src={arrow} alt=""/>
				</button>
			</div>
		)
	}
}

BannerSlider.propTypes = {}

export default BannerSlider
