import React from 'react'

export default function () {
	return (<div
		style={{
			position: 'relative',
			display: 'flex',
			flexDirection: 'row',
			margin: '17px auto 21px',
			width: 80
		}}
	>
		<span
			style={{
				lineHeight: 2,
				fontWeight: '300',
				fontSize: 15,
				color: '#5C6979'
			}}
		>Загрузка</span>
		<svg style={{
			width: 39,
			height: 39
		}}className="lds-message" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
			<g transform="translate(25 50)">
				<circle cx="0" cy="0" r="3" fill="#5C6979" transform="scale(0.998176 0.998176)">
					<animateTransform attributeName="transform" type="scale" begin="-0.4666666666666666s"
						calcMode="spline" keySplines="0.3 0 0.7 1;0.3 0 0.7 1" values="0;1;0"
						keyTimes="0;0.5;1" dur="1.4s" repeatCount="indefinite"></animateTransform>
				</circle>
			</g>
			<g transform="translate(50 50)">
				<circle cx="0" cy="0" r="3" fill="#5C6979" transform="scale(0.698307 0.698307)">
					<animateTransform attributeName="transform" type="scale" begin="-0.2333333333333333s"
						calcMode="spline" keySplines="0.3 0 0.7 1;0.3 0 0.7 1" values="0;1;0"
						keyTimes="0;0.5;1" dur="1.4s" repeatCount="indefinite"></animateTransform>
				</circle>
			</g>
			<g transform="translate(75 50)">
				<circle cx="0" cy="0" r="3" fill="#5C6979" transform="scale(0.237004 0.237004)">
					<animateTransform attributeName="transform" type="scale" begin="0s" calcMode="spline"
						keySplines="0.3 0 0.7 1;0.3 0 0.7 1" values="0;1;0" keyTimes="0;0.5;1"
						dur="1.4s" repeatCount="indefinite"></animateTransform>
				</circle>
			</g>
		</svg>
	</div>
	)
}
