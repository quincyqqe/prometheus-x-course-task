// components/BookList.tsx
import React, { useEffect, useState } from 'react'
import ProductCard from '../ProductCart/ProductCart'
import Filter from '../Filter/Filter'
import './BookList.scss'

interface Book {
	id: number
	name: string
	price: number
	image: string
	title: string
	author: string
}

const BookList: React.FC = () => {
	const [books, setBooks] = useState<Book[]>([])
	const [filteredBooks, setFilteredBooks] = useState<Book[]>([])
	const [searchTerm, setSearchTerm] = useState('')
	const [selectedPriceRange, setSelectedPriceRange] = useState<string>('all')

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await fetch('../../../books.json')
				const data = await response.json()

				if (data.books && Array.isArray(data.books)) {
					setBooks(data.books)
					filterBooks(searchTerm, selectedPriceRange)
				} else {
					console.error('Invalid data structure:', data)
				}
			} catch (error) {
				console.error('Error fetching data:', error)
			}
		}

		fetchData()
	}, [])

	useEffect(() => {
		// Викликаємо filterBooks тільки після успішного завантаження даних
		if (books.length > 0) {
			filterBooks(searchTerm, selectedPriceRange)
		}
	}, [books, selectedPriceRange, searchTerm])

	const handleFilterChange = (search: string, priceRange: string) => {
		setSearchTerm(search)
		setSelectedPriceRange(priceRange)
	}

	const filterBooks = (search: string, priceRange: string) => {
		let filtered = books

		if (search) {
			filtered = filtered.filter(
				book =>
					book.title.toLowerCase().includes(search.toLowerCase()) ||
					book.author.toLowerCase().includes(search.toLowerCase())
			)
		}

		switch (priceRange) {
			case '0-15':
				filtered = filtered.filter(book => book.price > 0 && book.price < 15)
				break
			case '15-30':
				filtered = filtered.filter(book => book.price >= 15 && book.price < 30)
				break
			case '30+':
				filtered = filtered.filter(book => book.price >= 30)
				break
			// 'all' case is handled by default, no additional filtering needed
			default:
				break
		}

		setFilteredBooks(filtered)
	}

	const addToCart = (productId: number) => {
		console.log(`Added product with ID ${productId} to the cart.`)
	}

	return (
		<div>
			<Filter onFilterChange={handleFilterChange} />
			<div className='container'>
				<div
					className='booklist'
					style={{
						display: 'flex',
						flexWrap: 'wrap',
						justifyContent: 'flex-start',
						margin: '0 24px',
						
						
						
					}}
				>
					{filteredBooks.map(book => (
						<ProductCard
							key={book.id}
							id={book.id}
							name={
								book.title.length > 24
									? book.title.slice(0, 24) + '...'
									: book.title
							}
							price={book.price}
							image={book.image}
							author={book.author}
							addToCart={addToCart}
						/>
					))}
				</div>
			</div>
		</div>
	)
}

export default BookList
