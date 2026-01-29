import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Tools from './pages/Tools';
import ToolDetail from './pages/ToolDetail';
import Categories from './pages/Categories';
import About from './pages/About';

function App() {
  return (
    <Router>
      <AuthProvider>
        <div className="flex flex-col min-h-screen bg-osint-dark text-osint-text font-sans">
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/tools" element={<Tools />} />
              <Route path="/tools/:id" element={<ToolDetail />} />
              <Route path="/categories" element={<Categories />} />
              <Route path="/about" element={<About />} />
              {/* Authentication routes removed as per user request */}
            </Routes>
          </main>
          <Footer />
        </div>
      </AuthProvider>
    </Router>
  );
}

export default App;
