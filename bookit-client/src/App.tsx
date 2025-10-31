import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import ExperienceDetails from './pages/ExperienceDetails'
import Checkout from './pages/Checkout';
import BookingResult from './pages/BookingResult';

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/experience/:id" element={<ExperienceDetails />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/booking/:bookingId" element={<BookingResult />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;