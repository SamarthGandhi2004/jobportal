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
import Jobs from './components/Jobs'
import Browse from './components/Browse'
import Profile from './components/Profile'
import JobDescription from './components/JobDescription'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   {/* <Loader/> */}
      
<Router>

<Routes>
<Route path="/" element={<Home/>}/>
  <Route path="/Signup" element={<Signup/>}/>
  <Route path="/Login" element={<Login/>}/>
  <Route path="/jobs" element={<Jobs/>}/>
  <Route path="/browse" element={<Browse/>}/>
  <Route path="/profile" element={<Profile/>}/>
  <Route path="/Description/:id" element={<JobDescription/>}/>
  
</Routes>

</Router>
    </>
  )
}

export default App
