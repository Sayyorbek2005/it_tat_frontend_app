import { useEffect, useRef, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import './LichTeacher.css'

// ? img

import alitalia from '../../assets/alitalia.png'
import axon from '../../assets/axon.png'
import expedia from '../../assets/expedia.png'
import jetstar from '../../assets/jetstar.png'
import qantas from '../../assets/qoantas.png'

// ? video
import lesson_video from '../../assets/it-tatni-tanishtirish.mp4'

// ? swiper
import { Modal } from 'antd'
import 'swiper/css'
import 'swiper/css/pagination'
import { Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import Loading from '../../Loading'
import useFatch from '../../components/useFatch'

const LichTeacher = () => {
	let navigate = useNavigate()

	let [loading, setLoading] = useState(true)

	const { id } = useParams()

	// ? title ni o`zgartirish
	useEffect(() => {
		document.title = 'Ustoz'
		let timer = setTimeout(() => setLoading(false), 1000)
		return () => clearTimeout(timer)
	}, [])

	const swiperRef = useRef(null)
	console.log(swiperRef)

	const [swiperInstance, setSwiperInstance] = useState(null)
	const [isModalOpen, setIsModalOpen] = useState(false)
	const videoRef = useRef(null)

	const { data: teachersInformationId } = useFatch(
		`apimentors/${id}`,
		'testing'
	)

	const { data: mentors } = useFatch('apimentors', 'mentors')

	console.log(mentors, 'mentors')

	console.log(teachersInformationId, 'teacherInformationId')

	return (
		<div className='lichTeacher pages_big_div'>
			{loading ? (
				<Loading />
			) : (
				<>
					<div className='background_m_g'>
						<div className='max-width'>
							<div className='display dis_flex' onClick={() => navigate(-1)}>
								<i className='bx bx-chevron-left font-size-24 -600'></i>
								<p className='font-size-20'>Ustozlar</p>
							</div>

							{/* Teacher */}
							{teachersInformationId && (
								<div className='teacher_cont'>
									<div className='teacher_img'>
										<img src={teachersInformationId?.image} alt='Teacher' />
									</div>
									<div className='teacher_about'>
										<h1 className='font-size-48'>
											{teachersInformationId?.full_name}
										</h1>
										<p className='font-size-24-600'>
											{teachersInformationId?.description}
										</p>
										<div className='teacher_information'>
											<div className='happy_students'>
												<p className='font-size-18-600'>Mamnun o‘quvchilar</p>
												<h2 className='font-size-40'>
													+{teachersInformationId.students_count}
												</h2>
											</div>
											<div className='experience'>
												<p className='font-size-18-600'>Tajribasi</p>
												<h2 className='font-size-40'>
													{teachersInformationId.experience_years} yil
												</h2>
											</div>
											<div className='Completed_Projects'>
												<p className='font-size-18-600'>
													Tugallangan loyihalar
												</p>
												<h2 className='font-size-40'>+13</h2>
											</div>
											<div className='awards_won'>
												<p className='font-size-18-600'>Mukofotlari</p>
												<h2 className='font-size-40'>+43</h2>
											</div>
										</div>
										{teachersInformationId.courses?.map(course => (
											<p className='font-size-18-500 color_black'>
												{course?.description}
											</p>
										))}
									</div>
								</div>
							)}

							{/* Teacher Portfolio */}
							{teachersInformationId?.portfolios && (
								<div className='teacher_portfolio'>
									<h1 className='font-size-48'>Portfolio</h1>
									<div className='web_bar'>
										{teachersInformationId.portfolios.map(portfolio => (
											<div
												key={portfolio.id}
												className={`web_div_${portfolio.id} web_div`}
											>
												<img
													className='web_div_img'
													src={portfolio.image}
													alt='Website'
												/>
												<p className='font-size-24'>{portfolio.name}</p>
												<p className='font-size-18-500'>
													{portfolio.description}
												</p>
												<a href={portfolio.url}>{portfolio.url}</a>
											</div>
										))}
									</div>
								</div>
							)}
						</div>

						{/* Bitiruvchilarimiz ishlayotgan kompaniyalar */}
						<div className='background'>
							<div className='max-width'>
								<div className='work_Companies'>
									<h1 className='font-size-48'>
										Bitiruvchilarimiz ishlayotgan kompaniyalar
									</h1>
									<p className='font-size-20-600'>
										Sohadagi eng yaxshi bo‘sh ish o‘rinlarini to‘playmiz,
										talabalarni suhbatga tayyorlaymiz va sizni hamkor
										kompaniyalarga tavsiya qilamiz.
									</p>
									<div className='work_companies_logo'>
										<img src={axon} alt='' />
										<img src={jetstar} alt='' />
										<img src={expedia} alt='' />
										<img src={qantas} alt='' />
										<img src={alitalia} alt='' />
									</div>
								</div>
							</div>
						</div>

						<div className='max-width'>
							{/* dars jarayoni */}
							<div className='lesson_process'>
								<h1 className='font-size-48'>Dars jarayoni</h1>
								{/* ? pastdagi divga qo`yish kere bosilganda modal ochiladi  onClick={() => setIsModalOpen(true)} */}
								<div className='process'>
									{/* <img className="video_lesson" src={lesson_process} alt="" /> */}
									{/*  */}
									<video
										className='video_lesson'
										width='100%'
										height={500}
										controls
										autoPlay
										loop
										muted
										ref={videoRef}
									>
										<source src={lesson_video} type='video/mp4' />
										Sizning brauzeringiz bu videoni qo‘llab-quvvatlamaydi.
									</video>
								</div>
							</div>

							{/* Swiper */}
							<div className='container'>
								<h1 class='font-size-48 h1-idea'>
									O`quvchilarning ustoz haqida fikri
								</h1>
								<Swiper
									onSwiper={setSwiperInstance}
									spaceBetween={30}
									pagination={{ clickable: true }}
									modules={[Pagination]}
									className='mySwiper'
									breakpoints={{
										400: { slidesPerView: 1, spaceBetween: 10 },
										768: { slidesPerView: 1, spaceBetween: 20 },
										1024: { slidesPerView: 3, spaceBetween: 30 },
									}}
								>
									{mentors?.map((mentorsInformations, index) => (
										<SwiperSlide key={index}>
											<div className='swiper_el'>
												<img
													src={mentorsInformations.image}
													alt={mentorsInformations.first_name}
												/>
												<p className='font-size-24 video_el_1'>
													{mentorsInformations.first_name}{' '}
													{mentorsInformations.last_name}
												</p>
												<p className='font-size-18 video_element'>
													{mentorsInformations.description}
												</p>
												<button
													onClick={() => setIsModalOpen(true)}
													className='play_button'
												>
													<i className='bx bx-play'></i>
												</button>
											</div>
										</SwiperSlide>
									))}
								</Swiper>

								<div className='buttons'>
									<button
										className='button_1'
										onClick={() => swiperInstance?.slidePrev()}
									>
										<i className='bx bx-left-arrow-alt'></i>
									</button>
									<button
										className='button_1'
										onClick={() => swiperInstance?.slideNext()}
									>
										<i className='bx bx-right-arrow-alt'></i>
									</button>
								</div>
							</div>
						</div>
					</div>

					{/* modal */}
					<Modal
						title='Bu videolar tez oradi saytga qo`yiladi'
						open={isModalOpen}
						onCancel={() => setIsModalOpen(false)}
						footer={null}
					>
						<div className='cont_a_i'>
							<div className='icon_top'>
								<p className='red'></p>
								<p className='yellow'></p>
								<p className='aqua'></p>
							</div>
							<i className='bx bx-cog'></i>
						</div>
					</Modal>
				</>
			)}
		</div>
	)
}

export default LichTeacher
