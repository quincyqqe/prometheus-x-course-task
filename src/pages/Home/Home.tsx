import React from 'react'
import './Home.scss'
import Header from '../../components/Header/Header'
import Filter from '../../components/Filter/Filter'

import BookList from '../../components/BookList/BookList'

const Home: React.FC = () => {
	return (
		<>
			<header>
				<Header />
			</header>
			<Filter/>
			<main>
				<BookList />
			</main>
		</>
	)
}

export default Home
