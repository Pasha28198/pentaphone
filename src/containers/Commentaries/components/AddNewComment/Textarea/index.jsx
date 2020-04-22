import React, {Component} from 'react'
import CSSModules from 'react-css-modules'
import styles from './styles.scss'
import PropTypes from 'prop-types'

@CSSModules(styles)

class Example extends Component {
	clearTxt = () => {
		this.txt.value = ''
	}
	send = () => {
		// sending comment to parent element and clear textarea field
		this.props.toogleSending()
		this.props.sendComment(this.clearTxt)
	}
	componentDidMount () {
		// possibility to send massage with 'Enter' key
		this.txt.addEventListener('keypress', e => {
			e.keyCode === 13 && this.props.sendComment(this.clearTxt)
		})
	}
	render () {
		const {handleWriteComment, emptyComment, text} = this.props
		return (
			<div styleName="AddNewComment-add">
				<textarea
					ref={txt => (this.txt = txt)}
					styleName="AddNewComment-text"
					onChange={handleWriteComment}
					placeholder="Оставьте свой комментарий…"
				/>
				<If condition={emptyComment}>
					<p styleName="emptyField">{text}</p>
				</If>
				<button
					styleName="AddNewComment-btn"
					onClick={this.send}
				>
					Оставить комментарий
				</button>
			</div>
		)
	}
}

Example.propTypes = {
	handleWriteComment: PropTypes.func,
	sendComment: PropTypes.func,
	emptyComment: PropTypes.bool,
	text: PropTypes.string,
	toogleSending: PropTypes.func
}

export default Example
