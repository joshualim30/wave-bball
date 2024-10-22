import './App.css'
import SiteNavbar from './components/Navbar';
import SiteFooter from './components/Footer';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import OurStory from './pages/OurStory';
import Contact from './pages/Contact';
import Roster from './pages/Roster';

function App() {

  return (
    <div className='w-screen h-screen'>
      <SiteNavbar />
      <div className='min-h-screen'>
      <Routes>
        <Route path='/' element={<Home />} />
          <Route path='our-story' element={<OurStory />} />
        <Route path='contact' element={<Contact />} />
        <Route path='roster' element={<Roster />} />
      </Routes>
      </div>
      <SiteFooter />
    </div>
  )
}

export default App
