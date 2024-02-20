import React from 'react'
import Header from '../../components/Header/Header'
import './Cart.scss'
import { useAuth } from '../../context/AuthContext'
import { useCart } from '../../context/CartContext'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'

const Cart = () => {
	const { isAuthenticated } = useAuth()
	const { cartItems } = useCart() // Use the useCart hook to get cartItems
	const navigate = useNavigate()

	useEffect(() => {
		if (!isAuthenticated) {
			navigate('/')
		}
	}, [isAuthenticated, navigate])

	return (
		<>
			<Header />
			<div className='cart-container'>
				<h2>Your Cart</h2>
				{cartItems.length === 0 ? (
					<p>Your cart is empty.</p>
				) : (
					<ul>
						{cartItems.map(item => (
							<li key={item.id}>
								{item.title} - ${item.price} - Quantity: {item.quantity}
							</li>
						))}
					</ul>
				)}
			</div>
		</>
	)
}

export default Cart
