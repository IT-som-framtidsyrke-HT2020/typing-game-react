import React, { useState } from "react";
import Words from "./components/Words";
import Container from "./components/Container";
import Typeracer from "./components/Typeracer";
import Results from "./components/Results";

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

  let randomWord = Math.floor(Math.random() * Words.length);

  const handleInput = () => {
    console.log("Handle input");
  };

  return (
    <div className="typing-game">
      <Container>
        <Typeracer
          newWord={newWord}
          inputValue={inputValue}
          setInputValue={setInputValue}
          disabled={disabled}
          time={time}
          handleInput={handleInput}
        />
      </Container>
      <Results
        correctResults={correctResults}
        wrongResults={wrongResults}
        countCorrect={countCorrect}
      />
    </div>
  );
}

export default App;
