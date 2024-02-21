import Header from '../../components/Header/Header'
import { useCart } from '../../context/CartContext'
import './Cart.scss'

interface CartItem {
	id: number
	title: string
	price: number
}

const Cart = () => {
	const { cartItems, removeFromCart, clearCart } = useCart()

	const totalPrice = cartItems.reduce(
		(total: number, item: CartItem) => total + item.price,
		0
	)

	const handleRemoveFromCart = (productId: number) => {
		removeFromCart(productId)
	}

	const handlePurchase = () => {
		clearCart()
	}

	return (
		<>
			<Header />
			<div className='cart-container'>
				<h2>Your Cart</h2>
				{cartItems.length === 0 ? (
					<p>Your cart is empty.</p>
				) : (
					<>
						<ul>
							{cartItems.map((item: CartItem) => (
								<li key={item.id}>
									{item.title} - ${item.price}
									<div
										className='remove-button'
										onClick={() => handleRemoveFromCart(item.id)}
									>
										<img src='../../../public/images/letter-x.png' alt='x' />
									</div>
								</li>
							))}
						</ul>
						<p className='cart-total'>Total: ${totalPrice.toFixed(2)}</p>
						<button className='purchase-button' onClick={handlePurchase}>
							Purchase
						</button>
					</>
				)}
			</div>
		</>
	)
}

export default Cart
