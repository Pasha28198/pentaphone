import React, {Component} from 'react'
import PropTypes from 'prop-types'

import NoData from 'src/components/RootComponent/NoData'

import Loader from 'src/components/ViewsItems/LoaderCatalog'

class InfinityPagination extends Component {
	state ={
		visibleLoader: false,
		page: 2,
		noData: false
	}

	scroll = (e) => {
		const {
			state: {page, visibleLoader}, pagination,
			props: {element, pagesCount, nextData}
		} = this

		let bool
		if (element === window) {
			let windowBottonSideY = window.pageYOffset + window.innerHeight
			let paginationBottonSideY = pagination.offsetHeight + pagination.offsetTop
			bool = windowBottonSideY >= paginationBottonSideY
		} else bool = (element.scrollTop + element.clientHeight) >= element.scrollHeight

		if (bool && page <= pagesCount && !visibleLoader) {
			nextData(page)
			this.setState(
				({page}) => ({
					page: ++page,
					visibleLoader: true
				}))
		}
	}

	componentWillReceiveProps (nextProps) {
		if (nextProps.children.length && nextProps.children.length !== this.props.children.length) {
			this.setState({
				visibleLoader: false
			})
		}
		// it's work when data change
		if (nextProps.children.length < this.props.children.length) {
			this.setState({
				page: 2,
				visibleLoader: false
			})
		}

		if (!nextProps.children.length && nextProps.children.length <= this.props.children.length) {
			this.setState({
				noData: this.state.visibleLoader
			})
		}

		if (nextProps.children.length > this.props.children.length) {
			this.setState({
				noData: false
			})
		}
	}

	componentDidMount () {
		this.props.element.addEventListener('scroll', this.scroll)
	}

	componentWillUnmount () {
		this.props.element.removeEventListener('scroll', this.scroll)
	}

	render () {
		const {
			props: { children, loader },
			state: { visibleLoader, noData }
		} = this
		if (noData) {
			return (
				<div ref={ element => { this.pagination = element } }>
					<NoData/>
				</div>
			)
		}
		return (
			<div ref={ element => { this.pagination = element } }>
				{ children }
				{ visibleLoader ? loader || <Loader/> : '' }
			</div>
		)
	}
}

InfinityPagination.defaultProps = {
	element: window
}
InfinityPagination.propTypes = {
	element: PropTypes.oneOfType([
		PropTypes.object,
		PropTypes.node
	]).isRequired,
	pagesCount: PropTypes.number.isRequired,
	nextData: PropTypes.func.isRequired,
	loader: PropTypes.element,
	children: PropTypes.oneOfType([
		PropTypes.arrayOf(PropTypes.node),
		PropTypes.node
	]).isRequired
}

export default InfinityPagination
