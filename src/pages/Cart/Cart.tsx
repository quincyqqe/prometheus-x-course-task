import Header from '../../components/Header/Header'
import './Cart.scss'
import { useAuth } from '../../context/AuthContext'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
const Cart = () => {
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

export default Cart
