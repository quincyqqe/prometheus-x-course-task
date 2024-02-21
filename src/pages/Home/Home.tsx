import React, { useEffect } from 'react'
import './Home.scss'
import Header from '../../components/Header/Header'
import Filter from '../../components/Filter/Filter'
import BookList from '../../components/BookList/BookList'
import { useAuth } from '../../context/AuthContext'
import { useNavigate } from 'react-router-dom'

const Home: React.FC = () => {
	// const { isAuthenticated } = useAuth()
	const navigate = useNavigate()

	// useEffect(() => {
	// 	if (!isAuthenticated) {
	// 		const storedAuthStatus = localStorage.getItem('isAuthenticated')
	// 		if (storedAuthStatus === 'true') {
	// 			// Если в localStorage есть запись об авторизации, устанавливаем isAuthenticated в true
	// 			navigate('/home')
	// 		} else {
	// 			// Если в localStorage нет записи об авторизации, перенаправляем на страницу входа
	// 			navigate('/')
	// 		}
	// 	} else {
	// 		// Сохраняем текущий статус авторизации в localStorage
	// 		localStorage.setItem('isAuthenticated', 'true')
	// 	}
	// }, [isAuthenticated, navigate])

	return (
		<>
			<header>
				<Header />
			</header>
			<main>
			
				<BookList />
			</main>
		</>
	)
}

export default Home
