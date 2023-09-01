import './App.css';
import { useState , useEffect } from 'react';
import axios from 'axios';

function App() {

  const API_URL = "https://api.themoviedb.org/3"
  const [movies , setMovies ] = useState([])

  const fetchMovies = async () => {
    try {
      const { data: results } = await axios.get(`${API_URL}/discover/movie`, {
        params: {
<<<<<<< HEAD
          api_key: "process.env.REACT_APP_MOVIE_API_KEY" ,
=======
          api_key: "500f6453c4d26d54822be3744c4f3c0e" ,
>>>>>>> 7827cfbf2101bb5ab40d5acb2b01b36469bf741c
        },
      });
      
      setMovies(results)
      // console.log(results);
      console.log(movies)

    } catch (error) {
      console.error("Error fetching movies:", error);
    }
  };

  useEffect( () => {
    fetchMovies();
  } , [] )

  return (
    <div className="App">
        <h1> Movies Webiste </h1>
    </div>
  );
}

export default App;
