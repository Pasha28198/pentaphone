import React, {Component} from 'react'
import CSSModules from 'react-css-modules'
import PropTypes from 'prop-types'

import styles from './styles.scss'

@CSSModules(styles)

class Tab extends Component {
	state = { activeIndex: 0 }
	changeTab = (i) => { this.setState({activeIndex: i}) }
	render () {
		const {data} = this.props
		const { activeIndex } = this.state
		return (
			<div styleName="Tab">
				<div styleName="Tab-items">
					<For
						each='item'
						index='index'
						of={data}
					>
						<span
							key={index}
							styleName={
								activeIndex === index
									? 'Tab-item--active'
									: 'Tab-item'
							}
							onClick={() => { this.changeTab(index) }}
						>{item.name}</span>
					</For>
				</div>
				<div styleName="Tab-chose">
					{data[activeIndex].render()}
				</div>
			</div>
		)
	}
}

Tab.propTypes = {
	data: PropTypes.array
}

export default Tab
