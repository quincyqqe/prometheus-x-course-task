import './Footer.scss'

const Footer = () => {
    return (
			<footer>
				<div className='wrapper'>
					Виконано в{' '}
					<a href='https://prometheus.org.ua/' target='_blank'>
						Prometheus
					</a>{' '}
					© 2024
				</div>
			</footer>
		)
}
 
export default Footer;