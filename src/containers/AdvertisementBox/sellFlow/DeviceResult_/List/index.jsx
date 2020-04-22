import React from 'react'
import CSSModules from 'react-css-modules'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import { List as TransList, Transition } from 'semantic-ui-react'

import Block from '../Block'

import './styles.css'
import {mapStateToProps, mapActionsToProps} from './redux.js'
import styles from './styles.scss'

const List = ({dopInfo, setStep}) =>
	<div
		styleName="list"
	>
		<Transition.Group
			as={TransList}
			duration={300}
		>
			<If condition={dopInfo.length}>
				<For each='item' index='i' of={dopInfo}>
					<If
						condition={
							// don't render the block if previous step is condition
							// and user choose new or refurbished or not working device
							!(
								dopInfo[i - 1] &&
								dopInfo[i - 1].key === 'condition' &&
								(
									dopInfo[i - 1].pk === '100' ||
									dopInfo[i - 1].pk === '400' ||
									dopInfo[i - 1].pk === '300'
								)
							)
						}
					>
						<TransList.Item key={i}>
							<Block {...{item, index: i, setStep}} key={i} />
						</TransList.Item>
					</If>
				</For>
			</If>
		</Transition.Group>
	</div>

List.propTypes = {
	dopInfo: PropTypes.array,
	setStep: PropTypes.func
}

export default connect(
	mapStateToProps,
	mapActionsToProps
)(CSSModules(List, styles))
