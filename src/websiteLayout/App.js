import { useEffect, useState } from "react";
import "../css/App.css";
import "../css/homePage.css";
import "../css/mapPage.css";
import "../css/globalComponents.css";
import "../css/login.css";
import WebsiteHeader from "../globalComponents/WebsiteHeader";
import HomePage from "../websitePages/HomePage";
import LoginPage from "../websitePages/LoginPage";
import { initializeApp } from "firebase/app";
import { onAuthStateChanged, getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAvKsp1U2E5W5OsnVjje4qUNGGSPxb1-Qg",
  authDomain: "even-trainer-411819.firebaseapp.com",
  databaseURL: "https://even-trainer-411819-default-rtdb.firebaseio.com",
  projectId: "even-trainer-411819",
  storageBucket: "even-trainer-411819.appspot.com",
  messagingSenderId: "270695756520",
  appId: "1:270695756520:web:7626efd1f056b4cc07cf5d",
  measurementId: "G-FXZNMD4SDH",
};

const app = initializeApp(firebaseConfig);

// POUR METTRE LOGIN PAGE
// <LoginPage setActivePage={(page) => setActivePage(page)} />
// <SignupPage setActivePage = {(page) => props.setActivePage(page)}/>

function App() {
  const [user, setUser] = useState();

  const [activePage, setActivePage] = useState(
    <LoginPage setActivePage={(page) => setActivePage(page)} app={app} />
    //<HomePage setActivePage={(page) => setActivePage(page)} />
  );

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log("user logged");
        setActivePage(
          <HomePage setActivePage={(page) => setActivePage(page)} />
        );
      } else {
        // Handle the case when the user is not logged in
      }
    });

    // Cleanup function to unsubscribe when the component is unmounted
    return () => unsubscribe();
  }, []);

  return (
    <div className="App">
      <WebsiteHeader
        currentActivePage={activePage}
        setCurrentActivePage={(page) => {
          setActivePage(page);
        }}
      />
      {activePage}
    </div>
  );
}

export default App;
