import React from 'react'

import FeedBack from 'src/components/ViewsItems/OrderStatus/FeedBack'
import StatusBlock from 'src/components/Chunks/StatusBlock'

const btn = {
	fontWeight: 300,
	position: 'absolute',
	fontSize: 14,
	color: '#4A90E2',
	bottom: 18,
	right: 20,
	cursor: 'pointer'
}

export const verifyPay = (status) => status === 200

export const verifyTracking = (status) => status === 305 || status === 500 || status === 504 || status === 600

export const verifyFeedBack = (status) => status === 507

export default {
	100: () => <div></div>,
	200: (payMoney, kind) =>
		<Choose>
			<When condition={kind === 600}>
				<StatusBlock>Ожидается отправка</StatusBlock>
			</When>
			<Otherwise>
				<StatusBlock>
					Ожидается оплата<br/>
					<span
						style={btn}
						onClick={payMoney}
					>
						Оплатить
					</span>
				</StatusBlock>
			</Otherwise>
		</Choose>,
	201: () => <StatusBlock>Покупка отменена.</StatusBlock>,
	202: () => <StatusBlock>Покупка отменена.</StatusBlock>,
	203: () => <StatusBlock></StatusBlock>,
	300: () => <StatusBlock></StatusBlock>,
	301: () => <StatusBlock>К сожалению, продажа отменена. Можем предложить вам другие варианты.</StatusBlock>,
	302: () => <StatusBlock>К сожалению, продажа отменена. Можем предложить вам другие варианты.</StatusBlock>,
	303: () => <StatusBlock>Ожидается подтверждение от продавца</StatusBlock>,
	304: () => <StatusBlock>К сожалению, продажа отменена. Можем предложить вам другие варианты.</StatusBlock>,
	305: (trackingТumber) => <StatusBlock>Ожидается отправка {`${trackingТumber ? 'ТТН№' : ''}`}  {trackingТumber}</StatusBlock>,
	400: () => <StatusBlock>Ожидается подтверждение от продавца<br/></StatusBlock>,
	401: () => <div></div>,
	500: (trackingТumber) => <StatusBlock>Ожидается отправка {`${trackingТumber ? 'ТТН№' : ''}`}  {trackingТumber}</StatusBlock>,
	501: () => <div></div>,
	502: () => <div></div>,
	503: () => <StatusBlock>Сделка сорвалась. Товар не был отправлен.</StatusBlock>,
	504: (trackingТumber) => <StatusBlock>Ожидается получение {`${trackingТumber ? 'ТТН№' : ''}`} {trackingТumber}</StatusBlock>,
	505: () => <div></div>,
	506: () => <StatusBlock>Сделка сорвалась. Вы отказались от товара.</StatusBlock>,
	507: (confirm) => <div> Оставьте отзыв<FeedBack confirm={confirm}/></div>,
	508: () => <StatusBlock>Сделка сорвалась. Вы не пришли за товаром.</StatusBlock>,
	600: (trackingТumber) => <StatusBlock>Ожидается отправка Покупателю.{`${trackingТumber ? 'ТТН№' : ''}`} {trackingТumber}</StatusBlock>,
	602: () => <StatusBlock>Заказ отменен. Сожалеем, но устройство не прошло проверку в сервисном центре.</StatusBlock>,
	601: () => <StatusBlock>Ожидается проверка устройства.</StatusBlock>,
	800: (confirm) => <StatusBlock>Сделка успешно завершена</StatusBlock>,
	801: () => <StatusBlock></StatusBlock>,
	900: () => <StatusBlock>Сделка не состоялась</StatusBlock>
}
