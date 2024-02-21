import React from 'react'
import Header from '../../components/Header/Header'
import './Cart.scss'
import { useCart } from '../../context/CartContext'

interface CartItem {
	id: number
	title: string
	price: number
}

const Cart: React.FC = () => {
	const { cartItems, removeFromCart } = useCart()

	const totalPrice = cartItems.reduce((total, item) => total + item.price, 0)

	const handleRemoveFromCart = (productId: number) => {
		removeFromCart(productId)
	}

	return (
		<>
			<Header />
			<div className='cart-container'>
				<h2>Your Cart</h2>
				{cartItems.length === 0 ? (
					<p>Your cart is empty.</p>
				) : (
					<ul>
						{cartItems.map((item: CartItem) => (
							<li key={item.id}>
								{item.title} - ${item.price}
								<div
									className='remove-button'
									onClick={() => handleRemoveFromCart(item.id)}
								>
									<img src='../../../public/letter-x.png' alt='' />
								</div>
							</li>
						))}
					</ul>
				)}
				<p className='cart-total'>Total: ${totalPrice.toFixed(2)}</p>
			</div>
		</>
	)
}

export default Cart
