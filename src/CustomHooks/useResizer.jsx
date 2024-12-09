import { useState, useEffect } from 'react';

const useResizer = () => {
  const [windowDimensions, setWindowDimensions] = useState({
    width: window.innerWidth,
    height: window.innerHeight
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowDimensions({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };

    // Add event listener
    window.addEventListener('resize', handleResize);

    // Clean up
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowDimensions;
};

export default useResizer;
