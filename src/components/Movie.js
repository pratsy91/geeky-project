import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { VscTriangleUp } from "react-icons/vsc";
import { VscTriangleDown } from "react-icons/vsc";

function Movie() {
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
    <ul
      className=" border-x-4 shadow-xl divide-y-0 border-double
     border-gray-200 md:w-8/12 w-11/12 mx-auto "
    >
      {movies.length > 0 ? (
        movies.map((movie) => (
          <>
            <li key={movie._id}>
              <div className=" outline-4 flex flex-col gap-4 outline-red-500 outline p-2">
                <div className="flex md:gap-10 gap-3 justify-center">
                  <div className="flex flex-col justify-center outline-4 outline-yellow-500 outline">
                    <div className="md:text-6xl text-2xl">
                      <VscTriangleUp />
                    </div>

                    {movie.totalVoted}
                    <div className="md:text-6xl text-2xl">
                      <VscTriangleDown />
                    </div>
                  </div>
                  <div className=" flex items-center basis-3/4  gap-2 outline-4 outline-green-500 outline">
                    <div className="p-1 basis-1/4 min-w-4 md:min-w-8">
                      <img
                        src={movie.poster}
                        className="rounded shadow"
                        alt={`poster of ${movie.title}`}
                      />
                    </div>

                    <div className="flex flex-col flex-wrap items-start basis-auto grow md:text-xl text-xs">
                      <h1 className=" font-bold">{movie.title}</h1>
                      <div className=" text-left">
                        <p>
                          <span className="font-bold">Genre:</span>
                          {movie.genre}
                        </p>
                        <p>
                          <span className="font-bold">Director:</span>
                          {movie.director[0]}
                        </p>
                        <p className=" flex-wrap flex">
                          <span className="font-bold">Starring:</span>
                          {movie.stars.map((star) => (
                            <span>{star}</span>
                          ))}
                        </p>
                      </div>
                      <div></div>
                      <div></div>
                    </div>
                  </div>
                </div>
                <button className=" text-white bg-blue-400 w-11/12 mx-auto rounded">
                  Watch Trailer
                </button>
              </div>
            </li>
            <div className="bg-gray-200 h-1 mx-4"></div>
          </>
        ))
      ) : (
        <h1>Loading...</h1>
      )}
    </ul>
  );
}

export default Movie;
