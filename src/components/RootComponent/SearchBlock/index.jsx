import React, {Component} from 'react'
import CSSModules from 'react-css-modules'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'

import arrowBack from 'assets/icons/arrowBack.svg'
import close from 'src/assets/Close.svg'
import search from 'src/assets/search.svg'
import iconArrow from 'src/assets/images/iconArrow.svg'

import {mapStateToProps, mapActionsToProps} from './redux.js'
import styles from './styles.scss'

@connect(mapStateToProps, mapActionsToProps)
@CSSModules(styles, {allowMultiple: true})

class SearchBlock extends Component {
	state = { value: '', items: [], dropDown: false }

	setEvent = (e) => { (e.keyCode === 13) && this.onClick() }

	clearValue = () => {
		if (!this.state.value) {
			return this.props.closeSearch()
		}
		this.setState({ value: '', items: [] })
	}

	setNewValue = ({target: {value}}) => {
		this.setState({ value })

		if (value.length >= 3) {
			this.props.getItems(value)
				.then(items => this.setState({items, dropDown: true}))
		} else this.setState({items: []})
	}
	onClick = () => {
		const {
			props: {setFilterNew, redirectToCatalog},
			state: {value}
		} = this
		const type = window.location.pathname.split('/')[2]
		setFilterNew('search', value)
		redirectToCatalog(value, type || 'phone')
	}

	shouldComponentUpdate (next) {
		if (next.value !== this.props.value) {
			this.setState({
				value: next.value
			})
		}
		return true
	}

	componentDidMount () {
		this.setState({value: this.props.value})
		this.inp.addEventListener('keypress', this.setEvent)

		document.body.onclick = e => {
			const {value} = this.state

			if (e.target.id !== 'inp') {
				this.inp.value = ''
				this.setState({dropDown: false, items: []})
			}
		}
	}
	componentWillUnmount () { document.body.onclick = () => null }

	render () {
		const { value, items, dropDown } = this.state
		const { closeSearch, redirectToCatalog } = this.props
		const type = window.location.pathname.split('/')[2]
		return (
			<div styleName="SearchInput">
				<img
					onClick={closeSearch}
					styleName="SearchInput-back"
					src={arrowBack}
					alt="arrow"
				/>
				<input
					ref={inp => (this.inp = inp)}
					onChange={this.setNewValue}
					onClick={() => dropDown && this.setState({dropDown: false})}
					value={value}
					styleName="SearchInput-input"
					type="text"
					id='inp'
					autoComplete="off"
				/>
				<div styleName="SearchInput-button">
					<img
						src={search}
						alt="search"
						onClick={this.onClick}
					/>
				</div>
				<img
					onClick={this.clearValue}
					styleName="SearchInput-close"
					src={close}
					alt="close"
				/>
				<div styleName={dropDown && items.length ? 'dropPart active' : 'dropPart'}>
					<For each='item' of={items}>
						<Link
							to={`/buy/${type || 'phone'}?device=${item.text.toLowerCase().split(' ').join('-')}`}
							styleName='div'
						>
							{item.text}
							<img src={iconArrow} alt=""/>
						</Link>
					</For>
				</div>
			</div>
		)
	}
}

SearchBlock.propTypes = {
	value: PropTypes.string,
	closeSearch: PropTypes.func,
	setFilterNew: PropTypes.func,
	redirectToCatalog: PropTypes.func,
	getItems: PropTypes.func
}

export default SearchBlock
