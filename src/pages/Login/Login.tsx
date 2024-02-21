import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import './Login.scss'
interface LoginProps {
	onAuthentication: () => void
}
const Login: React.FC<LoginProps> = ({ onAuthentication }) => {
	const [userName, setUserName] = useState<string>('')
	const [password, setPassword] = useState<string>('')
	const [userNameValid, setUserNameValid] = useState<boolean>(false)

	const navigate = useNavigate()

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault()
		if (userName === '' || password === '') {
			alert(`Error, username and password fields cannot be empty.`)
			return
		}
		if (password.length < 4) {
			alert(`Error, password should be at least 4 characters.`)
			return
		}
		onAuthentication()
		navigate('/home')
	}

	const handleUserNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const userNameValue = e.target.value
		setUserName(userNameValue)

		const isValid = userNameValue.length >= 4 && userNameValue.length <= 16
		setUserNameValid(isValid)
	}

	const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setPassword(e.target.value)
	}

	return (
		<div className='login-container'>
			<h1 className='login-title'>Sign In</h1>
			<form onSubmit={handleSubmit} className='login-form'>
				<div className='login-form-group'>
					<label htmlFor='userName' className='login-label'>
						Username
					</label>
					<input
						type='text'
						id='userName'
						className='login-input'
						value={userName}
						onChange={handleUserNameChange}
					/>
				</div>
				<div className='login-form-group'>
					<label htmlFor='password' className='login-label'>
						Password
					</label>
					<input
						type='password'
						id='password'
						className='login-input'
						value={password}
						onChange={handlePasswordChange}
					/>
				</div>
				<button
					type='submit'
					className='login-button'
					disabled={!userNameValid}
				>
					Sign In
				</button>
			</form>
		</div>
	)
}

export default Login
