// src/App.jsx
import React, { lazy, Suspense, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import Loading from './Loading';
import Header from './pages/boshSahifa/header/Header';
import Footer from './pages/boshSahifa/footer/Footer';
import ScrollToTop from './components/ScrollToTop';

import 'antd/dist/reset.css';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';

// Lazy-loaded pages (faqat bitta usul!)
const BoshSahifa = lazy(() => import('./pages/boshSahifa/BoshSahifa'));
const Registration = lazy(() => import('./pages/boshSahifa/registration/Registration'));
const Kurslar = lazy(() => import('./pages/coursesAndPrice/Kurslar'));
const LichTeacher = lazy(() => import('./pages/lichTeachers/LichTeacher'));
const NotFound = lazy(() => import('./pages/notFound/NotFound'));
const OnlineCourses = lazy(() => import('./pages/onlineCourses/OnlineCourses'));
const ProgrammingCourse = lazy(() => import('./pages/programmingCourses/ProgrammingCourse'));
const Teachers = lazy(() => import('./pages/Teachers/Teachers'));

function App() {
  const location = useLocation();

  // Sahifa o'zgarganda yuqoriga ko'tarish (ScrollToTop bor bo'lsa, buni olib tashlashingiz ham mumkin)
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location.pathname]);

  return (
    <>
      <ScrollToTop />
      <Header />

      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/" element={<BoshSahifa />} />
          <Route path="/ustozlar" element={<Teachers />} />
          <Route path="/kurslar" element={<Kurslar />} />
          <Route path="/online-kurslar" element={<OnlineCourses />} />
          <Route path="/ustozlar/ustoz/:id" element={<LichTeacher />} />
          <Route path="/kurslar/kurs/:id" element={<ProgrammingCourse />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>

      <Footer />

      <ToastContainer
        position="top-right"
        autoClose={3000}
        newestOnTop
        closeOnClick
        pauseOnFocusLoss={false}
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  );
}

export default App;
