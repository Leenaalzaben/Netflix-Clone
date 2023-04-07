import Button from 'react-bootstrap/Button';
import { useState, useEffect } from 'react';
import MovieList from './MovieList';


export default function Home() {
    // data = get new data inside movies after  setMovies(moviesData);

    const [movies, setMovies] = useState([]);

    async function getMovies() {
        const url = process.env.REACT_APP_BACKEND_URL;
        // console.log(111,url);

        const response = await fetch(`${url}/trending`);
        const moviesData = await response.json();

        setMovies(moviesData);
        console.log(444,movies);



    }
    //sending req to my backend
    useEffect(() => {
        // call back function first parameter and get the data from my server
        getMovies();
    }, []);
    return (
        <>
        <h2>Movies List</h2>
        {/* Render the Movie List comp. */}
            <MovieList  movies={movies}/>
        </>
    )
}