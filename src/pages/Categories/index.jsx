import React, {Component} from 'react'
import CSSModules from 'react-css-modules'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'

import Category from './components/Category'
import Spinner from 'components/Chunks/Spinner'

import styles from './styles.scss'
import {mapStateToProps, mapActionToProps} from './redux'

@connect(mapStateToProps, mapActionToProps)
@CSSModules(styles)

class Categories extends Component {
	state = {
		page: '/',
		categories: []
	}
	componentWillMount () {
		this.props.getCategories().then(res => { this.setState({ categories: res }) })
		const {match} = this.props.parentProps
		this.setState({page: match.path.split('/')[1]})
	}
	render () {
		const {
			props: {titleHelmet},
			state: {page, categories}
		} = this

		return (
			<div styleName="wrap_wrap">
				<Helmet>
					<title>
						{titleHelmet}
					</title>
					<link rel="canonical" href={`https://resell.com.ua/${page}/categories`} />
				</Helmet>
				<div styleName="wrapperCategories">
					<Choose>
						<When condition={categories.length > 0}>
							<For each='item' index='i' of={categories}>
								<Category {...{page, data: item}} key={i}/>
							</For>
						</When>
						<Otherwise>
							<Spinner/>
						</Otherwise>
					</Choose>
				</div>
			</div>
		)
	}
}

Categories.propTypes = {
	getCategories: PropTypes.func,
	categories: PropTypes.array,
	setCategory: PropTypes.func,
	match: PropTypes.object,
	titleHelmet: PropTypes.string,
	parentProps: PropTypes.object
}

export default Categories
