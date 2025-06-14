import React from 'react'
import {Routes, Route} from 'react-router-dom'
import AboutUs from './pages/Aboutus.jsx'
import Question from './components/Question.jsx'
import Header from './pages/Header.jsx'
import Footer from './pages/Footer.jsx'
import Body from './pages/Body.jsx'
const App = () => {
  return (
<>
    <Header />
    <Routes>
      <Route path="/" element={<Body />} />
      <Route path="/about" element={<AboutUs/>} />
      <Route path="/questions" element={<Question />} />
      <Route path="*" element={<h1>404 Not Found</h1>} />
      
    </Routes>
    <Footer />
</>
  )
}

export default App