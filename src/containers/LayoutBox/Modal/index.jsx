import React, {Component} from 'react'
import PropTypes from 'prop-types'
import ReactDOM from 'react-dom'

import './styles.css'

class ModalWindow extends Component {
	componentWillMount () {
		this.root = document.createElement('div')
		this.root.style.position = 'relative'
		document.body.appendChild(this.root)
	}
	componentWillUnmount () {
		document.body.removeChild(this.root)
	}
	render () {
		const {type, onClick, status, children} = this.props
		const modalClass = type === 'deviceDetails'
			? 'modalWindow_dec black_dec'
			: type === 'filter'
				? 'modalWindow_dec filter_dec'
				: 'modalWindow_dec'
		return ReactDOM.createPortal(
			<div className={
				!status
					? modalClass
					: modalClass + ' open_dec'}>
				<If condition={type !== 'filter'}>
					<div onClick={onClick} className='onClick_dec'></div>
				</If>
				{children}
			</div>,
			this.root
		)
	}
}
ModalWindow.propTypes = {
	onClick: PropTypes.func,
	children: PropTypes.any,
	status: PropTypes.bool,
	type: PropTypes.string
}
ModalWindow.defaultValues = {
	type: 'any'
}

export default ModalWindow
