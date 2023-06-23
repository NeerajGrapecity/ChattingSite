import { useState } from "react";
import User from "./components/User";
import "./index.css";
// import { useEffect } from "react"

function App() {
  const [texts, setTexts] = useState([]);

  //in js
  const themeSetter = () => {
    let styles = {};
    const darkThemeMq = window.matchMedia("(prefers-color-scheme: dark)");
    if (darkThemeMq.matches) {
      styles.backgroundColor = "#333";
      return styles;
    } else {
      styles.backgroundColor = "white";
      return styles;
    }
  };

  return (
    <div className="app" style={themeSetter()}>
      {/* <p>Current Theme is: {isDarkTheme ? "dark" : "light"}</p> */}
      <User texts={texts} setTexts={setTexts} parent="User 1">
        User 1
      </User>
      <User texts={texts} setTexts={setTexts} parent="User 2">
        User 2
      </User>
      {/* <User texts={texts} setTexts={setTexts} parent="User 3">
        User 3
      </User>
      <User texts={texts} setTexts={setTexts} parent="User 4">
        User 4
      </User> */}
    </div>
  );
}

export default App;
