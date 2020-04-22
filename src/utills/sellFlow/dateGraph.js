import moment from 'moment'
import 'moment/locale/ru'
export default function (data) {
	moment.locale('ru')
	const arr = Object
		.keys(data)
		.map(item =>
			({
				item,
				name: moment.unix(item).format('MMMM'),
				value: parseInt(data[item])
			})
		)
		.sort((a, b) => a.item - b.item)
	const {length} = arr
	arr[length - 2].valueArea = arr[0].value
	arr[length - 2].lineValue = arr[length - 2].value
	arr[length - 1].valueArea = arr[0].value
	arr[length - 1].lineValue = arr[length - 2].value
	delete arr[length - 1].value
	arr.map((item) => delete item.item)
	return arr
}
