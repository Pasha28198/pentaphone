import React, {Component} from 'react'

import intialConfig from './config'
import SampleBlock from 'components/Chunks/StaticSampleBlock'

class dopInfoSelectPace extends Component {
	state = {configs: intialConfig}
	handleChoseElement = (configId) => {
		const newConf = this.state.configs
		newConf[configId].active = false
		newConf[configId].visible = false
		if (newConf[configId + 1].endPoint) {
			for (let i = ++configId; i < newConf.length; i++) {
				newConf[i].active = true
			}
			this.setState({
				configs: newConf
			})
			return ''
		}
		if (configId !== newConf[newConf.length - 1].id) {
			newConf[configId + 1].active = true
		}
		this.setState({configs: newConf})
	}
	componentWillMount () {
		let newConfig = [...this.state.configs]
		newConfig[0].visible = true
		newConfig[0].active = true
		for (let i = 1; i < newConfig.length; i++) {
			newConfig[i].visible = true
			newConfig[i].active = false
		}
	}
	render () {
		const {configs} = this.state
		return (
			<div>
				<For each="config" index='index' of={configs}>
					<SampleBlock
						key={index}
						config={config}
						data={
							typeof config.data === 'string'
								? this.props[config.data]
								: config.data
						}
						active={config.active}
						visible={config.visible}
						component={config.component}
						choseData={this.handleChoseElement}
						reducer={config.reducer}
					/>
				</For>
			</div>
		)
	}
}

export default dopInfoSelectPace
