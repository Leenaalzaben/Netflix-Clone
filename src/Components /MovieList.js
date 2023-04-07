import Movie from './Movie'
export default function MovieList(props) {
    return (
        <>
            {
                props.movies.map(movie => {
                    return (
                        // each time I want to return movie
                        // return & render Movie comp.
                        <Movie movie={movie} />
                    )
                })
            }



        </>
    )
}
