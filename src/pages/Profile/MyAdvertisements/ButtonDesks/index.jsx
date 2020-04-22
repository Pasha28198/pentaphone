import React from 'react'
import CSSModules from 'react-css-modules'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'

import styles from './styles.scss'

const ButtonDesk = ({active, refactor, id, deactivate}) =>
	<div styleName={active ? 'buttonDesk' : 'buttonDesk single'}>
		<If condition={active}>
			<button onClick={() => deactivate(id, {status: 500})}>Деактивировать</button>
		</If>
		<Link to={`/edit-device/${id}`}>
			<button styleName="rework">
				Редактировать
			</button>
		</Link>
	</div>

ButtonDesk.propTypes = {
	active: PropTypes.bool,
	look: PropTypes.bool,
	refactor: PropTypes.bool,
	id: PropTypes.string,
	deactivate: PropTypes.func
}
ButtonDesk.defaultProps = {
	active: false,
	look: false,
	refactor: false
}

export default CSSModules(ButtonDesk, styles, {allowMultiple: true})
