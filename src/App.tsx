import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TopInfoBar from './components/TopInfoBar';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Home from './pages/Home';
import Manufacturing from './pages/Manufacturing';
import EquipmentList from './pages/EquipmentList';
import ContactUs from './pages/ContactUs';
import Careers from './pages/Careers';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white flex flex-col">
        <TopInfoBar />
        <Navigation />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/manufacturing" element={<Manufacturing />} />
            <Route path="/equipment-list" element={<EquipmentList />} />
            <Route path="/contact-us" element={<ContactUs />} />
            <Route path="/careers" element={<Careers />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
