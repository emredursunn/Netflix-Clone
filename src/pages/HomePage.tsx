import { useEffect, useState } from "react";
import { getPopularMovies } from "../services/apiService";
import { Movie } from "../types/Movie";
import { useQuery } from "react-query";
import HeaderHome from "../components/home_page_components/HeaderHome";
import { CustomImage } from "../components/home_page_components/CustomImage";
import Overview from "../components/home_page_components/Overview";
import MovieCard from "../components/home_page_components/MovieCard";

export default function HomePage() {
  const [selectedMovie, setSelectedMovie] = useState<Movie | undefined>(undefined);

  const { data } = useQuery<Movie[]>({
    queryKey: ["movies"],
    queryFn: getPopularMovies,
  });

  useEffect(() => {
    if (data && data.length > 0) {
      setSelectedMovie(data[0]);
    }
  }, [data]);

  return (
    <div className="min-h-screen bg-black text-white">
      <HeaderHome />
      {/* Detailed Content */}
      <section className="relative h-[calc(100vh-100px)] lg:h-screen w-full">
            <CustomImage
              className="h-full w-full object-fit"
              uri={`http://image.tmdb.org/t/p/original/${selectedMovie?.backdrop_path}`}
              alt={selectedMovie?.title}
            />
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent" />
            
            <Overview selectedMovie={selectedMovie}/>
      </section>

      {/* Movie Row */}
      <section className="px-16 py-8">
        <h2 className="text-2xl font-semibold mb-4">Popular on Netflix</h2>
        <div className="flex space-x-4 overflow-x-scroll pb-4">
          {data?.map((movie) => (
            <MovieCard key={movie.id} movie={movie} setSelectedMovie={setSelectedMovie}/>
          ))}
        </div>
      </section>
    </div>
  );
}
