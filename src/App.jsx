import React, { useEffect, useState } from 'react';
import Home from './Home.jsx';
import Loader from './Loader.jsx';

function App() {
  const [loading, setLoading] = useState(true);
  const [showAnimation, setShowAnimation] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
      setShowAnimation(true);
    }); // show loader for 5.5 seconds

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading ? <Loader /> : <Home animate={showAnimation} />}
    </>
  );
}

export default App;
