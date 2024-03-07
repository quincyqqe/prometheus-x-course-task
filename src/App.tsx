import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { CartProvider } from './context/CartContext'
import { AuthProvider } from './context/AuthContext'

import Login from './pages/Login/Login'
import Home from './pages/Home/Home'
import BookDetails from './pages/BookDetails/BookDetails'
import NotFoundPage from './components/NotFoundPage/NotFoundPage'
import Footer from './components/Footer/Footer'
import Cart from './pages/Cart/Cart'
import PrivateRouter from './components/utils/router/PrivateRouter'

const App = () => {
	return (
		<>
			<AuthProvider>
				<CartProvider>
					<Router>
						<Routes>
							<Route element={<PrivateRouter />}>
								<Route path='/home' element={<Home />} />
								<Route
									path='/book-details/:productId'
									element={<BookDetails />}
								/>
								<Route path='/cart' element={<Cart />} />
							</Route>

							<Route path='/' element={<Login />} />
							<Route path='*' element={<NotFoundPage />} />
						</Routes>

						<Footer />
					</Router>
				</CartProvider>
			</AuthProvider>
		</>
	)
}

export default App
