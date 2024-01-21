import { useState } from 'react';
import './App.css';
import WebsiteHeader from '../globalComponents/WebsiteHeader';
import HomePage from '../websitePages/HomePage';

function App() {
  const [activePage, setActvivePage] = useState(
  <HomePage
    setActivePage = {setActvivePage}
  />); 

  return (
    <div className="App">
      <WebsiteHeader/>
      {activePage}
    </div>
  );
}

export default App;
