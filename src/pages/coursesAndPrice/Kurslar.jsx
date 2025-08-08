import React, { useEffect, useState } from 'react'
// import Header from "../boshSahifa/header/Header";
import EducationFormat from '../boshSahifa/educationformating/EducationFormat'
import Result from '../boshSahifa/result/Result'
import WhyChoosUs from '../boshSahifa/whychoosus/WhyChoosUs'
// import Footer from "../boshSahifa/footer/Footer";
import { Button as MuiButton } from '@mui/material' // MUI Button

import './Kurslar.css'

// ? Ant Design Modal
import { Modal } from 'antd'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import Loading from '../../Loading'
import useFatch from '../../components/useFatch'

const Kurslar = () => {
	const location = useLocation()

	const { id } = useParams() // ? id ni olish uchun
	// ? title ni o`zgartirish
	useEffect(() => {
		document.title = 'Kurslar'
	}, [])
	// ? Modal
	const [modal, contextHolder] = Modal.useModal()
	const [loading, setLoading] = useState(true)
	const Navigate = useNavigate()

	useEffect(() => {
		// Simulate extended loading for 3 seconds
		const timer = setTimeout(() => setLoading(false), 1000)
		window.scrollTo(0, 0) // Sahifa ochilganda yuqoridan boshlanadi
		return () => clearTimeout(timer)
	}, [])

	const {
		data: coursesAndPriceData,
		isLoading,
		error,
	} = useFatch('apimentors/', 'testinCourses')

	console.log(coursesAndPriceData, 'coursesAndPriceData')

	const {
		data: coursesAndPriceDataId,
		isLoading: coursesAndPriceDataIdLoading,
	} = useFatch(`apimentors/${id}`)

	return (
		<div className='pages_big_div'>
			{loading ? (
				<Loading />
			) : (
				<div>
					{contextHolder}{' '}
					{/* ContextHolder ni qo‘shdik, shunda modal ishlaydi */}
					<br />
					<br />
					<br />
					<div className='background_m_g'>
						<div className='max-width'>
							<div className='kurslar'>
								<h1 className='font-size-40'>Kurslar</h1>

								{/* ? Grid container 1 */}
								<div className='between'>
									{coursesAndPriceData?.map(coursPriceDataInformations => (
										<div className='between_fist_div'>
											<div className='grid-item min_div'>
												<img
													src={coursPriceDataInformations.image}
													alt="O'qituvchi rasmi"
												/>
												<div className='min_div_none'>
													<h2 className='font-size-20 teacher_full_name'>
														{coursPriceDataInformations.full_name}
													</h2>
													<br />
													<p className='font-size-18-500'>
														{coursPriceDataInformations.description}
													</p>
												</div>
											</div>

											<div className='heightlinear'></div>

											<div className='grid-item max_div'>
												<div className='display'>
													<h2 className='font-size-20'>
														{coursPriceDataInformations.description}{' '}
													</h2>

													<>
														{coursPriceDataInformations?.courses?.map(
															(course, colIndex) => (
																<MuiButton
																	className='button'
																	onClick={() => {
																		Navigate(`/kurslar/kurs/${course.id}`)
																	}}
																>
																	Batafsil ma`lumot
																</MuiButton>
															)
														)}
													</>
												</div>
												<br className='none' />
												<hr />
												<br className='none' />
												<h2 className=' def_none font-size-20'>
													{coursPriceDataInformations.title}
												</h2>
												<p className='font-size-18-500'>
													Bizning mentorlarimiz xalqaro darajadagi mutaxassislar
													bo'lib, o'z sohasida katta tajribaga ega.
												</p>
												<br />
												<div className='grid_bar'>
													{coursPriceDataInformations?.courses?.map(
														(course, colIndex) => (
															<React.Fragment key={colIndex}>
																<div className='month'>
																	<span className='font-size-20'>
																		Kurs davomiyligi
																	</span>
																	<p className='font-size-20'>
																		{course.duration_months} oy
																	</p>
																</div>

																<div className='time'>
																	<span className='font-size-20'>
																		Dars boshlanish soati
																	</span>
																	<p className='font-size-20'>------- </p>
																</div>

																<div className='times'>
																	<span className='font-size-20'>Haftada</span>
																	<p className='font-size-20'>
																		{course.weekly_hours} kun
																	</p>
																</div>

																<div className='clock'>
																	<span className='font-size-20'>
																		Necha soat
																	</span>
																	<p className='font-size-20'>
																		{course?.duration_hours} soat
																	</p>
																</div>
															</React.Fragment>
														)
													)}
												</div>

												<div div className='batafsil_malumot_button_2'>
													{coursPriceDataInformations?.courses?.map(
														(course, colIndex) => (
															<MuiButton
																className='button button_block dis_none'
																onClick={() => {
																	Navigate(`/kurslar/kurs/${course.id}`)
																}}
															>
																Batafsil ma`lumot
															</MuiButton>
														)
													)}
												</div>
											</div>
										</div>
									))}
									{/* ? cont 2 */}
								</div>
							</div>
						</div>
					</div>
					{/* ? talim formati */}
					<EducationFormat />
					{/* ? nega bizni tanlashadi */}
					<WhyChoosUs />
					{/* ? result */}
					<Result />
					{/* ? footer */}
					{/* <Footer /> */}
					{/* ?  */}
				</div>
			)}
		</div>
	)
}

export default Kurslar
