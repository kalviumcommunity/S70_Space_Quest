
import './App.css'
import { LandingPage,Navbar } from './Routes'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
function App() {
  
  return (
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<LandingPage />} />
    </Routes>
      
    </BrowserRouter>
  )
}

export default App
