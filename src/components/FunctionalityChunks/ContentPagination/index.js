import React, { Component } from 'react'
import PropTypes from 'prop-types'

class CotentPagination extends Component {
state = {
	active: false
}

setRef = (elem) => { this.pagination = elem }

scroll = (pagination) => () => {
	console.log(pagination)
}

componentDidMount () {
	const {pagination} = this
	window.addEventListener('scroll', this.scroll(pagination))
}

componentWillUnmount () {
	window.removeEventListener('scroll', this.scroll)
}

render () {
	const { children } = this.props
	const { active } = this.state

	if (!active) {
		return (<div></div>)
	}
	return (
		<div
			ref={this.setRef}
		>
			{children}
		</div>
	)
}
}

CotentPagination.propTypes = {
	children: PropTypes.node
}

export default CotentPagination
