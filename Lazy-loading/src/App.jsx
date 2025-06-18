import React, { lazy, Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import About from './pages/About'
import Contact from './pages/Contact'
import Header from './components/Header'
import Footer from './components/Footer'

const Home = lazy(()=>import("./pages/Home"))

const App = () => {
  return (
    <div >
      <Header />
      <Suspense fallback = {<div>Loading...</div>}>
        <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
      </Suspense>
      <Footer />
    </div>
  )
}

export default App