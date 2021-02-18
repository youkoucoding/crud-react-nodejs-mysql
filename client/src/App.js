import React, { useState, useEffect } from 'react';
// import DateRangePicker from './components/DateRangePicker';
import Axios from 'axios';

function App() {
  const [movieName, setMovieName] = useState("");
  const [movieReview, setMovieReview] = useState("");
  const [movieList, setMovieList] = useState([]);
  const [newReview, setNewReview] = useState("");

  useEffect(() => {
    Axios.get("http://localhost:5000/api/get").then((response) => {
      setMovieList(response.data);
    });
  }, []);

  const submitReview = () => {
    Axios.post('http://localhost:5000/api/insert', {
      movieName: movieName, movieReview: movieReview
    });
    setMovieList([
      ...movieList,
      { movieName: movieName, movieReview: movieReview },
    ]);
  };

  const deleteReview = (movie) => {
    Axios.delete(`http://localhost:5000/api/delete/${movie}`);
  };

  const updateReview = (movie) => {
    Axios.put("http://localhost:5000/api/update", {
      movieName: movie,
      movieReview: newReview,
    });
    setNewReview("");
  };

  return (
    <div className="flex flex-col font-mono pt-5 m-7">
      CRUD APPLICATION
      <div className="flex flex-col p-8 text-xl">
        <label>Movie Name:</label>
        <input
          type="text"
          className="border-2 rounded-md m-3"
          name={movieName}
          onChange={(e) => {
            setMovieName(e.target.value);
          }}
        />
        <label>Review:</label>
        <input
          type="text"
          className="border-8 hover:border-8 rounded-md m-3"
          name={movieReview}
          onChange={(e) => {
            setMovieReview(e.target.value);
          }}
        />
        <button
          className="w-1/2 flex items-center justify-center rounded-md bg-black text-white"
          type="submit"
          onClick={submitReview}
        >Submit</button>
      </div>
      {movieList.map((val) => {
        return (
          <div className="flex place-items-center mt-2 p-3 border-yellow-500 border-2 rounded-md">
            <div>MoveName: {val.movieName}</div>
            <div> movieReview:{val.movieReview}</div>
            <button
              className="flex items-center justify-center m-3 rounded-md border-2"
              onClick={() => { deleteReview(val.movieName); }}
            >Delete</button>
            <input
              type="text"
              className="border-2 m-2"
              onChange={(e) => {
                setNewReview(e.target.value);
              }}
            />
            <button
              className="flex items-center justify-center m-3 rounded-md border-2"
              onClick={() => { updateReview(val.movieName); }}
            >Update</button>
          </div>
        );
      })}
    </div>
  );
}


export default App;

