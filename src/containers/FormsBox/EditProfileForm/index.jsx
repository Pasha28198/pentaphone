import React, {Component} from 'react'
import CSSModules from 'react-css-modules'
import {reduxForm, Field} from 'redux-form'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'

import ProfileHeader from 'pages/Profile/MyRating_/components/ProfileHeader'
import PostForm from 'containers/FormsBox/PostForm'
import Userinfo from 'containers/FormsBox/UserInfo'
import textField from 'components/reduxForm/textField'
import textArea from 'components/reduxForm/textArea'
import validate from './validate'

import {mapStateToProps, mapActionsToProps} from './redux.js'

import styles from './styles.scss'

@connect(mapStateToProps, mapActionsToProps)
@reduxForm({
	form: 'refactorProfile',
	keepDirtyOnReinitialize: true,
	enableReinitialize: true,
	validate
})
@CSSModules(styles, {allowMultiple: true})

class EditProfileForm extends Component {
	render () {
		const {
			verifyCode, handleSubmit,
			verifyStatus, context,
			closeVerify, userInfo,
			photo, savePhoto
		} = this.props

		return (
			<form styleName="form" onSubmit={handleSubmit}>
				<ProfileHeader
					savePhoto={savePhoto}
					savedPhoto={userInfo.photo}
					photo={photo}
				/>
				<Userinfo {...{verifyStatus, verifyCode, closeVerify}}/>
				<PostForm/>
				<div styleName="description">
					<h2>Описание</h2>
					<Field
						name='description'
						type='text'
						component={textArea}
						label='Описание'
					/>
				</div>
				<div styleName="email">
					<h2>Email</h2>
					<Field
						name='email'
						type='text'
						component={textField}
						label='Почта'
					/>
				</div>
				<div styleName="handlerWrapper">
					<button
						ref={btn => (context.btn = btn)}
						styleName="submit"
						type="submit"
					>
						Сохранить профиль
					</button>
					<Link to={'/my-rating'}>
						<button
							styleName="submit white"
						>
							Отменить
						</button>
					</Link>
				</div>
			</form>
		)
	}
}

EditProfileForm.propTypes = {
	userInfo: PropTypes.obj,
	pushToProfile: PropTypes.func,
	verifyCode: PropTypes.func,
	handleSubmit: PropTypes.func,
	verifyStatus: PropTypes.bool,
	resend: PropTypes.func,
	context: PropTypes.object,
	closeVerify: PropTypes.func,
	photo: PropTypes.func,
	savePhoto: PropTypes.func
}

export default EditProfileForm
