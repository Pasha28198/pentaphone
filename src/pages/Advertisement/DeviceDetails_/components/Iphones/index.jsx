import React, {Component} from 'react'
import CSSModules from 'react-css-modules'
import {connect} from 'react-redux'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import Swiper from 'react-id-swiper'
import Numeral from 'numeral'

import configs from './configs'

import {mapStateToProps, mapActionsToProps} from './redux.js'
import styles from './styles.scss'

@connect(mapStateToProps, mapActionsToProps)
@CSSModules(styles)

class Iphones extends Component {
state = {
	list: []
}
componentDidMount () {
	this.props.getTopIphone().then(res => {
		this.setState({
			list: res.data.results
		})
	})
}

imageUrl = img => img[0] && img[0].image.medium

render () {
	const { list } = this.state
	if (!list.length) {
		return (<div></div>)
	}
	return (
		<div styleName="BestIphone">
			<h2>iPhone</h2>
			<p>В хорошем состоянии</p>
			<Swiper
				ref={node => { (node) && (this.swiper = node.swiper) }}
				{...configs}
			>
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

Iphones.propTypes = {
	getTopIphone: PropTypes.func
}

export default Iphones
