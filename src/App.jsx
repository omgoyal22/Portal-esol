import React, { useEffect, useState } from 'react';
import Home from './Home.jsx';
import StackedCards from './Components/StackedCards.jsx';
import Loader from './Loader.jsx';
import ScrollAnimation from './secondpage.jsx';
import ClientReviews from './ClientReview.jsx'; // Import here

function App() {
  const [loading, setLoading] = useState(true);
  const [showAnimation, setShowAnimation] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
      setShowAnimation(true);
    }, 900);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > window.innerHeight * 0.3;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="app-container">
      {loading ? (
        <Loader />
      ) : (
        <div style={{ position: 'relative' }}>
          {/* First section with video background */}
          <div style={{ position: 'relative', height: '100vh', overflow: 'hidden' }}>
            <Home animate={showAnimation} />
          </div>
          
          {/* Second section with black background */}
          <div style={{ position: 'relative', backgroundColor: '#000' }}>
            <StackedCards />
            <ClientReviews />
          </div>
        </div>
      )}
    </div>
  );
}

export default App;