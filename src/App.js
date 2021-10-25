import { useState } from "react";
import "./App.css";

const goodbooks = {
  javascript: [
    { name: "Eloquent javascript", rating: "4.5/5" },
    { name: "You Dont know JS", rating: "4/5" },
  ],
  Python: [
    { name: "Python Crash Course", rating: "3/5" },
    { name: "Fluent Python", rating: "3.5/5" },
  ],
  Fiction: [
    { name: "Harry Potter Series", rating: "4/5" },
    { name: "Marvel : Ironman", rating: "4/5" },
  ],
};
function App() {
  const [getGenre, setGenreHandler] = useState("Fiction");
  function clickHandler(genre) {
    setGenreHandler(genre);
  }
  return (
    <div className="App">
      <h1>📘bestreads</h1>
      <p>Checkout books available in our store.Select a genre to look</p>
      <div>
        {Object.keys(goodbooks).map((genre) => (
          <button
            onClick={() => clickHandler(genre)}
            key={genre}
            className="btn"
          >
            {genre}
          </button>
        ))}
      </div>
      <hr />
      <ul>
        {goodbooks[getGenre].map((book) => (
          <li>
            <b>Name : </b>
            {book.name}, <b>rating</b> : {book.rating}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
