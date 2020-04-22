import {condition, visualConditional} from '../main/conditional'

let con = {
	'condition': condition,
	'visual_condition': visualConditional
}

export default function (value) {
	var newArr = Object.keys(value)
		.map(item => {
			if (item === 'condition' || item === 'visual_condition') {
				return {name: item, value: con[item][value[item]]}
			}
			if (item === 'ordering' || item === 'is_review' || item === 'verified_seller' || item === 'device_type') {
				return {}
			}
			return {name: item, value: value[item]}
		})

	return newArr
}
