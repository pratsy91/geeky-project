import logo from "./logo.svg";
import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  const [movies, setMovies] = useState([]);

  const getData = async () => {
    const response = await axios.post(
      "https://hoblist.com/api/movieList?category=movies&language=kannada&genre=all&sort=voting",
      {
        category: "movies",
        language: "kannada",
        genre: "all",
        sort: "voting",
      }
    );

    setMovies(response.data.result);
  };
  if (movies.length > 0) {
    console.log(movies);
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="App">
      <h1>Hell</h1>
    </div>
  );
}

export default App;
