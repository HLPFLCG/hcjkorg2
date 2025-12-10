// components/App.js
import { useGoogleTagManager } from '../hooks/useGoogleTagManager';

function App() {
  const { trackEvent } = useGoogleTagManager('GTM-T3NKKV8P');

  const handleButtonClick = () => {
    trackEvent('button_click', {
      button_text: 'Get Started',
      page_location: window.location.href,
    });
  };

  return (
    <div>
      <button onClick={handleButtonClick}>Get Started</button>
    </div>
  );
}
