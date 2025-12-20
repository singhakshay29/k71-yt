import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Projects from './pages/Projects'
import Agent from './pages/Agent'
import { Navbar } from './components/common/Navbar'
import FullScreenNavbar from './components/common/FullScreenNavbar'


function App() {
 
  return (
   <div className='relative'>
    
      <Navbar/>
      <FullScreenNavbar/>
    <Routes>
      <Route  path='/' element={<Home/>}/>
      <Route  path='/project' element={<Projects/>}/>
      <Route path='/agent' element={<Agent/>}/>
    </Routes>
   </div>
  )
}

export default App
