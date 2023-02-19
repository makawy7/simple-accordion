import { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

function Questions({ id, title, info }) {
  const [show, setShow] = useState(false);
  return (
    <article key={id} className="question">
      <header>
        <h4>{title}</h4>
        <button className="btn" onClick={() => setShow(!show)}>
          {show ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </header>
      {show && <p>{info}</p>}
    </article>
  );
}

export default Questions;
