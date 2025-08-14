import { Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import Loading from './Loading'
import Footer from './pages/boshSahifa/footer/Footer'
import Header from './pages/boshSahifa/header/Header'

import 'antd/dist/reset.css'
import 'react-toastify/dist/ReactToastify.css'
import './App.css'
import ScrollToTop from './components/ScrollToTop'

import BoshSahifa from './pages/boshSahifa/BoshSahifa'
import Registration from './pages/boshSahifa/registration/Registration'
import Kurslar from './pages/coursesAndPrice/Kurslar'
import LichTeacher from './pages/lichTeachers/LichTeacher'
import NotFound from './pages/notFound/NotFound'
import OnlineCourses from './pages/onlineCourses/OnlineCourses'
import ProgrammingCourse from './pages/programmingCourses/ProgrammingCourse'
import Teachers from './pages/Teachers/Teachers'
import RoyxatdanOtish from './'
// Lazy yuklanadigan sahifalar
const Kurslar = lazy(() => import('./pages/coursesAndPrice/Kurslar'))
const ProgrammingCourse = lazy(() =>
	import('./pages/programmingCourses/ProgrammingCourse')
)
const LichTeacher = lazy(() => import('./pages/lichTeachers/LichTeacher'))
const Teachers = lazy(() => import('./pages/Teachers/Teachers'))
const BoshSahifa = lazy(() => import('./pages/boshSahifa/BoshSahifa'))
const OnlineCourses = lazy(() => import('./pages/onlineCourses/OnlineCourses'))
const NotFound = lazy(() => import('./pages/notFound/NotFound'))

const App = () => {
	const location = useLocation()

	// Sahifa har gal o‘zgarganda yuqoriga chiqish
	useEffect(() => {
		window.scrollTo(0, 0)
	}, [location.pathname])

	return (
		<>
			<ScrollToTop />
			<Header />

			<Suspense fallback={<Loading />}>
				<Routes>
					<Route path='/' element={<BoshSahifa />} />
					<Route path='/ustozlar' element={<Teachers />} />
					<Route path='/kurslar' element={<Kurslar />} />
					<Route path='/online-kurslar' element={<OnlineCourses />} />
					<Route path='/ustozlar/ustoz/:id' element={<LichTeacher />} />
					<Route path='/kurslar/kurs/:id' element={<ProgrammingCourse />} />
					<Route path='/registration' element={<Registration />} />
					<Route path='*' element={<NotFound />} />

				</Routes>
			</Suspense>

			<Footer />
			{/* Toast xabarlari */}
			<ToastContainer
				position='top-right'
				autoClose={3000}
				hideProgressBar={false}
				newestOnTop={true}
				closeOnClick
				rtl={false}
				pauseOnFocusLoss={false}
				draggable
				pauseOnHover
				theme='light'
			/>
		</>
	)
}

export default App
