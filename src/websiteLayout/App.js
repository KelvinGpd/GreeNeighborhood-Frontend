import { useState } from 'react';
import '../css/App.css';
import "../css/homePage.css"
import "../css/mapPage.css"
import "../css/globalComponents.css"
import WebsiteHeader from '../globalComponents/WebsiteHeader';
import HomePage from '../websitePages/HomePage';

function App() {

  const [activePage, setActivePage] = useState(
  <HomePage
    setActivePage = {() => setActivePage}
  />); 

  return (
    <div className="App">
      <WebsiteHeader/>
      {activePage}
    </div>
  );
}

export default App;
