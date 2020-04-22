import React from 'react'
import ButtonDesks from './ButtonDesks/index'

export default
{
	100: () =>
		<div>
			<p>Статус: <span>Проверка модератором</span></p>
		</div>,
	200: (id, deactivate) =>
		<div>
			<p>Статус: <span>Требуется корректировка</span></p>
			<ButtonDesks
				refactor = {true}
				id = {id}
				deactivate = {deactivate}
			/>
		</div>,
	300: (id, deactivate) =>
		<div>
			<p>Статус: <span>Опубликовано</span></p>
			<ButtonDesks
				active={true}
				refactor={true}
				id={id}
				deactivate={deactivate}
			/>
		</div>,
	400: () =>
		<div>
			<p>Статус: <span>Ожидается платеж</span></p>
		</div>,
	500: (id, deactivate) =>
		<div>
			<p>Статус: <span>Деактивировано</span></p>
			<ButtonDesks
				refactor={true}
				id={id}
				deactivate={deactivate}
			/>
		</div>,
	600: () => <div><p>Статус: <span>Удалено</span></p></div>,
	700: (id, deactivate) =>
		<div>
			<p>Статус: <span>Продано</span></p>
			{/* <ButtonDesks id={id} deactivate={deactivate}/> */}
		</div>,
	800: (id, deactivate) =>
		<div>
			<p>Статус: <span>Черновик</span></p>
			<ButtonDesks
				refactor={true}
				id={id}
				deactivate={deactivate}
			/>
		</div>
}
