// components/Filter.tsx
import React, { useState } from 'react'
import './Filter.scss'

interface FilterProps {
	onFilterChange: (searchTerm: string, price: string) => void
}

const Filter: React.FC<FilterProps> = ({ onFilterChange }) => {
	const [searchTerm, setSearchTerm] = useState('')
	const [price, setPrice] = useState('')

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setSearchTerm(e.target.value)
		onFilterChange(e.target.value, price)
	}

	const handlePriceChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
		setPrice(e.target.value)
		onFilterChange(searchTerm, e.target.value)
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
					onChange={handleInputChange}
				/>
			</div>
			<div className='filter-price'>
				<label>
					<select
						id='price'
						className='filter-price-select'
						value={price}
						onChange={handlePriceChange}
					>
						<option value='all'>All</option>
						<option value='0-15'>0 - 15</option>
						<option value='15-30'>15 - 30</option>
						<option value='30+'>30+</option>
					</select>
				</label>
			</div>
		</div>
	)
}

export default Filter
