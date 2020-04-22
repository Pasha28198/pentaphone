import React, {Component} from 'react'
import CSSModules from 'react-css-modules'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import Swiper from 'react-id-swiper'

import settings from './settings'
import {parseDate} from 'src/utills/dateParser'

import styles from './styles.scss'
import {mapStateToProps, mapActionsToProps} from './redux.js'

@connect(mapStateToProps, mapActionsToProps)
@CSSModules(styles, {allowMultiple: true})

class SideNewsBar extends Component {
	// the value of artId is a static id.
	// article with this id always must be in article list
	state={
		artId: '5b90c2720de23a00018ad1c8',
		articles: []
	}
	componentDidMount () {
		// fetching JSON with article information
		this.props.fetchArticles()
		// @ param {posts} - array of articles
			.then(({posts}) => {
				const {artId} = this.state

				// find static article
				const staticArticle = posts.find(item => (item.id === artId) && item)
				// choose count of articles depends on existing of static article
				const COUNT_OF_ARTICLES = staticArticle ? 3 : 4

				// sort 3 articles which don't match with static article and have property - featured: true
				// or 4 articles if static article doesn't exist
				const articles = posts.reduce(
					(arr, item) =>
						(
							arr.length < COUNT_OF_ARTICLES &&
							item.featured &&
							artId !== item.id &&
							arr.push(item) &&
							arr
						) || arr
					, []
				)

				// add static article to sorted array depends on existing static article
				// static article always must be on 3rd place
				staticArticle && articles.splice(-1, 0, staticArticle)

				// change state with new sorted articles
				this.setState({articles})
			})
	}

	render () {
		const domain = 'https://resell.com.ua'
		const {articles} = this.state
		return (
			<div styleName="newsSliderWrapper">
				<div styleName="newsSliderWrapper-title">
					<h2>Статьи</h2>
					<a
						href="https://resell.com.ua/blog/"
						target='_blank'
						rel='noopener noreferrer'
					>
						Ещё
					</a>
				</div>
				<If condition={articles.length}>
					<Swiper {...settings} >
						<For
							each='item'

							index='index'
							of={articles}
						>
							<If condition={item}>
								<div styleName='newsItemWrapper' key={index}>
									<a
										href={`${domain}/blog/${item.url}`}
										className={styles.newsItem}
									>
										<div>
											<img src={`${domain}${item['feature_image']}`} alt=""/>
										</div>
										<span>{parseDate(item['published_at'])}</span>
										<h3>{item.title}</h3>
										<p>{item['meta_description']}</p>
									</a>
								</div>
							</If>
						</For>
					</Swiper>
				</If>
			</div>

		)
	}
}
SideNewsBar.propTypes = {
	fetchArticles: PropTypes.func
}
export default SideNewsBar
