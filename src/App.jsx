import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { BrowserRouter } from 'react-router-dom'

import {
  Hero,
  About,
  Experience,
  Tech,
  Repositories,
  Contact,
  Works,
} from './components/screens'
import { Navbar } from './components/modules'

const App = () => {
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <Tech />
        <Works />
        <Repositories />
        <div className='relative z-0'>
          <Contact />
        </div>
      </div>
      <ToastContainer />
    </BrowserRouter>
  )
}

export default App
