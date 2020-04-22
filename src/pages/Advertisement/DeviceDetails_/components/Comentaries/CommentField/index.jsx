import React, {Component} from 'react'
import CSSModules from 'react-css-modules'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'

import {mapStateToProps, mapActionsToProps} from './redux.js'
import styles from './styles.scss'

@connect(mapStateToProps, mapActionsToProps)
@CSSModules(styles, {allowMultiple: true})

class CommentField extends Component {
	state = {
		comment: '',
		error: {
			status: false,
			text: null
		}
	}
	addComment = () => {
		const {
			state: {comment},
			props: {addComment}
		} = this
		const empty = comment.split(' ').join('')

		if (!empty) this.setError(true, 'Вы не ввели комментарий')
		else {
			addComment(comment)
				.then(() => {
					this.setError(false, null)
					this.txt.value = ''
				})
				.catch(({response: {data: {comment}}}) =>
					this.setError(true, comment[0])
				)
		}
	}
	setError = (status, text) => this.setState({error: {status, text}})
	render () {
		const {
			props: {customClass},
			state: {error: {status, text}},
			addComment
		} = this
		return (
			<div styleName={customClass}>
				<textarea
					ref = {txt => (this.txt = txt)}
					onChange={() => this.setState({comment: this.txt.value})}
					placeholder='Оставьте свой комментарий'
				>
				</textarea>
				<If condition={status}>
					<span styleName="error">{text}</span>
				</If>

				<button onClick={addComment}>
					Оставить комментарий
				</button>
			</div>
		)
	}
}

CommentField.propTypes = {
	customClass: PropTypes.string,
	addComment: PropTypes.func
}

export default CommentField
