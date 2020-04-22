import React from 'react'
import DescriptionsPace from 'containers/AdvertisementBox/sellFlow/descriptionPace'
import inputIMEI from 'containers/AdvertisementBox/sellFlow/inputIMEI'
import AddPhotosBlock from 'components/FunctionalityChunks/AddPhotosBlock'
import RangeConteiner from 'containers/AdvertisementBox/PriceBox'
import {
	SET_PRICE_ADVERTICMENT,
	SET_IS_BARGAIN,
	SET_DETAILS,
	SET_IS_WATTANTY,
	SET_IS_OWNER
} from 'actions/types'

export default [
	{
		id: 0,
		label: 'Вы первый владелец устройства?',
		active: true,
		selected: false,
		visible: true,
		data: [
			{
				name: 'Первый',
				label: 'Первый владелец',
				pk: 'true',
				advert: 'Владелец'
			},
			{
				name: 'Не первый',
				label: 'Не первый владелец',
				pk: 'false',
				advert: 'Владелец'
			}
		],
		reducer: SET_IS_OWNER
	},
	{
		id: 1,
		label: 'Готовы ли вы торговаться?',
		selected: false,
		active: false,
		visible: true,
		data: [
			{
				name: 'Да',
				label: 'Готов торговаться',
				pk: 'true',
				advert: 'Торг'
			},
			{
				name: 'Нет',
				label: 'Не готов торговаться',
				pk: 'false',
				advert: 'Торг'
			}
		],
		reducer: SET_IS_BARGAIN
	},
	{
		id: 2,
		label: 'Действует ли гарантия на устройство?',
		active: false,
		selected: false,
		data: [
			{
				name: 'Да',
				label: 'Действует гарантия',
				pk: 'true',
				advert: 'Гарантия'
			},
			{
				name: 'Нет',
				label: 'Не действует гарантия',
				pk: 'false',
				advert: 'Гарантия'
			}
		],
		visible: true,
		reducer: SET_IS_WATTANTY
	},
	{
		id: 3,
		label: 'Добавить фото',
		active: false,
		selected: false,
		endPoint: true,
		component: React.createElement(AddPhotosBlock),
		visible: true
	},
	{
		id: 5,
		label: 'Добавить описание',
		active: false,
		selected: false,
		component: React.createElement(DescriptionsPace),
		visible: true,
		reducer: SET_DETAILS
	},
	{
		id: 4,
		label: 'Введите IMEI',
		active: false,
		selected: false,
		component: React.createElement(inputIMEI),
		visible: true,
		reducer: null
	},
	{
		id: 6,
		label: 'Корректировка цены',
		active: false,
		selected: false,
		component: React.createElement(RangeConteiner),
		visible: true,
		reducer: SET_PRICE_ADVERTICMENT
	}
]
