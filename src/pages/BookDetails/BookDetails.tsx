import React, { useEffect, useState } from 'react'
import Header from '../../components/Header/Header'
import { useAuth } from '../../context/AuthContext'
import { useNavigate, useParams } from 'react-router-dom'
import './BookDetails.scss'
import { useCart } from '../../context/CartContext' // Assuming that you have CartContext in this path

interface BookDetailsProps {}

const BookDetails: React.FC<BookDetailsProps> = () => {
	const { isAuthenticated } = useAuth()
	const navigate = useNavigate()
	const { productId } = useParams<{ productId: string }>()
	const [book, setBook] = useState<any>({})
	const { addToCart } = useCart() // Using the addToCart function from CartContext

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await fetch('../../../books.json')
				const data = await response.json()

				const selectedBook = data.books.find(
					(book: any) => book.id === Number(productId)
				)

				if (selectedBook) {
					setBook(selectedBook)
				} else {
					console.error('Book not found')
				}
			} catch (error) {
				console.error('Error fetching data:', error)
			}
		}

		fetchData()
	}, [productId])

	useEffect(() => {
		if (!isAuthenticated) {
			navigate('/')
		}
	}, [isAuthenticated, navigate])

	const handleBuyClick = () => {
		// Assuming that you have all necessary properties in the book object
		const { id, title, price } = book

		// Add the book to the cart
		addToCart({
			id,
			title,
			price,
			quantity: 1, // You can adjust the quantity as needed
		})
	}

	return (
		<>
			<Header />
			<div className='book-details-container'>
				<div className='book-details-image'>
					<img
						src={book.image || '../../../public/no-pictures.png'}
						alt={book.title}
					/>
				</div>
				<div className='book-details-info'>
					<h2>{book.title}</h2>
					<p className='book-details-author'>Author: {book.author}</p>
					<p className='book-details-price'>Price: ${book.price}</p>
					<p>Description: {book.description}</p>
					<p>Tags: {book.tags && book.tags.join(' ')}</p>
					<p>Amount: {book.amount}</p>
					<p>Level: {book.level}</p>
					<button onClick={handleBuyClick}>Buy</button>
					{/* Other book details */}
				</div>
			</div>
		</>
	)
}

export default BookDetails
