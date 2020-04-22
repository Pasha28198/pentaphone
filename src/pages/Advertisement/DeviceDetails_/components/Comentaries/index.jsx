import React, {Component} from 'react'
import CSSModules from 'react-css-modules'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'

import CommentField from './CommentField'
import Comment from 'components/FunctionalityChunks/Comment'

import {mapStateToProps, mapActionsToProps} from './redux.js'
import styles from './styles.scss'

@connect(mapStateToProps, mapActionsToProps)
@CSSModules(styles, {allowMultiple: true})

class Comentaries extends Component {
	state = {addComment: false}
	createComment = (comment) => {
		const {
			props: {pushComment, id: item, getComments},
			state: {addComment}
		} = this
		return pushComment({comment, item})
			.then(res => {
				getComments(item)
				this.setState({addComment: !addComment})
				return true
			})
	}
	// fetch comments list
	componentWillReceiveProps ({id}) {
		const {id: oldId, getComments} = this.props
		oldId !== id && getComments(id)
	}
	render () {
		const {
			props: {commentsRedux},
			state: {addComment},
			createComment
		} = this
		return (
			<div>
				<Choose>
					<When condition={commentsRedux && commentsRedux.length}>
						<For each='item' index='index' of={commentsRedux}>
							<Comment {...{item}}/>
						</For>
					</When>
					<Otherwise>
						<div styleName="Comment-label">
							<p styleName="Comment-content">
								Комментариев пока нет. Начните обсуждение первым!
							</p>
						</div>
					</Otherwise>
				</Choose>
				<button
					styleName={'addComment'}
					onClick={() => this.setState({addComment: !addComment})}
				>
					<Choose>
						<When condition={!addComment}>
                            Оставить комментрий
						</When>
						<Otherwise>
							Скрыть
						</Otherwise>
					</Choose>
				</button>
				<CommentField
					customClass={addComment ? 'addComment' : 'addComment hidden'}
					addComment={createComment}
				/>
			</div>
		)
	}
}

Comentaries.propTypes = {
	commentsRedux: PropTypes.object,
	getComments: PropTypes.func,
	pushComment: PropTypes.func,
	id: PropTypes.string
}

export default Comentaries
