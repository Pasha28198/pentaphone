import React, {Component} from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import Markdown from 'markdown-to-jsx'

import logo from 'assets/svg/logo.svg'
import config from './config'

import {mapStateToProps, mapActionsToProps} from './redux.js'
import styles from './styles.scss'

@connect(mapStateToProps, mapActionsToProps)

class Articles extends Component {
	state = {
		text: null
	}
	componentDidMount () {
		let path = window.location.pathname.split('/')
		this.props.getArticle(path[path.length - 2])
			.then(({data: {text}}) => this.setState({text}))
	}
	render () {
		const path = window.location.pathname.split('/')
		return (
			<div className={styles.wrapperAbout}>
				<div className={styles.wrapperHeader}>
					<figure>
						<img src={logo} alt=""/>
						<div>
							<h3>Resell</h3>
							<p>Эксперт в мире подержанной электроники</p>
						</div>
					</figure>
					<h1>{config[path[path.length - 2]]}</h1>
				</div>
				<If condition={this.state.text}>
					<Markdown>{this.state.text}</Markdown>
				</If>
			</div>
		)
	}
}
Articles.propTypes = {
	getArticle: PropTypes.func
}

export default Articles
