import { useState } from "react";
import { Paragraphs } from "./components/Paragraphs.tsx";
import { texts } from "./helpers/texts.ts";

import "./App.css";

function App() {
  const [paragraphs, setParagraphs] = useState<string[]>([]);
  const [count, setCount] = useState<number>(0);

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();

    const newArray: string[] = [];
    let amount: number = count;

    if (amount <= 0) {
      amount = 1;
    }

    for (let i: number = 0; i < amount; i++) {
      newArray.push(texts[Math.floor(Math.random() * texts.length)]);
    }

    setParagraphs(newArray);
  };

  return (
    <main className="main_container">
      <section className="generator_container">
        <article className="header_container">
          <h2>TIRED OF BORING LOREM IPSUM?</h2>

          <form onSubmit={(e) => handleSubmit(e)}>
            <label>Paragraphs: </label>
            <input
              type="number"
              onChange={(e) => setCount(parseInt(e.target.value))}
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
  );
}

export default App;
