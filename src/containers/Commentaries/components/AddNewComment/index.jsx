import React, {Component} from 'react'
import CSSModules from 'react-css-modules'
import styles from './styles.scss'
import PropTypes from 'prop-types'

import Textarea from './Textarea'
import userIcon from 'assets/svg/User.png'

@CSSModules(styles)

class AddNewComment extends Component {
	state = {
		activeField: false,
		comment: '',
		text: '',
		emptyComment: false,
		send: false
	}
	toogleSending = () => this.setState({send: true})
	sendComment = (clearTxt) => {
		const {state: {comment, send}, props: {reload, createNewComment}} = this
		// checking: string is empty or not
		const commentStr = comment.replace(new RegExp(/^\s+/g), '')
		if (!send) {
			// checking on long string without spaces
			let goodString = comment.split(' ').reduce(
				(bool, item) => item.length > 44 ? (bool = false) : (bool = true)
				, true)
			if (commentStr !== '') {
				// creating comment
				if (goodString) {
					this.setState({comment: ''})
					createNewComment(comment).then(({status}) => {
						if (status === 201) {
							reload()
							this.setState({
								activeField: false,
								send: false,
								comment: ''
							})
							clearTxt()
						}
					})
				} else {
					// show error massage if string has many symbols without spaces
					this.setState({
						emptyComment: true,
						text: 'Вы ввели слово длиннее 300 символов',
						send: false
					})
				}
			} else {
				// show error massage if comment is empty
				this.setState({
					emptyComment: true,
					text: 'Вы не написали комментарий'
				})
			}
		}
	}
	handleChangeField = () => {
		this.setState({activeField: true})
	}
	handleWriteComment = (e) => {
		this.setState({comment: e.target.value})
	}
	render () {
		const {
			state: {emptyComment, text},
			props: {userPhoto},
			sendComment, handleWriteComment, toogleSending
		} = this
		return (
			<div styleName="AddNewComment">
				<img src={userPhoto || userIcon} alt=""/>
				<Textarea {...{handleWriteComment, sendComment, toogleSending, emptyComment, text}}/>
			</div>
		)
	}
}

AddNewComment.propTypes = {
	createNewComment: PropTypes.func,
	reload: PropTypes.func,
	bet: PropTypes.bool,
	userPhoto: PropTypes.string
}

export default AddNewComment
