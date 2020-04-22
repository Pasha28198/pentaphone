import verifyImg from 'assets/icons/quality.svg'
import stars from 'assets/rating/star.svg'

export default [
	{
		condition: (condition, verifiedSeller, verify) => verify,
		info: {
			img: verifyImg,
			label: 'Доступна проверка телефона',
			description: 'Исправность устройства подтвердят специалисты.'
		}
	},
	{
		condition: (condition) => condition === 202,
		info: {
			img: verifyImg,
			label: 'Б/У в хорошем состоянии',
			description: 'Есть несколько мелких царапин, незначительные потертости на боковинах или задней панели.'
		}
	},
	{
		condition: (condition) => condition === 400,
		info: {
			img: verifyImg,
			label: 'Как новый (refurbished)',
			description: 'Телефон, восстановленный производителем (CPO), оператором мобильной связи или продавцом телефонов. Может быть активирован.'
		}
	},
	{
		condition: (condition) => condition === 203,
		info: {
			img: verifyImg,
			label: 'Б/У в среднем состоянии',
			description: 'Состояние телефона среднее. Есть небольшое количество поверхностных царапин. Заметные потертости, легко различимые мелкие сколы и вмятины, небольшие повреждения краски корпуса.'
		}
	},
	{
		condition: (condition) => condition === 201,
		info: {
			img: verifyImg,
			label: 'Б/У в идеальном состоянии',
			description: 'Идеальное состояние, нет следов эксплуатации. Полностью отсутствуют царапины и потертости. Нет трещин на экране'
		}
	},
	{
		condition: (condition) => (condition === 100),
		info: {
			img: stars,
			label: 'Новый',
			description: 'Идеальное состояние, нет следов эксплуатации. Полностью отсутствуют царапины и потертости.'
		}
	},
	{
		condition: (condition, verifiedSeller) => (verifiedSeller),
		info: {
			img: verifyImg,
			label: '100% рабочий',
			description: 'Проверен специалистами ReSell'
		}
	}
]
