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
		data: sellFlow.choices && sellFlow.choices['Processor'],
		action: fetchVersions,
		label: 'Процессор'
	},
	{
		id: 3,
		name: 'versions_2',
		data: sellFlow.choices && sellFlow.choices['Ram'],
		action: fetchVersions,
		label: 'Оперативная память, ГБ'
	},
	{
		id: 4,
		name: 'versions_3',
		data: sellFlow.choices && sellFlow.choices['Storage Capacity'],
		action: fetchVersions,
		label: 'Жесткий диск, ГБ'
	},
	{
		id: 5,
		name: 'condition',
		data: conditionalConf,
		label: 'Состояние'
	},
	{
		id: 6,
		name: 'visual_condition',
		action: () => fetchAccessories('laptop'),
		data: visualConditionalConf,
		label: 'Внешнее состояние'
	},
	{
		id: 7,
		name: 'accessories',
		data: sellFlow.accessories,
		label: 'Комплект'
	}
]
