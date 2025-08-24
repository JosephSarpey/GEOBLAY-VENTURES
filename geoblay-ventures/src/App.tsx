import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HomePage } from './components/pages/HomePage';
import { CatalogPage } from './components/pages/CatalogPage';
import { VehiclesPage } from './components/pages/VehiclesPage';
import { AboutPage } from './components/pages/AboutPage'; 
import { ContactPage } from './components/pages/ContactPage';
import { NotFoundPage } from './components/pages/NotFoundPage';
import { FloatingContactButton } from './components/FloatingContactButton';
import './styles/globals.css';

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Initialize dark mode from localStorage or system preference
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme === 'dark' || (!savedTheme && systemPrefersDark)) {
      document.documentElement.classList.add('dark');
      setIsDarkMode(true);
    } else {
      document.documentElement.classList.remove('dark');
      setIsDarkMode(false);
    }
  }, []);

  const toggleDarkMode = () => {
    const newDarkMode = !isDarkMode;
    setIsDarkMode(newDarkMode);
    
    if (newDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  return (
    <Router>
      <div className="min-h-screen bg-background transition-colors duration-300">
        <ScrollToTop />
        <Header
          isDarkMode={isDarkMode}
          toggleDarkMode={toggleDarkMode}
        />
        
        <main>
          <Routes>
            <Route index element={<HomePage />} />
            <Route path="/catalog" element={<CatalogPage setCurrentPage={() => {}} />} />
            <Route path="/vehicles" element={<VehiclesPage setCurrentPage={() => {}} />} />
            <Route path="/about" element={<AboutPage /> } />
            <Route path="/contact" element={<ContactPage setCurrentPage={() => {}} />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
          <FloatingContactButton />
        </main>
        
        <Footer />
      </div>
    </Router>
  );
}

export default App;
