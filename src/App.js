import React , { useState }from 'react';
import './App.css';
import Header from './Component/Header.js';
import Main from './Component/Main.js';
import Footer from './Component/Footer.js';

function App() {
  const [url, setUrl] = useState('');

  const handleSubmit = () => {
    
    console.log("URL submitted:", url);
  };

  return (
    <div className="App">
      <Header />
      <Main
       url={url}
        setUrl={setUrl} 
        onSubmit={handleSubmit} />
      <Footer />
    </div>
  );
}

export default App;
