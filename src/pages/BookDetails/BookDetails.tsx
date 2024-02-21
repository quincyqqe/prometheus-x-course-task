import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useCart } from '../../context/CartContext'

import Header from '../../components/Header/Header'
import Snackbar from '@mui/material/Snackbar'
import Alert from '@mui/material/Alert'

import './BookDetails.scss'

const BookDetails = () => {
	const { productId } = useParams<{ productId: string }>()
	const [book, setBook] = useState<any>({})

	const [snackbarOpen, setSnackbarOpen] = useState(false)
	const cartContext = useCart()

	if (!cartContext) {
		// обработка случая, когда контекст равен undefined
		return null
	}

	const { addToCart } = cartContext

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

	const handleBuyClick = () => {
		const { id, title, price } = book

		addToCart({
			id,
			title,
			price,
			isPurchased: true,
		})

		setSnackbarOpen(true)
	}

	const closeSnackbar = () => {
		setSnackbarOpen(false)
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
					<button disabled={book.isPurchased} onClick={handleBuyClick}>
						{book.isPurchased ? 'Already Purchased' : 'Add to cart'}
					</button>
					<Snackbar
						open={snackbarOpen}
						autoHideDuration={2000}
						onClose={closeSnackbar}
					>
						<Alert
							onClose={closeSnackbar}
							severity='success'
							variant='filled'
							action={false}
						>
							Book added to the cart!
						</Alert>
					</Snackbar>
				</div>
			</div>
		</>
	)
}

export default BookDetails
