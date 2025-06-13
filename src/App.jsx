import React, { useEffect, useState } from 'react';
import Home from './Home.jsx';
import StackedCards from './Components/StackedCards.jsx';
import Loader from './Loader.jsx';
import ScrollAnimation from './secondpage.jsx';

function App() {
  const [loading, setLoading] = useState(true);
  const [showAnimation, setShowAnimation] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
      setShowAnimation(true);
    }, 900); // show loader for 5.5 seconds

    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      {loading ? (
        <Loader />
      ) : (
        <>
          <Home animate={showAnimation} />
          <StackedCards />
          <ScrollAnimation/>
        </>
      )}
    </div>
  );
}

export default App;
