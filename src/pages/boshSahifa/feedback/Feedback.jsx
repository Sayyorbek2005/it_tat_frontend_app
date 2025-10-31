import { useRef, useState } from 'react'
import 'swiper/css'
import 'swiper/css/pagination'
import { Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import './Feedback.css'

import teacher4 from '../../../assets/Moxinur-ustoz.JPG' // Fayl nomidagi noto'g'ri belgi to'g'rilandi
import teacher2 from '../../../assets/Nushofarin-ustoz.png'
import teacher3 from '../../../assets/Shaxzod-akajon.JPG'
import teacher1 from '../../../assets/Shoxrux-ustoz.JPG'

import { Modal } from 'antd'
import useFatch from '../../../components/useFatch'

const images = [teacher1, teacher2, teacher3, teacher4]

const Feedback = () => {
	const [isModalOpen, setIsModalOpen] = useState(false)
	const [swiperInstance, setSwiperInstance] = useState(null)
	const videoRef = useRef(null)

	const {
		data: mentors,
		isLoading,
		isError,
	} = useFatch('apimentors', 'mentors')

	const { data: feedbak_video } = useFatch(
		'apifeedback-mentors',
		'feedback-mentors'
	)

	console.log(feedbak_video)

	return (
		<div className='background'>
			<div className='max-width'>
				<div className='feedback'>
					<h2 className='font-size-40'>
						Feedback, O`quvchilar <br /> va ota-onalar fikrlari
					</h2>
					<div className='container'>
						<Swiper
							onSwiper={setSwiperInstance}
							spaceBetween={30}
							pagination={{ clickable: true }}
							modules={[Pagination]}
							className='mySwiper'
							breakpoints={{
								400: { slidesPerView: 1, spaceBetween: 10 },
								768: { slidesPerView: 2, spaceBetween: 20 },
								1024: { slidesPerView: 3, spaceBetween: 30 },
							}}
						>
							{mentors?.map((mentorsInformations, index) => (
								<SwiperSlide key={index} className='swiper-slide'>
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

			{/* Modal */}
			<Modal
				open={isModalOpen}
				onCancel={() => {
					if (videoRef.current) videoRef.current.pause()
					setIsModalOpen(false)
				}}
				footer={null}
			>
				{feedbak_video?.map((video, index) => (
					<div className='video' key={index}>
						<video ref={videoRef} controls autoPlay>
						<i
							onClick={() => {
								if (videoRef.current) videoRef.current.pause()
								setIsModalOpen(false)
							}}
							className='bx bx-x video-close'
						></i>
							<source src={video.video_url} type='video/mp4' />
						</video>
					</div>
				))}
			</Modal>
		</div>
	)
}

export default Feedback
