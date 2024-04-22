import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Analytics = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Google Analytics tracking code
    window.gtag('config', 'G-KZTG44306R', {
      page_path: window.location.pathname,
    });

    // Ensure pageview is tracked when route changes
    const unlisten = navigate((location) => {
      window.gtag('config', 'G-KZTG44306R', {
        page_path: location.pathname,
      });
    });

    // Cleanup function
    return unlisten; // Stop listening for route changes
  }, [navigate]);

  return null; // Analytics component does not render anything
};

export default Analytics;
