import Timer from './timer'
import React from 'react'

import amazfit1 from '../../assets/itemIcons/amazfitN1.png'
import amazfit2 from '../../assets/itemIcons/amazfitN2.png'
import macbook1 from '../../assets/itemIcons/mcbookN1.png'
import macbook2 from '../../assets/itemIcons/mcbookN2.png'
import macbookMedium1 from '../../assets/itemIcons/mcbookMedium.png'
import macbookMedium2 from '../../assets/itemIcons/macbookMedium2.png'
import headphones1 from '../../assets/itemIcons/H4_CharcoalGreyN1.png'
import headphones2 from '../../assets/itemIcons/H4_CharcoalGreyN2.png'
import headphonesLarge from '../../assets/itemIcons/H4_CharcoalGreyLarge.png'
import iphone1 from '../../assets/itemIcons/iphoneN1.png'
import iphone2 from '../../assets/itemIcons/iphoneN2.png'
import iphoneLarge from '../../assets/itemIcons/iphoneLarge.png'
import mi71 from '../../assets/itemIcons/mi7N1.jpg'
import mi72 from '../../assets/itemIcons/mi7N2.jpg'
import whiteWatch from '../../assets/itemIcons/white-watchN1.png'
import whiteWatch2 from '../../assets/itemIcons/white-watchN2.png'
import qled1 from '../../assets/itemIcons/qledtvN1.jpg'
import qled2 from '../../assets/itemIcons/qledtvN2.png'
import ps4 from '../../assets/itemIcons/playstationN1.jpg'
import joystick from '../../assets/itemIcons/joystickN2.png'

export const itemList = [
	{name: 'AA Laptop Air',
		brend: 'Asus',
		prise: 849,
		img: [
			`${macbook1}`,
			`${macbook2}`,
			`${macbookMedium1}`,
			`${macbookMedium2}`
		],
		timer: <Timer/>,
		sale: 5,
		outOf: '' },
	{name: 'AA Smartphone XS',
		brend: 'Apple',
		prise: 1100,
		img: [
			`${iphone1}`,
			`${iphone2}`,
			`${iphoneLarge}`
		],
		timer: <Timer/>,
		sale: 3,
		outOf: '' },
	{name: 'AD Qled TV UltraHD Curved',
		brend: 'Samsung',
		prise: 2199,
		img: [
			`${qled1}`,
			`${qled2}`
		],
		timer: null,
		sale: null,
		outOf: 'out of stock' },
	{name: 'Amazfit SmartWatch',
		brend: 'Samsung',
		prise: 174,
		img: [
			`${amazfit1}`,
			`${amazfit2}`
		],
		timer: <Timer/>,
		sale: 17,
		outOf: '' },
	{name: 'Game Console Controller',
		brend: 'Samsung',
		prise: 75,
		img: [
			`${ps4}`,
			`${joystick}`
		],
		timer: null,
		sale: 20,
		outOf: '' },
	{name: 'White Solo 2 Wireless',
		brend: 'Sony',
		prise: 129,
		img: [
			`${headphones1}`,
			`${headphones2}`,
			`${headphonesLarge}`
		],
		timer: <Timer/>,
		sale: null,
		outOf: '' },
	{name: 'Smartphone',
		brend: 'Xiaomi',
		prise: 199,
		img: [
			`${mi71}`,
			`${mi72}`
		],
		timer: null,
		sale: null,
		outOf: '' },
	{name: 'Apple Watch',
		brend: 'Apple',
		prise: 399,
		img: [
			`${whiteWatch}`,
			`${whiteWatch2}`
		],
		timer: <Timer/>,
		sale: 24,
		outOf: '' }
]
