import React, {Component} from 'react'
import CSSModules from 'react-css-modules'
import PropTypes from 'prop-types'

import Heart from 'src/assets/Category/Heart.svg'
import HeartActive from 'src/assets/Category/Heart-active.svg'
import UserRating from 'components/ViewsItems/VerifySeller'

import styles from './styles.scss'

class Card extends Component {
	state = {
		loadImage: false
	}

	startLoad = (card) => {
		let windowBottonSideY = window.pageYOffset + window.innerHeight
		let paginationBottonSideY = card.offsetTop

		if (windowBottonSideY >= paginationBottonSideY) {
			this.loadImage()
		}
	}

	loadImage = () => {
		let img = new Image()

		img.onload = () => {
			this.setState({loadImage: true})
			window.removeEventListener('scroll', this.startLoad)
		}

		img.src = this.props.imageCard
	}

	choseFavorite = (bool) => bool ? HeartActive : Heart

	favoriteToombler = (e) => {
		e.preventDefault()
		this.props.toomblerFavorite()
	}

	componentDidMount () {
		const { card } = this

		if (window.innerHeight > card.offsetTop) {
			this.loadImage()
		} else {
			window.addEventListener(
				'scroll',
				() => { this.startLoad(card) }
			)
		}
	}

	render () {
		const {
			props: {
				imageCard, nameCard,
				price, textField1,
				textField2, currency,
				favoriteActive, lazyImage
			},
			state: {
				loadImage
			},
			choseFavorite,
			favoriteToombler
		} = this

		return (
			<div
				ref={(element) => { this.card = element }}
				styleName="Card"
			>
				<div styleName="Card-image">
					<div styleName="Card-image--main">
						<If condition={!loadImage && lazyImage}>
							<img
								styleName="image-lazy"
								src={ lazyImage }
								alt="image"
							/>
						</If>
						<If condition={loadImage}>
							<img
								styleName="image--main"
								src={ imageCard }
								alt="image"
							/>
						</If>
					</div>
					<div
						styleName="Card-image--favorite"
						onClick={ favoriteToombler }
					>
						<img
							src={ choseFavorite(favoriteActive) }
							alt="favorite"
						/>
					</div>
				</div>
				<div styleName="contentWrapper">
					<p styleName="Card-name">{ nameCard }</p>
					<p styleName="Card-price">
						{ price }
						<span>{ currency }</span>
					</p>
					<p styleName="Card-textField">{ textField1 }</p>
					{textField2 && <p styleName="Card-textField"><UserRating/></p>}
				</div>
			</div>
		)
	}
}

Card.propTypes = {
	imageCard: PropTypes.string,
	lazyImage: PropTypes.string,
	nameCard: PropTypes.string,
	price: PropTypes.oneOfType([
		PropTypes.number,
		PropTypes.string
	]),
	textField1: PropTypes.string,
	textField2: PropTypes.bool,
	currency: PropTypes.string,
	favoriteActive: PropTypes.bool,
	toomblerFavorite: PropTypes.func
}

Card.defaultProps = {
	imageCard: 'Lorem',
	nameCard: 'Lorem',
	price: 0,
	textField1: '',
	textField2: '',
	currency: '$',
	favoriteActive: false
}

export default CSSModules(styles)(Card)
