import React, {Component} from 'react'
import CSSModules from 'react-css-modules'
import PropTypes from 'prop-types'
import Swiper from 'react-id-swiper'
import Numeral from 'numeral'
import { Link } from 'react-router-dom'

import configs from './configs'
import { getRecently } from 'utills/recentlyView.js'

import styles from './styles.scss'

@CSSModules(styles)

class Iphones extends Component {
state = {
	list: []
}

componentWillReceiveProps ({id}) {
	if (this.props.id !== id) {
		this.setState({
			list: getRecently()
		})
	}
}

componentDidMount () {
	var recent = getRecently()
	this.setState({
		list: recent
	})
}

imageUrl = (img) => img[0] && img[0].image['medium']

render () {
	const { list } = this.state
	if (!list.length) return (<div></div>)

	return (
		<div styleName="BestIphone">
			<h2>Недавно просмотренные</h2>
			<p></p>
			<Swiper {...configs}>
				<For each="item" index="index" of={list}>
					<Link to={`/device/${item.name.split(' ').join('-')}/${item.id}`} styleName="Best" key={index}>
						<img src={this.imageUrl(item.img)} alt="imageUrl"/>
						<div>
							<h3>{item.name.split(' ').splice(0, 4).join(' ')}</h3>
							<div styleName="Best-price">
								{parseInt(
									Numeral(item.price).format('0,0').split(',').join(' '))
									? Numeral(item.price).format('0,0').split(',').join(' ')
									: '0'}
								<span>грн</span>
							</div>
						</div>
					</Link>
				</For>
			</Swiper>
		</div>
	)
}
}

Iphones.propTypes = {
	id: PropTypes.string
}

export default Iphones
