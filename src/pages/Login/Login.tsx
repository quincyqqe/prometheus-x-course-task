import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './Login.scss'

const Login: React.FC = () => {
	const [userName, setUserName] = useState<string>('')
	const [password, setPassword] = useState<string>('')
	const [userNameValid, setUserNameValid] = useState<boolean>(false)
	const [currentUser, setCurrentUser] = useState<string>('')

	const navigate = useNavigate()

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault()
		if (userName === '' || password === '') {
			alert(`Error, username and password fields cannot be empty.`)
			return
		}
		setCurrentUser(userName)
		navigate('/home')
	}

	const handleUserNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const userNameValue = e.target.value
		setUserName(userNameValue)

		// Check if the username value is valid (i.e. meets the length requirement)
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
