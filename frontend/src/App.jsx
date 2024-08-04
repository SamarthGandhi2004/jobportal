import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Loading from './components/Loading'
import Navbar from './shared/Navbar'
import { BrowserRouter as Router,Routes,Route} from 'react-router-dom'

import Signup from './components/auth/Signup'
import Login from './components/auth/Login'
import Home from './components/Home'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   {/* <Loading/> */}
<Navbar/>
<Router>
<Routes>
<Route path="/" element={<Home/>}/>
  <Route path="/Signup" element={<Signup/>}/>
  <Route path="/Login" element={<Login/>}/>
</Routes>

</Router>
    </>
  )
}

export default App
