import { useState } from "react";
import data from "./data";

function Questions() {
  const [showId, setShowId] = useState(0);
  const toggleHide = (id) => {
    if (id == showId) {
      setShowId(0);
    } else {
      setShowId(id);
    }
  };
  return (
    <section className="info">
      {data.map((q) => (
        <article key={q.id} className="question">
          <header>
            <h4>{q.title}</h4>
            <button className="btn" onClick={() => toggleHide(q.id)}></button>
          </header>
          {showId == q.id && <p>{q.title}</p>}
        </article>
      ))}
    </section>
  );
}

export default Questions;
