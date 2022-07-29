import React from 'react'
import './App.css'
import { Route , Routes} from 'react-router-dom'
import Animations from './gallery/Animations'
import Contact from './contact/Contact'
import Home from './home/Home'
import Header from './Header/Header'
import Footer from './footer/footer'
import About from './about/about'
import Portfolio from './gallery/Portfolio'
import Portraits from './gallery/Portraits'


function App() {
  return (
  
    <div className='home'>
      
      <div className='nav'>
        <Header />
      </div>

      <div className='body'>
      <Routes>
      <Route exact path='/' element={< Home />}></Route>
        <Route exact path='/about' element={< About />}></Route>
        <Route  exact path='/gallery' element={<Portfolio/>}></Route>
        <Route exact path='/contact' element={< Contact />}></Route>
        <Route  exact path='/gallery/animations' element={<Animations/>}> </Route>
        <Route exact path='/gallery/portraits' element={<Portraits/>}> </Route>
      </Routes>
      </div>

      <div className='footer'>
        <Footer/>
      </div>
      
    </div>
  )
}

export default App
