import React from 'react'
import styles from './styles.scss'

export default function () {
	return (
		<div className={styles.wrapperSpinner}>
			<svg width="70px" height="70px" viewBox="0 0 70 70" version="1.1">
				<defs>
					<circle id="path-1" cx="30" cy="30" r="30"></circle>
					<filter x="-12.5%" y="-12.5%" width="125.0%" height="125.0%" filterUnits="objectBoundingBox" id="filter-2">
						<feOffset dx="0" dy="0" in="SourceAlpha" result="shadowOffsetOuter1"></feOffset>
						<feGaussianBlur stdDeviation="2.5" in="shadowOffsetOuter1" result="shadowBlurOuter1"></feGaussianBlur>
						<feColorMatrix values="0 0 0 0 0.660442591   0 0 0 0 0.71505306   0 0 0 0 0.784066752  0 0 0 1 0" type="matrix" in="shadowBlurOuter1"></feColorMatrix>
					</filter>
				</defs>
				<g id="Pages" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
					<g id="spinner" transform="translate(-145.000000, -266.000000)">
						<g id="Group-6" transform="translate(150.000000, 271.000000)">
							<g id="Oval">
								<use fill="black" fillOpacity="1" filter="url(#filter-2)" xlinkHref="#path-1"></use>
								<use fill="#FFFFFF" fillRule="evenodd" xlinkHref="#path-1"></use>
							</g>
							<g id="AndroidSpinnerDark" transform="translate(10.000000, 10.000000)" fill="#FA2A00">
								<path d="M38.6058044,27.3509009 C35.6763495,34.7592837 28.4500647,40 20,40 C8.9545,40 0,31.0455 0,20 C0,9.87481986 7.52447317,1.50670861 17.28656,0.182525817 L18.0313512,3.11275596 C9.56975608,4.08846541 3,11.2768548 3,20 C3,29.389 10.611,37 20,37 C27.2775824,37 33.4869285,32.4272516 35.911628,25.998165 L38.6058044,27.3509009 Z" id="Spinner"></path>
							</g>
						</g>
					</g>
				</g>
			</svg>
		</div>
	)
}
