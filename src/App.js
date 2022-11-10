import "./App.css";
import { useState } from "react";
import { text } from "./helpers/texts.js";
import { Paragraphs } from "./components/Paragraphs.jsx";

function App() {
  const [paragraphs, setParagraphs] = useState([]);
  const [count, setCount] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newArray = [];
    const amount = parseInt(count);

    if (amount <= 0) {
      amount = 1;
    }

    for (let i = 0; i < amount; i++) {
      newArray.push(text[Math.floor(Math.random() * text.length)]);
    }

    setParagraphs(newArray);
  };

  return (
    <>
      <main className="main_container">
        <section className="generator_container">
          <article className="header_container">
            <h2>TIRED OF BORING LOREM IPSUM?</h2>

            <form onSubmit={(e) => handleSubmit(e)}>
              <label>Paragraphs: </label>
              <input
                type="number"
                onChange={(e) => setCount(e.target.value)}
                value={count}
              ></input>
              <button type="submit">GENERATE</button>
            </form>
          </article>

          <hr />

          <article className="ps_container">
            {paragraphs.map((p, index) => (
              <Paragraphs key={index * 584} text={p}></Paragraphs>
            ))}
          </article>
        </section>
      </main>
    </>
  );
}

export default App;
