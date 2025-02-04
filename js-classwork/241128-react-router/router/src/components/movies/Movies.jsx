import { Link } from "react-router-dom";
import { useGlobalContext } from "../../context"
const url = `https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg`

const Movies = () => {
    const {movies, isLoading} = useGlobalContext();
    if (isLoading){
        return <div className="loading"></div>
    }
    console.log(movies)
    return(
        <section className="movies">
            {movies.map((movie)=>{
                const {imdbID: id, Poster: poster, Title: title, Year: year} = movie
                return(
                    <Link to={`/movies/${id}`} key={id} className="movie">
                        <article>
                        <img src={poster === 'N/A' ? url: poster} alt={title}/>
                        <div className="movieInfo">
                            <h4 className="title">{title}</h4>
                            <p>{year}</p>
                        </div>
                        </article>
                    </Link>
                )
            })}
        </section>
    )
}

export default Movies;