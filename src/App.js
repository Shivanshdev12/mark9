import { useState } from "react";
import "./App.css";

const goodbooks = {
  javascript: [
    { name: "Eloquent javascript", rating: [1, 2, 3, 4, 5] },
    { name: "You Dont know JS", rating: [1, 2, 3, 4] },
  ],
  Python: [
    { name: "Python Crash Course", rating: [1, 2, 3] },
    { name: "Fluent Python", rating: [1, 2, 3, 4] },
  ],
  Fiction: [
    { name: "Harry Potter Series", rating: [1, 2, 3, 4] },
    { name: "Marvel : Ironman", rating: [1, 2, 3, 4] },
  ],
};
function App() {
  const [getGenre, setGenreHandler] = useState("Fiction");
  function clickHandler(genre) {
    setGenreHandler(genre);
  }
  return (
    <div className="App">
      <h1>📘Bestreads</h1>
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
            {book.name}, <b>rating</b> : {book.rating.map(() => "⭐")}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
