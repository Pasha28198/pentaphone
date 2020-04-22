import React, {Component} from 'react'
import CSSModules from 'react-css-modules'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import { Helmet } from 'react-helmet'

import {mapStateToProps, mapActionsToProps} from './redux.js'
import styles from './styles.scss'

@connect(mapStateToProps, mapActionsToProps)
@CSSModules(styles)

class Example extends Component {
	state = {text: null}
	componentDidMount () {
		// when page loader scroll to top
		window.scrollTo(0, 0)

		// fetch data for condef page
		this.props.getAgreements()
			.then(({data: {text}}) => this.setState({text}))
	}
	render () {
		return (
			<div styleName='confed'>
				<Helmet>
					<title>ReSell - Правила использования сервиса resell.com.ua</title>
				</Helmet>
				<If condition={this.state.text}>
					<pre>{this.state.text}</pre>
				</If>
			</div>
		)
	}
}

Example.propTypes = {
	getAgreements: PropTypes.func
}

export default Example
