
import './App.css'
import { LandingPage,Navbar,UserPage ,SignUp} from './Routes'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
function App() {
  
  return (
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/users" element={<UserPage />} />
      <Route path="/sign-up" element={<SignUp />} />
    </Routes>
      
    </BrowserRouter>
  )
}

export default App
