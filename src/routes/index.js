// if you want see you route when User loggedIn, then
// you must add to this route setting auth: true.

import React from 'react'

// main page

import HomePage_ from 'src/pages/HomePage_/index'

// new pages

import Home from 'src/pages/home/index'
import Shop from 'src/pages/shop/index'

// root pages

import FaceBook from 'src/pages/RootPages/LoginFacebook'
import ConfirmNewPassword from 'src/pages/RootPages/ConfirmNewPassword'
import ResetPassword from 'src/pages/RootPages/ResetPassword'
import Auth from 'pages/RootPages/Auth'
import VerifyEmail from 'src/pages/Advertisement/SellFlow/VerifyEmail'

// sell flow pages

import SellFlow_ from 'pages/Advertisement/SellFlow_'
import Verify from 'pages/Advertisement/SellFlow/Verify'
import Statistics from 'src/pages/Advertisement/SellFlow/Statistics'
import VerifyNumber from 'pages/Advertisement/SellFlow/VerifyNumber'
import DopInfo_ from 'src/pages/Advertisement/SellFlow/DopInfo_'

// buyout pages

import Buyout from 'pages/MVP/pages/Buyout'
import DeviceResultInformation from 'src/pages/MVP/pages/deviceResultDopInfo'
import DesctopError from 'src/pages/MVP/pages/DesktopError'
import Geolocation from 'src/pages/MVP/pages/Geolocation'
import MvpAuth from 'src/pages/MVP/pages/AuthTab'
import AcceptRequest from 'pages/MVP/pages/AcceptRequest'

// profile pages

import MySales from 'pages/Profile/MySales'
// import MyRating from 'pages/Profile/MyRating'
import MyRating from 'pages/Profile/MyRating_'
import UserSetting from 'pages/Profile/Setting_'
// import UserSettings from 'pages/Profile/Setting_'
import MyBuys from 'pages/Profile/MyBuys'
import MyAdvertisements from 'src/pages/Profile/MyAdvertisements'
import Favorits from 'pages/Profile/MyFavorits'
import EditDevice from 'src/pages/Advertisement/EditDevice'

// buy flow pages

import DeviceDetails from 'pages/Advertisement/DeviceDetails_'
import ContactInfoTTN from 'pages/OrderWrapper'
import Catalog from 'src/pages/Catalog'

// functionality pages

import NotFound from 'pages/RootPages/NotFound'
import Categories from 'pages/Categories'
import FeedBack from 'src/pages/FeedBack/index.jsx'
import ThankYouPage from 'pages/Advertisement/ThankYouPage'
import Condef from 'src/pages/RootPages/Condef'
import Articles from '../pages/Articles'

