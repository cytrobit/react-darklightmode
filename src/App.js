import "./styles.css";
import { BsFillSunFill, BsFillMoonFill } from "react-icons/bs";
import { useState } from "react";

export default function App() {
  const [theme, setTheme] = useState(false);

  function switchTheme() {
    setTheme(!theme);
    document.body.classList.toggle("dark");
  }

  return (
    <div className="App">
      <div className="switch" onClick={switchTheme}>
        {theme ? <BsFillSunFill size={24} /> : <BsFillMoonFill size={24} />}
      </div>
      <h1>LUNAweb</h1>
      <h2>Lets play with toggling dark and light mode!</h2>
      <ul>
        <li>Zero</li>
        <li>One</li>
        <li>Two</li>
        <li>Three</li>
      </ul>
      <div className="square"></div>
      <a href="https://www.lunaweb.pl">www.lunaweb.pl</a>
    </div>
  );
}
