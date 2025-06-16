import React, { useEffect, useState } from 'react';
import Home from './Home.jsx';
import ScrollAnimation from './secondpage.jsx';
function App() {
  const [loading, setLoading] = useState(true);
  const [showAnimation, setShowAnimation] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
      setShowAnimation(true);
    }, 900); // show loader for 0.9 seconds

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight * 0.5) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div>
      {/* <h1>hi</h1> */}
      <Home />
      <ScrollAnimation/>
    </div>
  );
}

export default App;