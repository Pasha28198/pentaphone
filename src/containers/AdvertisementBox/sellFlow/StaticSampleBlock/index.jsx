import React from 'react'
import CSSModules from 'react-css-modules'
import PropTypes from 'prop-types'
import { PropagateLoader } from 'react-spinners'

import styles from './styles.scss'

const StaticSampleBlock = ({data, onClick}) => {
	return (
		<div styleName="sampleWrapper">
			<Choose>
				<When condition={data && data.length}>
					<For each='item' index='index' of={data}>
						<div
							key={index}
							onClick={() => onClick(item)}
							styleName="sampleItem"
						>
							{item.name}
						</div>
					</For>
				</When>
				<Otherwise>
					<div styleName="spinnerWrapper">
						<PropagateLoader color={'#fa2a00'} loading={true}/>
					</div>
				</Otherwise>
			</Choose>
		</div>
	)
}

StaticSampleBlock.propTypes = {
	data: PropTypes.array,
	onClick: PropTypes.func
}

export default CSSModules(StaticSampleBlock, styles)
