import { Navigate, Outlet } from 'react-router-dom'
import { useAuth } from '../../../context/AuthContext'

const PrivateRouter = () => {
	const { isAuthenticated } = useAuth()
	return isAuthenticated ? <Outlet /> : <Navigate to='/' />
}

export default PrivateRouter
