import { createContext, useContext, useState, ReactNode } from 'react'

interface CartContextProps {
	children: ReactNode
}

interface CartItem {
	id: number
	title: string
	price: number
	isPurchased: boolean
}

interface CartContextType {
	cartItems: CartItem[]
	addToCart: (item: CartItem) => void
	removeFromCart: (itemId: number) => void
	clearCart: () => void
}

const CartContext = createContext<CartContextType | undefined>(undefined)

export const CartProvider: React.FC<CartContextProps> = ({ children }) => {
	const [cartItems, setCartItems] = useState<CartItem[]>([])

	const addToCart = (item: CartItem) => {
		setCartItems(prevItems => [...prevItems, item])
	}

	const removeFromCart = (itemId: number) => {
		setCartItems(prevItems => {
			const index = prevItems.findIndex(item => item.id === itemId)
			if (index !== -1) {
				return [...prevItems.slice(0, index), ...prevItems.slice(index + 1)]
			} else {
				return prevItems
			}
		})
	}

	const clearCart = () => {
		setCartItems([])
	}

	return (
		<CartContext.Provider
			value={{ cartItems, addToCart, removeFromCart, clearCart }}
		>
			{children}
		</CartContext.Provider>
	)
}

export const useCart = () => {
	const context = useContext(CartContext)

	return context
}
