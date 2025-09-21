import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Projects from './pages/Projects'
import Agent from './pages/Agent'

function App() {
  return (
   <div>
    <Routes>
      <Route  path='/' element={<Home/>}/>
      <Route  path='/project' element={<Projects/>}/>
      <Route path='/agent' element={<Agent/>}/>
    </Routes>
   </div>
  )
}

export default App
