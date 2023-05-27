/*import Button from "./Button";
import styles from "./App.module.css";

function App() {
  return (
   <div>
    <h1 className={styles.title}>Welcome back!</h1>
    <Button text={"Continue"}/>
   </div>
  );
}

export default App;*/




/*
import { useState, useEffect } from "react";

function App() {
  const [counter, setValue] = useState(0);
  const [keyword, setKeyword] = useState("")
  const onClick = () => setValue((prev) => prev + 1);
  const onChange = (event) => setKeyword(event.target.value);
  console.log("i run all the time");
  useEffect(() => {
    console.log("i run only once.")
  }, []);
//useEffect: make the component run only once
/*useEffect(() => {
  if (keyword !== "" && keyword.length > 5) {
    console.log("SEARCH FOR", keyword);
  }
}, [keyword]);*/
/*
useEffect(() => {
  console.log("i run when 'keyword' changes.");
}, [keyword]);
useEffect(() => {
  console.log("i run when 'counter' changes.");
}, [counter]);
useEffect(() => {
  console.log("i run when keyword & counter change.");
}, [keyword, counter]);

  return (
    <div>
      <input 
      value={keyword}
      onChange={onChange} 
      type="text" 
      placeholder="Search here..."/>
      <h1>{counter}</h1>
      <button onClick={onClick}>Click me</button>
    </div>
  );
}

//when the state changes, all the component runs again 
//-> how can we make them run only the first time the state changes?

export default App;
*/




//import { useState, useEffect } from "react";

//function Hello() {
  /*function byFn() {
    console.log("bye :(");
  }
  function hiFn() {
    console.log("created :)");
    return byFn;
  }*/
  /*useEffect(() => {
    console.log("hi :)");
    return () => console.log("bye :(");
  }, []);*/
  /*useEffect(function(){
    console.log("hi :)");
    return function () {
      console.log("bye :(");
    }
  }, []);*/
//  return <h1>Hello</h1>;
//}
/*
function App() {
  const [showing, setShowing] = useState(false);
  const onClick = () => setShowing((prev) => !prev);
  return (
    <div>
      {showing ? <Hello /> : null}
      <button onClick={onClick}>{showing ? "Hide" : "Show"}</button>
    </div>
    );
}

export default App;
*/




/*
import { useState, useEffect } from "react";

function App() {
  const [toDo, setToDo] = useState("");
  const [toDos, setToDos] = useState([]);
  const onChange = (event) => setToDo(event.target.value);
  const onSubmit = (event) => {
    event.preventDeafult();
    if (toDo === "") {
      return;
    }
    setToDos((currentArray) => [toDo, ...currentArray]);
    setToDo("");
  };
  console.log(toDos);
  return (
  <div>
    <h1>My To Dos ({toDos.length})</h1>
    <form onSubmit={onSubmit}>
      <input onChange={onChange} 
      value={toDo} 
      type="text" 
      placeholder="Write your to do..." />
      <button>Add To Do</button>
    </form>
    <hr />
    <ul>
    {toDos.map((item, index) => (
    <li key={index}>{item}</li>
    ))}
    </ul>
  </div>
  );
}

export default App;
*/


/*
import { useState } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers").then((response => response.json));
  }, []);
  return (
  <div>
    <h1>The Coins!</h1>
    {loading ? <strong>Loading...</strong> : null}
  </div>
  );
}

export default App;
*/







/*function App() {
  return null;
}

export default App;*/





/*
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
          <Movie
          key={movie.id}
            coverImg={movie.medium_cover_image}
            title={movie.title} 
            summary={movie.summary} 
            genres={movie.genres}/>
          ))}
      </div>
    )}
  </div>
  );
}

export default Movie;
*/
//Home.js로 이동





import { 
  BrowserRouter as Router, 
  Switch, 
  Route 
} from "react-router-dom";
import Home from "./routes/Home"
function App() {
  return (
  <Router>
    <Switch>
      <Route path="/hello">
        <h1>Hello</h1>
      </Route>
      <Route path="/movie/:id">
        <Detail />
      </Route>
      <Route path="/">
        <Home />
      </Route>
  </Switch>
  </Router>
 );
}

export default App;