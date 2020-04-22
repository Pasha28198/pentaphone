import React from 'react'

import { storiesOf } from '@storybook/react'
import statusBuyer from 'src/utills/order/BuyerConfigs.js'

import Card from '../src/components/Chunks/Card'
import CardOrder from '../src/components/Chunks/CardOrder'

storiesOf('Card', module)
	.add('CardDevice', () => (
	    <div style={{maxWidth: 700, margin: '0 auto'}}>
			<Card
				imageCard={'https://media.wired.com/photos/5b22c5c4b878a15e9ce80d92/master/pass/iphonex-TA.jpg'}
				nameCard={'Apple iPhone 8 Plus 64GB Space Gray (MQ8L2)'}
				price={'19 188'}
				textField1={'Новый'}
				textField2={'Надежный продавец'}
				currency={'грн'}
				favoriteActive={true}
				lazyImage={'https://media.wired.com/photos/5b22c5c4b878a15e9ce80d92/master/pass/iphonex-TA.jpg'}
			/>
		</div>
	))
	.add('CardOrder', () => (
	    <div style={{maxWidth: 700, margin: '0 auto'}}>
			<CardOrder
				img="https://media.wired.com/photos/5b22c5c4b878a15e9ce80d92/master/pass/iphonex-TA.jpg"
				time="15.02.2018"
				number={1235467543233}
				textFieldName="Samsung Galaxy S9+ G965F-DS 6/64GB Black (Hover)"
				textFieldDescription="Заказ с тех. проверкой и расширенной гарантией на 12 месяцев"
				check={{}}
				status={statusBuyer[201]}
			/>
		</div>
	))
