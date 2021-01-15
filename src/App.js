import React, { useState } from "react";
import Words from "./components/Words";

import "./index.css";

function App() {
  const [word, setWord] = useState(Words);
  const [newWord, setNewWord] = useState(word[0]);
  // first word in words array is initial state value
  const [disabled, setDisabled] = useState(true);
  const [currentResults, setCurrentResults] = useState([]);
  // display current result
  const [wrongResults, setWrongResults] = useState([]);
  const [countCurrent, setCountCurrent] = useState(0);
  const [time, setTime] = useState(30);
  const [inputValue, setInputValue] = useState("");
  // state for our input
  const [animation, setAnimation] = useState(null);

  return <div className="typing-game">Typing Game</div>;
}

export default App;
