import React, { useState } from "react";
import Words from "./components/Words";
import Container from "./components/Container";

import "./index.css";

function App() {
  const [word, setWord] = useState(Words);

  // first word in words array is initial state value
  const [newWord, setNewWord] = useState(word[0]);

  const [disabled, setDisabled] = useState(true);

  // display correct result
  const [correctResults, setCorrectResults] = useState([]);
  const [wrongResults, setWrongResults] = useState([]);
  const [countCorrect, setCountCorrect] = useState(0);
  const [time, setTime] = useState(30);
  const [inputValue, setInputValue] = useState("");
  // state for our input
  const [animation, setAnimation] = useState(null);

  return (
    <div className="typing-game">
      <Container></Container>
    </div>
  );
}

export default App;
