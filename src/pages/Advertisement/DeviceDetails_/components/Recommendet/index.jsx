import React, {Component} from 'react'
import CSSModules from 'react-css-modules'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import Swiper from 'react-id-swiper'
import Numeral from 'numeral'
import { Link } from 'react-router-dom'

import configs from './configs'

import {mapStateToProps, mapActionsToProps} from './redux.js'
import styles from './styles.scss'

@connect(mapStateToProps, mapActionsToProps)
@CSSModules(styles)

class Recommendet extends Component {
state = {
	list: []
}
componentDidMount () {
	this.props.getTopIphone(this.props.id).then(res => {
		console.log(res)
		this.setState({
			list: res.data.results
		})
	})
}

imageUrl = (img) => img[0] && img[0].image.medium

render () {
	const { list } = this.state
	if (!list.length) return (<div></div>)

	return (
		<div styleName="BestIphone">
			<h2>Рекомендуемые товары</h2>
			<Swiper {...configs}>
				<For each="item" index="index" of={list}>
					<Link to={`/device/${item.name.split(' ').join('-')}/${item.id}`} styleName="Best" key={index}>
						<img src={this.imageUrl(item.images)} alt="imageUrl"/>
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

Recommendet.propTypes = {
	getTopIphone: PropTypes.func,
	id: PropTypes.string
}

export default Recommendet
