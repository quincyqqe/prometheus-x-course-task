import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { CartProvider } from './context/CartContext'

import Login from './pages/Login/Login'
import Home from './pages/Home/Home'
import BookDetails from './pages/BookDetails/BookDetails'
import NotFoundPage from './components/NotFoundPage/NotFoundPage'
import Footer from './components/Footer/Footer'
import Cart from './pages/Cart/Cart'

const App = () => {
	return (
		<>
			<Router>
				<CartProvider>
					<Routes>
						<Route path='/' element={<Login />} />
						<Route path='/home' element={<Home />} />
						<Route path='/book-details/:productId' element={<BookDetails />} />
						<Route path='/cart' element={<Cart />} />
						<Route path='*' element={<NotFoundPage />} />
					</Routes>
				</CartProvider>
				<Footer />
			</Router>
		</>
	)
}

export default App
