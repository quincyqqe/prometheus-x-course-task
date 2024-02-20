import React, { useEffect, useState } from 'react'
import Header from '../../components/Header/Header'
import { useAuth } from '../../context/AuthContext'
import { useNavigate, useParams } from 'react-router-dom'
import './BookDetails.scss'
interface BookDetailsProps {}

const BookDetails: React.FC<BookDetailsProps> = () => {
	const { isAuthenticated } = useAuth()
	const navigate = useNavigate()
	const { productId } = useParams<{ productId: string }>() // Извлекаем productId из URL
	const [book, setBook] = useState<any>({})

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

	return (
		<>
			<Header />
			<div className='book-details-container'>
				<div className='book-details-image'>
					<img src={book.image || '../../../public/no-pictures.png'} alt={book.title} />
				</div>
				<div className='book-details-info'>
					<h2>{book.title}</h2>
					<p className='book-details-author'>Author: {book.author}</p>
					<p className='book-details-price'>Price: ${book.price}</p>
					<p>Description: {book.description}</p>
					<p>Tags: {book.tags && book.tags.join(' ')}</p>
					<p>Amount: {book.amount}</p>
					<p>Level: {book.level}</p>
					<button>Buy</button>
					{/* Другие детали книги */}
				</div>
			</div>
		</>
	)
}

export default BookDetails
