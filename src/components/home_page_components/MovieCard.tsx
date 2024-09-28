import { Dispatch, SetStateAction } from "react";
import { Movie } from "../../types/Movie";
import { CustomImage } from "./CustomImage";

type Props = {
    movie: Movie,
    setSelectedMovie: Dispatch<SetStateAction<Movie | undefined>>
}

const MovieCard = ({movie,setSelectedMovie}:Props) => {
  return (
    <figure
      onClick={() => setSelectedMovie(movie)}
      className="min-w-36 relative group"
    >
      <CustomImage
        alt={`Movie ${movie.title} poster`}
        className="rounded-md hover:scale-105 object-cover transition-transform duration-200 cursor-pointer"
        uri={`http://image.tmdb.org/t/p/original/${movie.poster_path}`}
      />
      <figcaption className="absolute bottom-0 lg:text-2xl text-md overflow-x-hidden rounded-sm left-0 right-0 bg-black bg-opacity-85 text-white text-center py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200 cursor-pointer">
        {movie.title}
      </figcaption>
    </figure>
  );
};

export default MovieCard;
