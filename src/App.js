import Questions from "./Questions";
import data from "./data";

function App() {
  return (
    <div className="container">
      <h3>questions and answers about login</h3>
      <section className="info">
        {data.map((q) => (
          <Questions key={q.id} {...q} />
        ))}
      </section>
    </div>
  );
}

export default App;
