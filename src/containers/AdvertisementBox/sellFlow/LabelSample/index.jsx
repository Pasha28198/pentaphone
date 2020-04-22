import React, {Component} from 'react'
import CSSModules from 'react-css-modules'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'

import search from 'assets/icons/search.svg'

import {mapStateToProps, mapActionsToProps} from './redux.js'
import styles from './styles.scss'

@connect(mapStateToProps, mapActionsToProps)
@CSSModules(styles, {allowMultiple: true})

class Example extends Component {
	state={visible: false}

	// validation on first space
	onKeyPress = e => ((e.keyCode || e.which) === 32 && !e.target.value) && e.preventDefault()

	render () {
		const {
			props: {item, step, onChange, self},
			state: {visible}, onKeyPress
		} = this
		return (
			<div styleName="labelSample">
				<span>
					{item.label}
				</span>
				<If condition={step === 'brands' || step === 'model'}>
					<div styleName={visible ? 'complexInput active' : 'complexInput' }>
						<input
							ref={inp => (self.inp = inp)}
							onChange={onChange}
							onKeyPress={onKeyPress}
							type="text"
							placeholder="Поиск по названию значения"
						/>
						<button
							styleName="close"
							onClick={() => { this.setState({visible: false}) }}
						/>
						<button
							styleName="search"
							onClick={() => {
								self.inp.focus()
								this.setState({visible: true})
							}}
						>
							<img src={search} alt=""/>
						</button>
					</div>
				</If>
			</div>
		)
	}
}

Example.propTypes = {
	item: PropTypes.object,
	step: PropTypes.string,
	onChange: PropTypes.func,
	self: PropTypes.object
}

export default Example
