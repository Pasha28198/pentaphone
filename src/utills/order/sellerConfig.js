import React from 'react'

import StatusBlock from 'src/components/Chunks/StatusBlock'
import ConfirmExist from 'src/components/ViewsItems/OrderStatus/ConfirmExist'
//
// const mainStyle = {
// 	textAlign: 'center',
// 	fontSize: '14px',
// 	color: '#5c6979'
// }

export const verifyTracking = (status) => status === 305 || status === 500 || status === 504 || status === 600 || status === 602
export const verifyConfirm = (status) => status === 303 || status === 400

export default {
	100: () => <StatusBlock></StatusBlock>,
	200: () => <StatusBlock>Ожидается оплата. </StatusBlock>,
	201: () => <StatusBlock>Покупка отменена.</StatusBlock>,
	202: () => <StatusBlock>Покупка отменена.</StatusBlock>,
	203: () => <StatusBlock></StatusBlock>,
	300: () => <StatusBlock></StatusBlock>,
	301: () => <StatusBlock>Продажа отменена</StatusBlock>,
	302: () => <StatusBlock>Продажа отменена</StatusBlock>,
	303: (confirm, cancel, kind) => <StatusBlock>Ожидается подтверждение продажи<br/> <ConfirmExist {...{cancel, confirm, kind}}/></StatusBlock>,
	304: () => <StatusBlock>Продажа сорвалась.</StatusBlock>,
	305: (ttn) => <StatusBlock>Ожидается отправка  {`${ttn ? 'ТТН№' : ''}`} {ttn}</StatusBlock>,
	400: (confirm, cancel, kind) => <StatusBlock>Ожидается подтверждение продажи<br/> <ConfirmExist {...{cancel, confirm, kind}}/></StatusBlock>,
	401: () => <StatusBlock></StatusBlock>,
	500: (trackingТumber) => <StatusBlock>Ожидается отправка {`${trackingТumber ? 'ТТН№' : ''}`}  {trackingТumber}</StatusBlock>,
	501: () => <StatusBlock></StatusBlock>,
	502: () => <StatusBlock></StatusBlock>,
	503: () => <StatusBlock>Сделка сорвалась. Вы не отправили товар. </StatusBlock>,
	504: (ttn) => <StatusBlock>Ожидается получение {`${ttn ? 'ТТН№' : ''}`} {ttn}</StatusBlock>,
	505: () => <StatusBlock></StatusBlock>,
	506: () => <StatusBlock>Сделка сорвалась. Покупатель отказался от товара.</StatusBlock>,
	507: () => <StatusBlock>Ожидается отзыв</StatusBlock>,
	508: () => <StatusBlock>Сделка сорвалась. Покупатель отказался от товара.</StatusBlock>,
	600: (trackingТumber) => <StatusBlock> Ожидается отправка Покупателю. {`${trackingТumber ? 'ТТН№' : ''}`} {trackingТumber}</StatusBlock>,
	602: (trackingNumber) => <StatusBlock>Заказ отменен. Сожалеем, но устройство не прошло проверку в сервисном центре. {`${trackingNumber ? 'ТТН№' : ''}`} {trackingNumber} на возврат </StatusBlock>,
	601: () => <StatusBlock>Ожидается проверка устройства.</StatusBlock>,
	800: () => <StatusBlock>Сделка успешно завершена</StatusBlock>,
	801: () => <StatusBlock></StatusBlock>,
	900: () => <StatusBlock>Сделка не состоялась</StatusBlock>
}
