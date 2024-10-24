import './App.css'
import SiteNavbar from './components/Navbar';
import SiteFooter from './components/Footer';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Roster from './pages/Roster';
import Schedule from './pages/Schedule';
import OurStory from './pages/OurStory';
import Contact from './pages/Contact';

function App() {

  return (
    <div className='w-screen h-screen'>
      <SiteNavbar />
      <div className='min-h-screen'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='roster' element={<Roster />} />
          <Route path='schedule' element={<Schedule />} />
          <Route path='our-story' element={<OurStory />} />
          <Route path='contact' element={<Contact />} />
        </Routes>
      </div>
      <SiteFooter />
    </div>
  )
}

export default App
