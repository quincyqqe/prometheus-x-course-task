import Header from '../../components/Header/Header'
import { useAuth } from '../../context/AuthContext'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'

const BookDetails: React.FC = () => {
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
			<Header />
		</>
	)
}

export default BookDetails
