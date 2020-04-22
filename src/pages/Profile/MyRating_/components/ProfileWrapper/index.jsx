import React from 'react'
import CSSModules from 'react-css-modules'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'

import Comments from '../Comments'

import styles from './styles.scss'

const ProfileWrapper = ({feedbacks}) =>
	<div>
		<Link to='/User-setting'>
			<button styleName="refactorButton">
						Редактировать профиль
			</button>
		</Link>
		<div styleName="commentsWrap">
			<h3>{`Отзывы (${feedbacks.length})`}</h3>
			<Comments {...{feedbacks}}/>
		</div>
	</div>

ProfileWrapper.propTypes = {
	feedbacks: PropTypes.array
}

export default CSSModules(ProfileWrapper, styles)
