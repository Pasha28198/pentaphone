import React, {Component} from 'react'
import CSSModules from 'react-css-modules'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import Swiper from 'react-id-swiper'

import configs from './configs'
import arrow from 'assets/svg/arrowGreen.svg'
import arrowGray from 'assets/svg/arrowGrey.svg'
import close from 'assets/images/closeModal.png'

import './swiperStyles.css'
import {mapStateToProps, mapActionsToProps} from './redux.js'
import styles from './styles.scss'

@connect(mapStateToProps, mapActionsToProps)
@CSSModules(styles, {allowMultiple: true})

class ModalChild extends Component {
	state={active: 0}
	keyPress = e => {
		(e.keyCode === 27) && this.props.onClick()
		!this.props.status &&
		window.removeEventListener('keyup', this.keyPress)
	}
	componentDidMount () {
		this.swiper &&
		this.swiper.on('slideChange', () => {
			this.setState({
				active: this.swiper.activeIndex
			})
		})
		window.addEventListener('keyup', this.keyPress)
	}
	componentWillReceiveProps (nextState) {
		this.swiper &&
		!nextState.status &&
		setTimeout(() => this.swiper.slideTo(0), 400)

		nextState.status &&
		window.addEventListener('keyup', this.keyPress)
	}
	componentWillUnmount () {
		window.removeEventListener('keyup', this.keyPress)
	}
	render () {
		const {data, onClick, status} = this.props
		const {length} = configs[data]
		if (length) {
			return (
				<div styleName={status ? 'modalWrapper open' : 'modalWrapper'}>
					<img
						styleName="close"
						onClick={onClick}
						src={close} alt=""
					/>
					<If condition={this.state.active}>
						<img
							styleName="left"
							src={arrowGray}
							alt=""
							onClick={() => this.swiper.slideTo(this.swiper.activeIndex - 1)}
						/>
					</If>
					<If condition={this.state.active !== (length - 1) }>
						<img
							styleName="right"
							src={arrowGray}
							alt=""
							onClick={() => this.swiper.slideTo(this.swiper.activeIndex + 1)}
						/>
					</If>
					<Swiper
						ref={node => { (node) && (this.swiper = node.swiper) }}
					>
						<For each='slide' index='key' of={configs[data]}>
							<section key={key}>
								<img src={slide.image} alt=""/>
								<article>
									<h1>{slide.h1}</h1>
									<Choose>
										<When condition={ slide.content.type === 'list'}>
											<For each='item' index='i' of={slide.content.text}>
												<p key={i}><span></span>{item}</p>
											</For>
										</When>
										<Otherwise>
											<p>
												{slide.content.text}
											</p>
										</Otherwise>
									</Choose>
								</article>
							</section>
						</For>
					</Swiper>
					<div styleName="buttonWrapper">
						<Choose >
							<When condition={this.state.active}>
								<button
									onClick={() => this.swiper.slideTo(this.swiper.activeIndex - 1)}
								>
									<img
										src={arrow}
										styleName="left"
									/>
									Назад
								</button>
							</When>
							<Otherwise>
								<div></div>
							</Otherwise>
						</Choose>
						<Choose >
							<When condition={this.state.active !== (length - 1) }>
								<button
									onClick={() => this.swiper.slideTo(this.swiper.activeIndex + 1)}
								>
									Далее
									<img src={arrow} alt=""/>
								</button>
							</When>
							<Otherwise>
								<button
									onClick={onClick}
								>
										OK

								</button>
							</Otherwise>
						</Choose>
					</div>
				</div>
			)
		} else {
			const {image, h1, content: {type, text}} = configs[data]
			return (
				<div styleName={status ? 'modalWrapper open' : 'modalWrapper'}>
					<img
						styleName="close"
						onClick={onClick}
						src={close} alt=""
					/>
					<section>
						<img src={image} alt=""/>
						<article>
							<h1>{h1}</h1>
							<Choose>
								<When condition={ type === 'list'}>
									<For each='item' index='i' of={text}>
										<p styleName="list" key={i}><span></span>{item}</p>
									</For>
								</When>
								<Otherwise>
									<p>
										{text}
									</p>
								</Otherwise>
							</Choose>
						</article>
					</section>
					<div styleName="buttonWrapper">
						<div></div>
						<button
							ref={but => (this.butClose = but)}
							onClick={onClick}
						>
							OK
						</button>
					</div>
				</div>
			)
		}
	}
}

ModalChild.propTypes = {
	data: PropTypes.string,
	onClick: PropTypes.func,
	status: PropTypes.bool
}
export default ModalChild
