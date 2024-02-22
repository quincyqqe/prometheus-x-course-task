import { useNavigate } from 'react-router-dom'
import './Header.scss'

const Header = () => {
	const navigate = useNavigate()

	const handleClick = () => {
		navigate('/')
	}

	const handleClickHome = () => {
		navigate('/home')
	}

	const handleClickCart = () => {
		navigate('/cart')
	}

	return (
		<div className='header'>
			<div className='header-left'>
				<div className='header__title' onClick={handleClickHome}>
					X-Course Task / Maksym Kryvenko
				</div>
			</div>
			<div className='header-right'>
				<div className='header__cart'>
					<img
						src='/empty-cart.png'
						alt='cart'
						onClick={handleClickCart}
					/>
				</div>
				<div className='header__user'>
					<img
						src='/user.png'
						onClick={handleClickHome}
						alt='user'
					/>
				</div>
				<div className='header__sign-out'>
					<button onClick={handleClick}>Sign Out</button>
				</div>
			</div>
		</div>
	)
}

export default Header
