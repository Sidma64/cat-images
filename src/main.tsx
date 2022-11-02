import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

function App() {
  const [catUrl, reset] = useCatAPI();
  return (
    <div>
      <button onClick={() => reset()}>Reset</button>
      <img src={catUrl} alt="A cat" />
    </div>
  );
}

function useCatAPI() {
  const [url, setUrl] = useState('');

  const apiUrl = 'https://api.thecatapi.com/v1/images/search';

  useEffect(() => {
    getImageUrl();
  }, []);

  function getImageUrl() {
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => setUrl(data[0].url));
  }

  return [url, getImageUrl]
}
