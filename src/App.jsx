import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Homepage from "./components/Homepage/Homepage";
import Aboutpage from "./components/Aboutpage/Aboutpage";
import Projectpage from "./components/Projectspage/Projectpage";
import Contactpage from "./components/Contactpage/Contactpage";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <div className="app">
      <Header />
      <Homepage />
      <Aboutpage />
      <Projectpage />
      <Contactpage />
      <Footer />
    </div>
  );
};

export default App;
