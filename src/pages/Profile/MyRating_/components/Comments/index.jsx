import React from 'react'
import CSSModules from 'react-css-modules'
import PropTypes from 'prop-types'

import Comment from 'components/FunctionalityChunks/Comment'

import styles from './styles.scss'

const Comments = ({feedbacks}) =>
	<div>
		<Choose>
			<When condition={feedbacks.length}>
				<For each='feedback' index='i' of={feedbacks}>
					<Comment type='feedback' key={i} {...{item: feedback}}/>
				</For>
			</When>
			<Otherwise>
				<p>Нет отзывов</p>
			</Otherwise>
		</Choose>
	</div>

Comments.propTypes = {
	feedbacks: PropTypes.array
}

export default CSSModules(Comments, styles)