export default [
	{
		path: '/',
		exact: true,
		component: (props) => (
			<Home
				parentProps={props}
				titleHelmet="ReSell - покупка-продажа б/у телефонов с гарантией. Samsung, Apple, Xiaomi"/>
		),
		auth: false
	},
	{
		path: '/shop',
		exact: true,
		component: (props) => (
			<Shop
				parentProps={props}
			/>
		),
		auth: false
	},
	{
		path: '/auth/:formType/:redirectToken/:facebookToken',
		component: (props) => (
			<Auth
				parentProps={props}
				titleHelmet="Регистрация на сайте resell.com.ua"
			/>
		),
		auth: false
	},
	{
		path: '/auth/:formType',
		component: (props) => (
			<Auth
				parentProps={props}
				titleHelmet="Регистрация на сайте resell.com.ua"
			/>
		),
		auth: false
	},
	{
		path: '/User-setting',
		component: (props) => (
			<UserSetting
				parentProps={props}
				titleHelmet="ReSell - Профиль пользователя, редактирование личной страницы"
			/>
		),
		auth: true
	},
	{
		path: '/my-rating',
		component: (props) => (
			<MyRating
				parentProps={props}
				titleHelmet="ReSell - Профиль пользователя, личный рейтинг"
			/>
		),
		auth: true
	},
	{
		path: '/user/:id',
		component: (props) => (
			<MyRating
				parentProps={props}
				titleHelmet="ReSell - Профиль пользователя"
			/>
		),
		auth: false
	},
	{
		path: '/confidential',
		component: (props) => (
			<Condef
				parentProps={props}
				titleHelmet="ReSell - Правила использования сервиса resell.com.ua"/>
		),
		auth: false
	},
	{
		path: '/my-advertisments',
		exact: false,
		component: (props) => (
			<MyAdvertisements
				parentProps={props}
				titleHelmet="ReSell - Мои объявления"
			/>
		),
		auth: true
	},
	{
		path: '/edit-device/:id',
		component: (props) => (
			<EditDevice
				parentProps={props}
				titleHelmet="ReSell - Подать объявление о продаже телефона. Бесплатное объявление"
			/>
		),
		auth: true
	},
	{
		path: '/order/contact-info/:id',
		component: (props) => (
			<ContactInfoTTN
				parentProps={props}
				titleHelmet="ReSell - Доставка и оплата. Подтвердите заказ"
			/>
		),
		auth: true
	},
	{
		path: '/order/:kind/contact-info',
		component: (props) => (
			<ContactInfoTTN
				parentProps={props}
				titleHelmet="ReSell - Доставка и оплата. Оформить заказ"
			/>),
		auth: false
	},
	{
		path: '/rest-auth/registration/account-confirm-email/:token/',
		component: (props) => (
			<VerifyEmail
				parentProps={props}
				titleHelmet="ReSell - Подтверждение e-mai"
			/>
		),
		auth: false
	},
	{
		path: '/sell/categories',
		component: (props) => (
			<Categories
				parentProps={props}
				titleHelmet="ReSell - Продажа бу электроники. Продать смартфон, планшет, ноутбук, электронную книгу"
			/>
		),
		auth: false
	},
	{
		path: '/buy/categories',
		component: (props) => (
			<Categories
				parentProps={props}
				titleHelmet="ReSell - Покупка бу электроники. Купить телефон, планшет, ноутбук, электронную книгу"
			/>
		),
		exact: true,
		auth: false
	},
	{
		path: '/sell/verify-number',
		component: (props) => (
			<VerifyNumber
				parentProps={props}
				titleHelmet="ReSell - Подтверждение номера телефона"
			/>
		),
		auth: false
	},
	{
		path: '/article/:name',
		component: (props) => (
			<Articles
				parentProps={props}
				titleHelmet='Resell - Статьи'
			/>
		),
		auth: false
	},
	{
		path: '/sell/statistics',
		component: (props) => (
			<Statistics
				parentProps={props}
				titleHelmet="ReSell"
			/>
		),
		auth: false
	},
	{
		path: '/sell/dop-info',
		component: (props) => (
			<DopInfo_
				parentProps={props}
				titleHelmet="ReSell - Подать объявление о продаже телефона. Фото, описание, цена"
			/>
		),
		auth: true
	},
	{
		path: '/sell/verify',
		component: (props) => (
			<Verify
				parentProps={props}
				titleHelmet="ReSell - Продажа телефона. Проверить в сервисном центре"
			/>
		),
		auth: true
	},
	{
		path: '/favorites',
		component: (props) => (
			<Favorits
				parentProps={props}
				titleHelmet="ReSell - Избранное. Личный кабинет"
			/>
		),
		auth: true
	},
	{
		path: '/my-sales',
		component: (props) => (
			<MySales
				parentProps={props}
				titleHelmet="ReSell - Мои продажи. Личный кабинет"
			/>
		),
		auth: true
	},
	{
		path: '/my-buys',
		component: (props) => (
			<MyBuys
				parentProps={props}
				titleHelmet="ReSell - Мои покупки. Личный кабинет"
			/>
		),
		auth: true
	},
	{
		path: '/login/:token',
		component: (props) => (
			<FaceBook
				parentProps={props}
				titleHelmet="ReSell - Регистрация с помощью учетной записи Facebook"
			/>
		),
		auth: false
	},
	{
		path: '/sell/thank-you-page/:type',
		component: (props) => (
			<ThankYouPage
				parentProps={props}
				titleHelmet="ReSell"
			/>
		),
		auth: false
	},
	{
		path: '/feedback/:id',
		component: (props) => (
			<FeedBack
				parentProps={props}
				titleHelmet="ReSell - Мои отзывы. Личный кабинет"
			/>
		),
		auth: true
	},
	{
		path: '/sell/:type',
		component: (props) => (
			<SellFlow_
				parentProps={props}
				titleHelmet="ReSell"
			/>
		),
		auth: false
	},
	{
		path: '/device/:name/:id',
		component: (props) => (
			<DeviceDetails
				parentProps={props}
			/>
		),
		auth: false
	},
	{
		path: '/reset-password/:token/:id',
		component: (props) => (
			<ConfirmNewPassword
				parentProps={props}
				titleHelmet="ReSell - Восстановление пароля"
			/>
		),
		auth: false
	},
	{
		path: '/auth/login/facebook/',
		component: (props) => (
			<NotFound
				parentProps={props}
				titleHelmet="ReSell - Регистрация с помощью учетной записи Facebook"
			/>
		),
		auth: false
	},
	{
		path: '/reset-password',
		component: (props) => (
			<ResetPassword
				parentProps={props}
				titleHelmet="ReSell - Восстановление пароля"
			/>
		),
		auth: false
	},
	{
		path: '/buy/:type',
		component: (props) => (
			<Catalog
				parentProps={props}
			/>
		),
		exact: true,
		auth: false
	},
	{
		path: '/buyout/accept-request',
		component: AcceptRequest,
		auth: true
	},
	{
		path: '/buyout/error-desktop',
		component: (props) => (
			<DesctopError parentProps={props}/>
		)
	},
	{
		path: '/buyout/auth',
		component: (props) => (
			<MvpAuth
				parentProps={props}
			/>
		),
		auth: false
	},
	{
		path: '/buyout/dopInfo',
		component: (props) => (
			<DeviceResultInformation
				parentProps={props}
			/>
		),
		auth: false
	},
	{
		path: '/buyout/geolocation',
		component: (props) =>
			<Geolocation
				parentProps={props}
			/>
	},
	{
		path: '/buyout/:type',
		component: (props) => (
			<Buyout parentProps={props}/>
		)
	},
	{
		path: '*',
		component: (props) => (
			<NotFound
				parentProps={props}
				titleHelmet="ReSell 404"
			/>
		),
		auth: false
	}
]
