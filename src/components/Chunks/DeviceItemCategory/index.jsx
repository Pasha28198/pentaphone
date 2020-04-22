import React, {Component} from 'react'
import CSSModules from 'react-css-modules'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import numeral from 'numeral'

import styles from './styles.scss'

@CSSModules(styles, {allowMultiple: true})

class DeviceItemCategory extends Component {
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

		img.src = this.props.img
	}

	// conver price to valid
	validPrice = (price) => numeral(price).format('0,0').split(',').join(' ')

	generateLink = (title, id) => `/device/${title.split(' ').join('-').split('/')[0]}/${id}`

	componentDidMount () {
		const {
			card
		} = this
		if (window.innerHeight > card.offsetTop) {
			this.loadImage()
		} else {
			window.addEventListener('scroll', () => { this.startLoad(card) })
		}
	}

	render () {
		const {
			props: {
				img, price,
				title, id, ind,
				lazyImage
			},
			validPrice, generateLink,
			state: {loadImage}
		} = this

		// generate title for device
		const titleDevice = title.split(' ').slice(0, 3).join(' ')

		// style wiht margin depend on number position
		const styleName = ind <= 8 && !((ind + 1) % 4)
			? 'DeviceItemCategoryWrapper four'
			: ind > 8 && !((ind + 1) % 4)
				? 'DeviceItemCategoryWrapper four'
				: 'DeviceItemCategoryWrapper'

		return (
			<div ref={(elem) => { this.card = elem }} styleName={styleName}>
				<Link
					styleName="DeviceItemCategory"
					to={generateLink(title, id)}
				>
					<div styleName="imgWrapper">
						<If condition={!loadImage && lazyImage}>
							<img src={lazyImage} alt="imageDevice"/>
						</If>
						<If condition={loadImage}>
							<img
								src={ img }
								alt="image"
							/>
						</If>
					</div>
					<h4>{titleDevice}</h4>
					<p>{validPrice(price)}
						<span>грн</span>
					</p>
				</Link>
			</div>
		)
	}
}

DeviceItemCategory.propTypes = {
	img: PropTypes.string,
	title: PropTypes.string,
	price: PropTypes.string,
	id: PropTypes.string,
	ind: PropTypes.number,
	lazyImage: PropTypes.string
}

export default DeviceItemCategory
