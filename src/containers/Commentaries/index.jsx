import React, {Component} from 'react'
import CSSModules from 'react-css-modules'
import styles from './styles.scss'
import {connect} from 'react-redux'
import {mapStateToProps, mapActionsToProps} from './redux.js'
import PropTypes from 'prop-types'

import ItemComent from './components/ItemComent'
import AddNewComment from 'containers/Commentaries/components/AddNewComment'
import smile from 'assets/svg/sadSmile.svg'

@connect(mapStateToProps, mapActionsToProps)
@CSSModules(styles, {allowMultiple: true})

class Commentaries extends Component {
	addComment = (comment) => {
		const {pushComment, id: item} = this.props

		// add new comment
		return pushComment({ comment, item })
	}

	componentWillReceiveProps ({ id }) {
		const {id: prevId, getComments} = this.props

		// fetch comments if id not empty
		if (prevId !== id) {
			getComments(id)
		}
	}

	componentDidMount () {
		const arrPathes = window.location.pathname.split('/')
		const path = arrPathes[1]
		const idUrl = arrPathes[3]
		const {id} = this.props

		// reload comments when user comes back from another page to device card
		// and allow reload if user enters to second device card
		if (path === 'device' && id === idUrl) {
			this.props.clearComents()
			this.props.getComments(id)
		}
	}

	// when close component clean all old comments
	componentWillUnmount () {
		this.props.clearComents()
	}

	render () {
		const {
			commentsRedux, id,
			type, userImage,
			commentsProps
		} = this.props
		// finds  comments in props or in react-redux
		let titleBlock = type === 'feedback' ? 'Отзывы' : 'Комментарии'
		let comments = (commentsProps && commentsProps.length) ? commentsProps : commentsRedux

		return (
			<div styleName={type === 'details' ? 'Commentaries details' : 'Commentaries'}>
				<div styleName="headerComment">
					<h1>{`${titleBlock} (${comments.length})`}</h1>
				</div>

				<div styleName="wrapCont">

					<For each='data' index='key' of={comments}>
						<ItemComent {...{data, type}} key={key}/>
					</For>

					<If condition={!comments.length}>
						<div styleName='noneComments'>
							<img src={smile} alt="no comments"/>
							У продавца нет ни одного отзыва
						</div>
					</If>

				</div>

				<If condition={type !== 'feedback'}>
					<AddNewComment
						userPhoto={userImage}
						createNewComment={this.addComment}
						reload={() => { this.props.getComments(id) }}
					/>
				</If>

			</div>
		)
	}
}

Commentaries.propTypes = {
	id: PropTypes.string,
	getComments: PropTypes.func,
	pushComment: PropTypes.func,
	clearComents: PropTypes.func,
	commentsRedux: PropTypes.array,
	bargainComments: PropTypes.array,
	type: PropTypes.string,
	userImage: PropTypes.string,
	commentsProps: PropTypes.array
}

Commentaries.defaultValue = {
	bet: false,
	type: 'bargain',
	commentsProps: []
}

export default Commentaries
