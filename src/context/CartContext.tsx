import React, { createContext, useContext, useState, ReactNode } from 'react'

interface CartContextProps {
	children: ReactNode
}

interface CartItem {
	id: number
	title: string
	price: number
	quantity: number
}

interface CartContextType {
	cartItems: CartItem[]
	addToCart: (item: CartItem) => void
	removeFromCart: (itemId: number) => void
}

const CartContext = createContext<CartContextType | undefined>(undefined)

export const CartProvider: React.FC<CartContextProps> = ({ children }) => {
	const [cartItems, setCartItems] = useState<CartItem[]>([])

	const addToCart = (item: CartItem) => {
		setCartItems(prevItems => [...prevItems, item])
	}

	const removeFromCart = (itemId: number) => {
		setCartItems(prevItems => prevItems.filter(item => item.id !== itemId))
	}

	return (
		<CartContext.Provider value={{ cartItems, addToCart, removeFromCart }}>
			{children}
		</CartContext.Provider>
	)
}

export const useCart = () => {
	const context = useContext(CartContext)
	if (!context) {
		throw new Error('useCart must be used within a CartProvider')
	}
	return context
}
