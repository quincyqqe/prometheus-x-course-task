// components/BookList.tsx
import React from 'react'
import ProductCard from '../ProductCart/ProductCart'
import BookDetails from '../../pages/BookDetails/BookDetails'

const BookList: React.FC = () => {
	const books = [
		{
			id: 1,
			name: 'Learning React',
			price: 10.99,
			image:
				'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1494421362l/29324861.jpg',
		},
		{
			id: 2,
			name: 'Just React!',
			price: 12.99,
			image:
				'https://media.springernature.com/full/springer-static/cover-hires/book/978-1-4842-8294-6',
		},
		{
			id: 3,
			name: 'Оптимизация JavaScript',
			price: 14.99,
			image:
				'https://media.proglib.io/posts/2020/02/28/b796102778fec6e877cc3f018d87fd9b.jpg',
		},
		{
			id: 4,
			name: 'JavaScript с нуля',
			price: 9.99,
			image:
				'https://static.insales-cdn.com/images/products/1/2400/417876320/44611701.jpg',
		},
		{
			id: 5,
			name: 'The Road to React',
			price: 11.99,
			image: 'https://m.media-amazon.com/images/I/41DA89Z1RIL.jpg',
		},
		{
			id: 6,
			name: 'ReactJS for beginners',
			price: 10.99,
			image: 'https://m.media-amazon.com/images/I/41U+YZRmoFL._SL500_.jpg',
		},
		{
			id: 7,
			name: 'React Hooks in Action',
			price: 10.99,
			image:
				'https://d28hgpri8am2if.cloudfront.net/book_images/onix/cvr9781638350767/react-hooks-in-action-9781638350767_hr.jpg',
		},
		{
			id: 8,
			name: 'React with TypeScript 3',
			price: 10.99,
			image: 'https://cdn1.ozone.ru/s3/multimedia-c/6338556324.jpg',
		},
		{
			id: 9,
			name: 'React.js быстрый старт',
			price: 10.99,
			image:
				'https://img3.labirint.ru/rc/297b555ea52f286af87f49aef3e16987/363x561q80/books59/580397/cover.jpg?1563990897',
		},
		{
			id: 10,
			name: 'NextJS and React',
			price: 10.99,
			image: 'https://m.media-amazon.com/images/I/41NMDVTDNKL._SL500_.jpg',
		},
	]

	const addToCart = (productId: number) => {
		// Ваша логика добавления в корзину
		console.log(`Added product with ID ${productId} to the cart.`)
	}

	return (
		<div
			style={{
				display: 'flex',
				flexWrap: 'wrap',
				justifyContent: 'space-around',
			}}
		>
			{books.map(book => (
				<ProductCard
					key={book.id}
					id={book.id}
					name={book.name}
					price={book.price}
					image={book.image}
					addToCart={addToCart}
				/>
			))}
		</div>
	)
}

export default BookList
