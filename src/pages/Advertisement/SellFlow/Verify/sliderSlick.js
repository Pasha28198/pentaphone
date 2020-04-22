import slide1 from 'assets/images/slide1.jpg'
import slide2 from 'assets/images/slide2.png'
import slide3 from 'assets/images/slide3.png'

export default {
	dots: false,
	infinite: true,
	autoplay: true,
	slidesToShow: 1,
	arrows: false
}

export const Content = [
	{
		img: slide1,
		text: 'Проверка устройства – уникальный  способ,  для покупателя,  удостовериться в качестве устройства а для продавца заработать больше.'
	},
	{
		img: slide2,
		text: 'Прохождение проверки позволяет участвовать в ценовых аукционах и даёт возможность мгновенной продажи.'
	},
	{
		img: slide3,
		text: 'Для прохождения проверки достаточно зайти в ближайший сервисный центр одного из наших технических партнёров.'
	}
]
