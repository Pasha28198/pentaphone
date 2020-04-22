import React, {Component} from 'react'
import CSSModules from 'react-css-modules'
import {connect} from 'react-redux'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import PropTypes from 'prop-types'

import Search from 'src/assets/images/Path.png'
import BannerSlider from './components/BannerSlider'
import FastMenu from './components/FastMenu'
import TopDevice from './components/TopDevice'
import NewsSlider from './components/NewsSlider'
import SearchBlock from 'src/components/RootComponent/SearchBlock'
import Tabs from './components/Tabs'
import RecentlyAdded from './components/RecentlyAdded'
import addNew from 'src/assets/Group 2.svg'
import Banner3 from 'src/assets/banners/Banner_3.jpg'

import {mapStateToProps, mapActionsToProps} from './redux.js'
import styles from './styles.scss'

@connect(mapStateToProps, mapActionsToProps)
@CSSModules(styles, {allowMultiple: true})

class HomePage_ extends Component {
	state = {

		// for fetch top models localy
		topModels: {},

		// toombler for menu. work only on mobile and tablet
		activeSearch: false,

		// for visible button redirect to sell/1 (sell flow)
		activeSellFastBtn: false
	}

	// show search payce
	openSearch = () => { this.setState({activeSearch: true}) }

	// close search payce
	closeSearch = () => { this.setState({activeSearch: false}) }

	componentDidMount () {
		const {getTopElement} = this.props

		// fetch top element
		getTopElement()
			.then(({data}) => {
				this.setState({topModels: data})
			})

		// when page loader scroll to top
		window.scrollTo(0, 0)

		// functional for sell button
		window.onscroll = (e) => {
			if (window.pageYOffset <= 500) {
				this.setState({
					activeSellFastBtn: false
				})
			} else {
				this.setState({
					activeSellFastBtn: true
				})
			}
		}
	}

	render () {
		const {
			topModels, activeSearch,
			activeSellFastBtn
		} = this.state
		const {
			titleHelmet
		} = this.props

		return (
			<div
				styleName="HomePageWrapper"
			>
				<Helmet>
					<title>{titleHelmet}</title>
				</Helmet>
				<img
					onClick={this.openSearch}
					styleName="search"
					src={Search}
					alt="search"
				/>
				<div styleName={activeSearch ? 'Search activeSearch' : 'Search'}>
					<SearchBlock
						closeSearch={this.closeSearch}
					/>
				</div>
				<BannerSlider/>
				<FastMenu/>
				<If condition={Object.keys(topModels).length}>
					<TopDevice
						data={
							[
								...topModels.Apple,
								...topModels.Samsung,
								...topModels.Others
							]
						}
					/>
				</If>
				<If condition={Object.keys(topModels).length}>
					<Tabs
						topModels={topModels}
					/>
				</If>
				<NewsSlider/>
				<img
					styleName="RecentlyAdded-items-image"
					src={Banner3}
					alt="banner"
				/>
				<RecentlyAdded/>
				<Link to="sell/categories">
					<img
						styleName="fastSellBtn"
						style={{
							opacity: `${activeSellFastBtn ? '1' : '0'}`,
							bottom: `${activeSellFastBtn ? '15px' : '30px'}`
						}}
						src={addNew}
						alt="add new item"
					/>
				</Link>
			</div>
		)
	}
}

HomePage_.propTypes = {
	getTopElement: PropTypes.func,
	titleHelmet: PropTypes.string
}

export default HomePage_
