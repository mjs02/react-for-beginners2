/*import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
); */



/*
import { useEffect, useState } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then(response => response.json())
      .then((json) => {
        setCoins(json);
        setLoading(false);
      });
  }, []);

return (
  <div>
    <h1>The Coins! {loading ? "" : `(${coins.length})`}</h1>
    {loading ? (
    <strong>Loading...</strong>
    ) : ( 
      <select>
        {coins.map((coin) => (
           <option>
           {coins.map((coin) => <li>{coin.name} ({coin.symbol}): ${coin.quotes.USD.price} USD</li>)}
           </option>
        ))}
      </select>
    )}
  </div>
);
}
*/



import { useEffect, useState } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const getMovies = async() => {
   const json = await (
    await fetch(
      `https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year`
    )
   ).json();
    setMovies(json.data.movies);
    setLoading(false);
  };

useEffect(() => {
  getMovies();
}, []);
return (
  <div>
    {loading ? (
      <h1>Loading...</h1> 
      ) : (
      <div>
        {movies.map((movie) => (
          <div key={movie.id}>
            <img src={movie.medium_cover_image} />
            <h2>{movie.title}</h2>
            <p>{movie.summary}</p>
            <ul>
              {movie.genres.map((g) => (
              <li key={g}>{g}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    )}
    </div>
  );
}

export default App;