import React from 'react'
import CSSModules from 'react-css-modules'
import PropTypes from 'prop-types'

import mobileImg from 'assets/images/profile.jpg'
import desctopImg from 'assets/images/profileDesc.jpg'
import addIcon from 'assets/icons/addIcon.svg'
import userIcon from 'assets/svg/User.png'

import styles from './styles.scss'

const HeaderProfile = ({user: {rating, description}, photo, savedPhoto, savePhoto}) => {
	const path = window.location.pathname
	const uploadPhoto = ({target: {files}}) => savePhoto(files[0])
	return (
		<div styleName="profileHeader">
			<div styleName="imgWrapperMob">
				<img src={mobileImg} alt=""/>
			</div>
			<div styleName="imgWrapperDesc">
				<img src={desctopImg} alt=""/>
			</div>
			<Choose>
				<When condition={path === '/User-setting'}>
					<div
						styleName="userPhotoWrapper"
					>
						<img
							src={(photo && URL.createObjectURL(photo)) || savedPhoto || userIcon}
							alt="userImage"
							styleName="userPhoto"
						/>
						<input
							id="uploadUserImage"
							type='file'
							accept="image/x-png,image/gif,image/jpeg"
							styleName="uploadImg"
							onChange={uploadPhoto}
						/>
						<label
							styleName="addPhoto"
							htmlFor="uploadUserImage"
						>
							<img
								src={addIcon}
								alt="addIcon"
							/>
						</label>
					</div>
				</When>
				<Otherwise>
					<div styleName="infoWrapper">
						<span>Информация о продавце:</span>
						<h4>{`Моя страничка (${rating || 0}/5)`}</h4>
						<p>{description || 'Описание отсутствует'}</p>
					</div>
				</Otherwise>
			</Choose>
		</div>
	)
}

HeaderProfile.defaultProps = {
	user: {}
}
HeaderProfile.propTypes = {
	user: PropTypes.obj,
	photo: PropTypes.obj,
	savedPhoto: PropTypes.string,
	savePhoto: PropTypes.func
}

export default CSSModules(HeaderProfile, styles)
