import { useState } from "react";
import "../css/App.css";
import "../css/homePage.css";
import "../css/mapPage.css";
import "../css/globalComponents.css";
import "../css/login.css";
import WebsiteHeader from "../globalComponents/WebsiteHeader";
import HomePage from "../websitePages/HomePage";
import LoginPage from "../websitePages/LoginPage";

// POUR METTRE LOGIN PAGE
// <LoginPage setActivePage={(page) => setActivePage(page)} />
// <SignupPage setActivePage = {(page) => props.setActivePage(page)}/>

function App() {
  const [user, setUser] = useState();

  const [activePage, setActivePage] = useState(
    <HomePage setActivePage={(page) => setActivePage(page)} />
  );

  return (
    <div className="App">
      <WebsiteHeader
        currentActivePage = {activePage}
        setCurrentActivePage = {(page) => {setActivePage(page)}}
      />
      {activePage}
    </div>
  );
}

export default App;
