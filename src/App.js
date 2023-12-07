import { useState } from "react";
import "./App.css";
import Home from "./Components/Homeee/Home";
import logo from "./Components/imgs/logo.webp";
import Story from "./Components/Story/Story";
import { Route, Routes, useNavigate } from "react-router-dom";
import UsefulR from "./Components/Ressources/UsefulR";
import Game from "./Components/Games/Game";
import Chatbot from "./Components/Chatbot/Chatbot";
import Stats from "./Components/Stats/Stats";

function App() {
  const [isNavOpen, setNavOpen] = useState(false);

  const toggleNav = () => {
    setNavOpen(!isNavOpen);
  };
  const navigate = useNavigate();
  const scrollToAndNavigate = (destination) => {
    window.scrollTo(0, 0);
    toggleNav();
    navigate(destination);
  };
  
  
  return (
    <div className="App">
      {/* ********** Navbar ****************** */}
      <header>
        <nav>
          <img src={logo} alt="" />
          <ul className={`nav_list ${isNavOpen ? "close_nav" : ""}`}>
            <button className="close_nav_butt" onClick={toggleNav}>
              &times;
            </button>
            <li onClick={() => scrollToAndNavigate("/TSYP_challenge")}>Home</li>
            <li onClick={() => scrollToAndNavigate("/useful_ressources")}>
              Useful Resources
            </li>
            <li onClick={() => scrollToAndNavigate("/story_telling")}>
              Storytelling
            </li>
            
            <li onClick={() => scrollToAndNavigate("/games")}>Quizizz</li>
            <li onClick={() => scrollToAndNavigate("/statistics")}>Statistics</li>
          </ul>
          <button className="open_nav_butt" onClick={toggleNav}>
            &#9776;
          </button>
        </nav>
      </header>
      <Routes>
        <Route path="/TSYP_challenge" element={<Home />} />
        <Route path="/story_telling" element={<Story />} />
        <Route path="/useful_ressources" element={<UsefulR />} />
        <Route path="/games" element={<Game />} />
        <Route path="/statistics" element={<Stats />} />
      </Routes>
      <div className="chatbott">
        <Chatbot/>
      </div>
    </div>
  );
}

export default App;
