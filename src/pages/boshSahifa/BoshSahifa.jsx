import { useEffect, useState } from 'react'

// Sahifalar va komponentlar
import Loading from '../../Loading'
import Courses from './courses/Courses'
import Covorking from './cowerking/Covorking'
import EducationFormat from './educationformating/EducationFormat'
import Faq from './faq/Faq'
import Feedback from './feedback/Feedback'
import Hero from './hero/Hero'
import Registration from './registration/Registration'
import WhereWeAre from './whereweare/WhereWeAre'
import WhyChoosUs from './whychoosus/WhyChoosUs'

// CSS
import '../../App.css'

const BoshSahifa = () => {
	const [loading, setLoading] = useState(true)

	useEffect(() => {
		document.title = 'Bosh sahifa'

		// Sahifani yuqoriga skroll qilish

		// Yengil loading effekti
		const timer = setTimeout(() => setLoading(false), 1000)
		return () => clearTimeout(timer)
	}, [])

	return (
		<div className='boshSahifa'>
			{loading ? (
				<Loading />
			) : (
				<>
					<Hero />
					<WhyChoosUs />
					<Courses />
					<Covorking />
					<EducationFormat />
					<Feedback />
					<WhereWeAre />
					<Registration />
					<Faq />
				</>
			)}
		</div>
	)
}

export default BoshSahifa
