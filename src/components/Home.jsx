import './Home.css'
import { Route, Routes } from 'react-router-dom'
import Home1 from './Home1'
import About from './About'
import Login from './Login'
import Funcounter from './Funcounter'
import ResponsiveAppBar from './ResponsiveAppBar'
import Datafetch from './Datafetch'
import Register from './register'
export const Home = () => {
  return (
    <div className='container'>
        <div className='header'>
          <ResponsiveAppBar/>
      </div>
        <div className='lsb'>LSB</div>
        <div className='main'>
          <Routes>
            <Route path='/' element={<Home1/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/Login' element={<Login/>}/>
            <Route path='/Register' element={<Register/>}/>
            <Route path='/Counter' element={<Funcounter/>}/>
            <Route path='/Datafetch' element={<Datafetch/>}/>
          </Routes>
        </div>
        <div className='footer'> footer</div>
        </div>
  )
}
export default Home