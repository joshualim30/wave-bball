import './App.css'
import SiteNavbar from './components/Navbar';
import SiteFooter from './components/Footer';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Roster from './pages/Roster';
import Schedule from './pages/Schedule';
import OurStory from './pages/OurStory';
import Contact from './pages/Contact';
import Countdown from 'react-countdown';

function App() {
  const renderer = ({ completed }: { completed: boolean }) => {
    if (completed) {
      // Render a completed state (Registation Closed)
      return <div className='min-h-screen flex justify-center items-center flex-col'>
                {/* Registration Closed */}
                <h1 className='text-4xl mb-2 font-bold'>Registration Closed</h1>
                <p className='text-lg'>Please check back later for updates!</p>

                {/* Quick Links */}
                <div className='mt-10'>
                  <a href='/roster' className='text-primary hover:underline'>Roster</a>
                  <span className='mx-2'>•</span>
                  <a href='/schedule' className='text-primary hover:underline'>Schedule</a>
                  <span className='mx-2'>•</span>
                  <a href='/our-story' className='text-primary hover:underline'>Our Story</a>
                  <span className='mx-2'>•</span>
                  <a href='/contact' className='text-primary hover:underline'>Contact</a>
                </div>
              </div>;
    } else {
      // Render Home (Tryouts) page
      return <Home />;
    }
  };

  return (
    <div className='w-screen h-screen'>
      <SiteNavbar />
      <div className='min-h-screen'>
        <Routes>
          <Route path='/' element={<Countdown date={new Date(2024, 10, 3)} renderer={renderer} /> } />
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
