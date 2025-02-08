import React, { useState, useEffect } from 'react';
import './RandomQuestion.css'; // Ensure you have this CSS file in your project.

const questions = [
  // "Is the sky blue?",
  // "Do cats fly?",
  // "Is water wet?",
  // "Can you touch the moon?",
  // "Is fire cold?"
   "Will you be my valentine!?"
];

function getRandomQuestion() {
  const index = Math.floor(Math.random() * questions.length);
  return questions[index];
}

function RandomQuestion() {
  const [question, setQuestion] = useState(getRandomQuestion());
  const [buttonStyle, setButtonStyle] = useState({});

  useEffect(() => {
    // Update the question when the component mounts or when user reloads the page
    setQuestion(getRandomQuestion());
  }, []);

  const handleNoClick = () => {
    // Move the "No" button to a random position on the screen
    setButtonStyle({
      position: 'absolute',
      top: `${Math.random() * (window.innerHeight - 50)}px`,
      left: `${Math.random() * (window.innerWidth - 100)}px`,
    });
  };

  return (
    <div className="question-box">
      <h1>{question}</h1>
      <button onClick={() => alert("Yayy!!!!")}>Yes</button>
      <button style={buttonStyle} onMouseOver={handleNoClick} onClick={handleNoClick}>No</button>
    </div>
  );
}

export default RandomQuestion;
