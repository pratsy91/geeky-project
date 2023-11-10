import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { VscTriangleUp } from "react-icons/vsc";
import { VscTriangleDown } from "react-icons/vsc";
import { BiLoaderAlt } from "react-icons/bi";

function Movie() {
  const [movies, setMovies] = useState([]);

  const getData = async () => {
    const response = await axios.post(
      " https://corsproxy.io/?https://hoblist.com/api/movieList?category=movies&language=kannada&genre=all&sort=voting",
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
    console.log(movies[0]);
  }

  function compare(a, b) {
    if (a.totalVoted > b.totalVoted) {
      return -1;
    }
    if (a.totalVoted < b.totalVoted) {
      return 1;
    }
    return 0;
  }

  movies.sort(compare);

  const newMovies = movies.map((movie) => {
    const newDate = new Date(movie.releasedDate * 1000).toLocaleDateString();
    const nmovie = { ...movie, releasedDate: newDate };
    return nmovie;
  });

  console.log(newMovies);

  useEffect(() => {
    getData();
  }, []);
  return (
    <ul className="  w-10/12 sm:w-11/12 mx-auto pt-24 pb-10">
      {newMovies.length > 0 ? (
        newMovies.map((movie) => (
          <li key={movie._id}>
            <div
              className=" flex flex-col gap-4  border-x-4 shadow-md divide-y-0 border-double
     border-gray-200 p-2"
            >
              <div className="flex gap-8 sm:gap-3 justify-center py-2">
                <div className="flex flex-col justify-evenly items-center ">
                  <div className="text-4xl sm:text-2xl">
                    <VscTriangleUp />
                  </div>

                  {movie.totalVoted}
                  <div className="text-4xl sm:text-2xl">
                    <VscTriangleDown />
                  </div>
                  <h2 className="text-xl sm:text-xs">Votes</h2>
                </div>
                <div className=" flex items-center p-1 basis-3/4  gap-2 ">
                  <div className="p-1 basis-1/4 sm:min-w-4 min-w-8">
                    <img
                      src={movie.poster}
                      className="rounded shadow"
                      alt={`poster of ${movie.title}`}
                    />
                  </div>

                  <div className="flex flex-col flex-wrap gap-1 items-start self-center  basis-auto text-xl sm:text-xs">
                    <h1 className=" font-bold text-4xl sm:text-lg">
                      {movie.title}
                    </h1>
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
                    <div>
                      <span className=" border-r-2 px-1 border-gray-400">
                        {movie.language}
                      </span>
                      <span className="px-1">{movie.releasedDate}</span>
                    </div>
                    <div className=" text-teal-400">
                      <span className=" border-r-2 px-1 border-teal-400">
                        {movie.pageViews} views
                      </span>
                      <span className="px-1">
                        Voted by {movie.totalVoted} People
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <button className=" text-white bg-blue-400 w-10/12 mx-auto rounded">
                Watch Trailer
              </button>
            </div>
            <div className="bg-gray-200 h-1 mx-4"></div>
          </li>
        ))
      ) : (
        <div className="h-screen flex justify-center items-center text-blue-500 ">
          <BiLoaderAlt className=" animate-spin h-10 w-10" />
        </div>
      )}
    </ul>
  );
}

export default Movie;
