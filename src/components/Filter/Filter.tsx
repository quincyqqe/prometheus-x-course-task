import React, { useState } from 'react'
import './Filter.scss'

const Filter: React.FC = () => {
	const [searchTerm, setSearchTerm] = useState('')
	const [price, setPrice] = useState('')

	const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setSearchTerm(e.target.value)
	}

	const handlePriceChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
		setPrice(e.target.value)
	}

	return (
		<div className='filter'>
			<div className='filter-search'>
				<input
					type='text'
					id='search'
					className='filter-search-input'
					placeholder='Search by book name'
					value={searchTerm}
					onChange={handleSearchChange}
				/>
			</div>
			<div className='filter-price'>
				<select
					id='price'
					className='filter-price-select'
					value={price}
					onChange={handlePriceChange}
				>
					<option value=''>Choose price</option>
					<option value='low'>Low</option>
					<option value='high'>High</option>
				</select>
			</div>
		</div>
	)
}

export default Filter
