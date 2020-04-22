import React, {Component} from 'react'
import CSSModules from 'react-css-modules'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import { TextArea } from 'semantic-ui-react'

import styles from './styles.scss'
import {mapStateToProps, mapActionsToProps} from './redux.js'

@connect(mapStateToProps, mapActionsToProps)
@CSSModules(styles)

class descriptionPace extends Component {
	render () {
		return (
			<div styleName="wrapperTextAreaPace">
				<p>Описание</p>
				<TextArea
					onChange={ e => this.props.setDetails(e.target.value) }
					placeholder='Расскажите больше о своем смартфоне. Это позволит быстрее его продать'
					styleName="textAreaPace"
					maxLength="3000"
				/>
			</div>
		)
	}
}

descriptionPace.propTypes = {
	setDetails: PropTypes.func
}

export default descriptionPace
