import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Login from './pages/Login/Login'
import Home from './pages/Home/Home'
import BookDetails from './pages/BookDetails/BookDetails'
import NotFoundPage from './components/NotFoundPage/NotFoundPage'
import Footer from './components/Footer/Footer'
import Cart from './pages/Cart/Cart'

const App: React.FC = () => {
	return (
		<Router>
			<Routes>
				<Route path='/' element={<Login />} />
				<Route path='/home' element={<Home />} />
				<Route path='/book-details/:productId' element={<BookDetails />} />
				<Route path='/cart' element={<Cart />} />
				<Route path='*' element={<NotFoundPage />} />
			</Routes>
			<Footer />
		</Router>
	)
}

export default App
