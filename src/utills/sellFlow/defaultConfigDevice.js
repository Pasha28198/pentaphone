import {
	fetchModels,
	fetchAccessories,
	fetchVersions
} from 'actions'

import {
	conditionalConf,
	visualConditionalConf
} from '../main/conditional'

export default (sellFlow) => [
	{
		id: 0,
		name: 'brands',
		data: sellFlow.brands,
		action: fetchModels,
		label: 'Бренды'
	},
	{
		id: 1,
		name: 'model',
		data: sellFlow.models,
		action: fetchVersions,
		label: 'Модель'
	},
	{
		id: 2,
		name: 'versions_1',
		data: sellFlow.choices && sellFlow.choices['Color'],
		action: fetchVersions,
		label: 'Цвет'
	},
	{
		id: 3,
		name: 'versions_2',
		data: sellFlow.choices && sellFlow.choices['Storage Capacity'],
		action: fetchVersions,
		label: 'Память'
	},
	{
		id: 4,
		name: 'condition',
		data: conditionalConf,
		label: 'Состояние'
	},
	{
		id: 5,
		name: 'visual_condition',
		action: () => fetchAccessories('phone'),
		data: visualConditionalConf,
		label: 'Внешнее состояние'
	},
	{
		id: 6,
		name: 'accessories',
		data: sellFlow.accessories,
		label: 'Комплект'
	}
]
