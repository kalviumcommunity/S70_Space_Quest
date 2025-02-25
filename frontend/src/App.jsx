
import './App.css'
import { LandingPage,Navbar,UserPage } from './Routes'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
function App() {
  
  return (
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/users" element={<UserPage />} />
    </Routes>
      
    </BrowserRouter>
  )
}

export default App
