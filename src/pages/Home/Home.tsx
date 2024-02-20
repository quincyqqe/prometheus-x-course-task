import React, { useEffect } from 'react'
import './Home.scss'
import Header from '../../components/Header/Header'
import Filter from '../../components/Filter/Filter'

import BookList from '../../components/BookList/BookList'
import { useAuth } from '../../context/AuthContext'
import { useNavigate } from 'react-router-dom'

const Home: React.FC = () => {
	const { isAuthenticated } = useAuth()

	// Если пользователь не авторизован, перенаправляем его на страницу входа
	const navigate = useNavigate()

	useEffect(() => {
		if (!isAuthenticated) {
			navigate('/')
		}
	}, [isAuthenticated, navigate])

	return (
		<>
			<header>
				<Header />
			</header>
			<Filter />
			<main>
				<BookList />
			</main>
		</>
	)
}

export default Home
