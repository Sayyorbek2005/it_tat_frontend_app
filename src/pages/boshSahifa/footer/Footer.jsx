import { FaFacebookF, FaInstagram, FaTelegram } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'
import logo_white from '../../../assets/Mask group.svg'
import useFatch from '../../../components/useFatch'
import './Footer.css'

const Footer = () => {
	const navigate = useNavigate()
	const { data: courses, isLoading, error } = useFatch('apicourses/')

	console.log(courses)

	return (
		<div className='footer-container'>
			<div className='footer-content'>
				<footer className='footer-grid'>
					{/* Logo va slogan */}
					<div className='footer-section f_s_none'>
						<img className='footer-logo' src={logo_white} alt='IT TAT Logo' />
						<strong className='font-size-20 footer-text'>
							Innovatsiya va texnologiya <br />
							orqali O'zbekiston yoshlarini <br />
							dunyoga tanitish
						</strong>
					</div>

					{/* Navigatsiya */}
					<div className='footer-section'>
						<h3 className='footer-title font-size-24-600'>Navigatsiya:</h3>
						<p
							onClick={() => navigate('/')}
							className='footer-link font-size-20'
						>
							<a className='font-size-20' href='#hero'>
								Bosh sahifa
							</a>
						</p>
						<p
							onClick={() => navigate('/kurslar')}
							className='footer-link font-size-20'
						>
							Kurslar
						</p>
						<p
							onClick={() => navigate('/Ustozlar')}
							className='footer-link font-size-20'
						>
							Ustozlar
						</p>
						<p
							onClick={() => navigate('/onlineKurslar')}
							className='footer-link font-size-20'
						>
							Online kurslar
						</p>
					</div>

					{/* Dinamik kurslar ro'yxati */}
					<div className='footer-section'>
						<h3 className='footer-title font-size-24-600'>Kurslar:</h3>

						{isLoading && <p>Yuklanmoqda...</p>}
						{error && <p>Xatolik: {error.message}</p>}

						{Array.isArray(courses) &&
							courses.map(kurs => (
								<p
									key={kurs.id}
									onClick={() => navigate(`/kurslar/kurs/${kurs.id}`)}
									className='footer-link font-size-20'
								>
									{kurs.title}
								</p>
							))}
					</div>

					{/* Aloqa */}
					<div className='footer-section'>
						<h3 className='footer-title font-size-24-600'>ALOQA:</h3>
						<div className='flex items-center'>
							<a className='tel tel-one font-size-20' href='tel:+998886110440'>
								+998 (88) 611-04-40
							</a>

							<a className=' tel tel-one font-size-20' href='tel:+998906020440'>
								+998 (90) 602-04-40
							</a>
						</div>
						<div className='social-icons'>
							<FaFacebookF className='icon' />
							<a
								href='https://www.instagram.com/it_tat_samarkand/'
								target='_blank'
								rel='noopener noreferrer'
							>
								<FaInstagram className='icon' />
							</a>
							<a
								href='https://t.me/it_tat_samarkand'
								target='_blank'
								rel='noopener noreferrer'
							>
								<FaTelegram className='icon' />
							</a>
						</div>
					</div>
				</footer>
			</div>
		</div>
	)
}

export default Footer
