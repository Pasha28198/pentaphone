import React, {Component} from 'react'
import PropTypes from 'prop-types'

import tabStyle from './styleTab.scss'
import Tab from 'components/FunctionalityChunks/Tab/index.js'
import DeviceItemCategory from 'src/components/Chunks/DeviceItemCategory'

class Tabs extends Component {
	render () {
		const { topModels } = this.props
		const panels = [
			{
				name: 'Apple',
				render: () => (
					<div className={tabStyle.wrapperT}>
						<div className={tabStyle.PanelTitle}>
							<h2>Топ новых Apple</h2>
							<a href="/buy/phone?brand=apple">Ещё</a>
						</div>
						<div className={tabStyle.WrapperPanels}>
							<If condition={Object.keys(topModels).length}>
								<For each='item' index='index' of={ topModels.Apple }>
									<DeviceItemCategory
										key={index}
										id={item.id}
										img={item.images[0] && item.images[0].image.medium}
										lazyImage={item.images[0] && item.images[0].image.medium}
										title={item.name}
										price={item.price}
										ind={index}
									/>
								</For>
							</If>
						</div>
					</div>

				)
			},
			{
				name: 'Samsung',
				render: () => (
					<div className={tabStyle.wrapperT}>
						<div className={tabStyle.PanelTitle}>
							<h2>Топ новых Samsung</h2>
							<a href="/buy/phone?brand=samsung">Ещё</a>
						</div>
						<div className={tabStyle.WrapperPanels}>
							<If condition={Object.keys(topModels).length}>
								<For each='item' index='index' of={ topModels.Samsung }>
									<DeviceItemCategory
										key={index}
										id={item.id}
										img={item.images[0] && item.images[0].image.medium}
										title={item.name}
										price={item.price}
										ind={index}
										lazyImage={item.images[0] && item.images[0].image.medium}
									/>
								</For>
							</If>
						</div>
					</div>

				)
			},
			{
				name: 'Xiaomi',
				render: () => (
					<div className={tabStyle.wrapperT}>
						<div className={tabStyle.PanelTitle}>
							<h2>Топ новых Xiaomi</h2>
							<a href="/buy/phone?brand=xiaomi">Ещё</a>
						</div>
						<div className={tabStyle.WrapperPanels}>
							<If condition={Object.keys(topModels).length}>
								<For each='item' index='index' of={ topModels.Xiaomi }>
									<DeviceItemCategory
										key={index}
										id={item.id}
										img={item.images[0] && item.images[0].image.medium}
										lazyImage={item.images[0] && item.images[0].image.lazy}
										title={item.name}
										price={item.price}
										ind={index}
									/>
								</For>
							</If>
						</div>
					</div>

				)
			},
			{
				name: 'Другие',
				render: () => (
					<div className={tabStyle.wrapperT}>
						<div className={tabStyle.PanelTitle}>
							<h2>Топ новых</h2>
							<a href="/buy/phone">Ещё</a>
						</div>
						<div className={tabStyle.WrapperPanels}>
							<If condition={Object.keys(topModels).length}>
								<For each='item' index='index' of={ topModels.Others }>
									<DeviceItemCategory
										key={index}
										id={item.id}
										img={item.images[0] && item.images[0].image.medium}
										lazyImage={item.images[0] && item.images[0].image.lazy}
										title={item.name}
										price={item.price}
										ind={index}
									/>
								</For>
							</If>
						</div>
					</div>
				)
			}
		]
		return (
			<Tab
				data={panels}
			/>
		)
	}
}

Tabs.propTypes = {
	topModels: PropTypes.object
}

export default Tabs
