import React from 'react'
import { useNavigate } from 'react-router-dom'
import './ProductCart.scss'

interface ProductCardProps {
	id: number
	name: string
	price: number
	image: string | undefined
	addToCart: (productId: number) => void
}

const ProductCard: React.FC<ProductCardProps> = ({
	id,
	name,
	price,
	image,

	addToCart,
}) => {

	const navigate = useNavigate()

	const handleClick = () => {
		navigate(`/book-details/${id}`)
	}
	return (
		<div className='product-card'>
			<img src={image} alt='book-image' />
			<div className='product-card__title'>
				<h3>{name}</h3>
			</div>

			<div className='product-card__wrapper'>
				<div className='product-card__price'>
					<p>${price.toFixed(2)}</p>
				</div>
				<div className='product-card__button'>
					<button onClick={handleClick}>View</button>
				</div>
			</div>
		</div>
	)
}

export default ProductCard
