import { useState } from "react";
import axios from "axios";
import './App.css';

function App() {
 
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");

  async function generateAnswer(){
    setAnswer("loading...");

    const response = await fetch("https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-pro:generateContent?key=AIzaSyBGp5Aaec4EEQaY2Mr9Ya2zeFTnD44wAeM", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        contents: [
          { parts: [{ text: question }] },
        ],
      })
    });

    const data = await response.json();
    console.log(setAnswer(data['candidates'][0]['content']['parts'][0]['text']));
  }
  return (
    <>
    <h1>
      Chat AI
    </h1>
    <textarea value={question} onChange={(e) => setQuestion(e.target.value)} 
    cols="30"
    rows="10
    "></textarea>
    <button onClick={generateAnswer}>Generate Response</button>

    <pre>{answer}</pre>
    </>
  );
}

export default App;
