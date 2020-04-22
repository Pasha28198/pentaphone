import React, {Component} from 'react'
import CSSModules from 'react-css-modules'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'

import DeviceItemCategory from 'src/components/Chunks/DeviceItemCategory'
import configs from 'src/utills/configs/bannerConfig.js'
import Banner1 from 'src/assets/banners/Banner_1.jpg'
import Banner2 from 'src/assets/banners/Banner_2.jpg'
import Banner3 from 'src/assets/banners/Banner_3.jpg'

import {mapStateToProps, mapActionsToProps} from './redux.js'
import styles from './styles.scss'

@connect(mapStateToProps, mapActionsToProps)
@CSSModules(styles)

class RecentlyAdded extends Component {
state = {data: []}
componentDidMount () {
	this.props.getRecent().then(res => {
		this.setState({data: res.data.results})
	})
}
render () {
	const config = [Banner1, Banner2, Banner1, Banner3]
	const linksConfig = ['/sell', '', '/buy/categories', '/buy/categories']
	const { data } = this.state
	return (
		<div styleName="RecentlyAdded">
			<h2>Недавно добавленные</h2>
			<div styleName="RecentlyAdded-items">
				<For each='item' index='index' of={ data }>
					<If condition={index === 16}>
						<a target='_blank' href={window.location.origin + '/landing/sell-pro/'}>
							<img
								styleName="RecentlyAdded-items-image"
								src={configs[index / 8 - 1].img}
								alt="banner"
							/>
						</a>
					</If>
					<If condition={index === 8 || index === 24}>
						<Link to={configs[index / 8 - 1].url}>
							<img
								styleName="RecentlyAdded-items-image"
								src={configs[index / 8 - 1].img}
								alt="banner"
							/>
						</Link>
					</If>
					<DeviceItemCategory
						img={item.images[0] && item.images[0].image.medium}
						id={item.id}
						title={item.name}
						price={item.price}
						ind={index}
					/>
				</For>
				<Link to={linksConfig[3]}>
					<img
						styleName="RecentlyAdded-items-image"
						src={config[3]}
						alt="banner"
					/>
				</Link>
			</div>
		</div>
	)
}
}

RecentlyAdded.propTypes = {
	getRecent: PropTypes.func
}

export default RecentlyAdded
