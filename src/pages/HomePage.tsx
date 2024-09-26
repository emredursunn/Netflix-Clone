import { Info, Play } from "lucide-react";
import { useEffect, useState } from "react";
import { getPopularMovies } from "../services/apiService";
import { Movie } from "../types/Movie";
import { useAutoAnimate } from "@formkit/auto-animate/react";

export default function HomePage() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);
  const [animationParent] = useAutoAnimate();

  useEffect(() => {
    const fetchMovies = async () => {
      const response = await getPopularMovies();
      const results = response.results;
      setMovies(results);
      setSelectedMovie(results[11]);
    };
    fetchMovies();
  }, []);

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="flex items-center justify-between px-4 py-2 bg-gradient-to-b from-black to-transparent absolute top-0 left-0 right-0 z-10">
        <div className="flex items-center space-x-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="100"
            height="32"
            viewBox="0 0 1024 276.742"
          >
            <path
              d="M140.803 258.904c-15.404 2.705-31.079 3.516-47.294 5.676l-49.458-144.856v151.073c-15.404 1.621-29.457 3.783-44.051 5.945v-276.742h41.08l56.212 157.021v-157.021h43.511v258.904zm85.131-157.558c16.757 0 42.431-.811 57.835-.811v43.24c-19.189 0-41.619 0-57.835.811v64.322c25.405-1.621 50.809-3.785 76.482-4.596v41.617l-119.724 9.461v-255.39h119.724v43.241h-76.482v58.105zm237.284-58.104h-44.862v198.908c-14.594 0-29.188 0-43.239.539v-199.447h-44.862v-43.242h132.965l-.002 43.242zm70.266 55.132h59.187v43.24h-59.187v98.104h-42.433v-239.718h120.808v43.241h-78.375v55.133zm148.641 103.507c24.594.539 49.456 2.434 73.51 3.783v42.701c-38.646-2.434-77.293-4.863-116.75-5.676v-242.689h43.24v201.881zm109.994 49.457c13.783.812 28.377 1.623 42.43 3.242v-254.58h-42.43v251.338zm231.881-251.338l-54.863 131.615 54.863 145.127c-16.217-2.162-32.432-5.135-48.648-7.838l-31.078-79.994-31.617 73.51c-15.678-2.705-30.812-3.516-46.484-5.678l55.672-126.75-50.269-129.992h46.482l28.377 72.699 30.27-72.699h47.295z"
              fill="#d81f26"
            />
          </svg>
          <nav className="hidden md:flex space-x-4">
            <a href="#" className="hover:text-gray-300">
              Home
            </a>
            <a href="#" className="hover:text-gray-300">
              TV Shows
            </a>
            <a href="#" className="hover:text-gray-300">
              Movies
            </a>
            <a href="#" className="hover:text-gray-300">
              New & Popular
            </a>
            <a href="#" className="hover:text-gray-300">
              My List
            </a>
          </nav>
        </div>
        <div className="flex items-center space-x-4">
          <input
            type="search"
            placeholder="Search"
            className="px-2 py-1 bg-black border w-32 border-gray-700 rounded-md"
          />
          <img
            alt="User"
            className="rounded-full object-cover h-8 w-8 cursor-pointer hover:bg-slate-600"
            src="https://placehold.co/32x32"
          />
        </div>
      </header>

      {/* Detailed Content */}
      <section className="relative h-[calc(100vh-100px)] lg:h-screen w-full">
        <img
          alt="Featured Movie"
          className="h-full w-full object-fit"
          src={`http://image.tmdb.org/t/p/original/${selectedMovie?.backdrop_path}`}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent" />
        <div className="absolute bottom-1/4  left-8 lg:left-16 max-w-xl">
          <h1
            className="text-3xl lg:text-5xl font-bold mb-4"
            ref={animationParent}
          >
            {selectedMovie?.title}
          </h1>
          <p className="text-md lg:text-lg mb-6">
            <span className="hidden lg:inline">{selectedMovie?.overview}</span>
            <span className="lg:hidden">
              {selectedMovie?.overview.substring(0, 300)}
              {selectedMovie && selectedMovie.overview.length > 300 ? '...' : ''}
            </span>
          </p>
          <div className="flex space-x-4">
            <button className="flex bg-white text-black hover:bg-gray-200 hover:scale-125 transition-all duration-300  py-2 px-6 items-center justify-center  rounded-md">
              <Play className="mr-2 h-4 w-4" />
              Play
            </button>
            <button className="flex bg-white text-black hover:bg-gray-200 hover:scale-125 transition-all duration-300  py-2 px-6 items-center justify-center  rounded-md">
              <Info className="mr-2 h-4 w-4" />
              More Info
            </button>
          </div>
        </div>
      </section>

      {/* Movie Row */}
      <section className="px-16 py-8">
        <h2 className="text-2xl font-semibold mb-4">Popular on Netflix</h2>
        <div className="flex space-x-4 overflow-x-scroll pb-4">
          {movies?.map((movie) => (
            <button
              key={movie.id}
              onClick={() => setSelectedMovie(movie)}
              className="min-w-36 relative group"
            >
              <img
                alt={`Movie ${movie.title} poster`}
                className="rounded-md hover:scale-105 object-cover transition-transform duration-200 cursor-pointer"
                src={`http://image.tmdb.org/t/p/original/${movie.poster_path}`}
              />
              <span className="absolute bottom-0 lg:text-2xl text-md overflow-x-hidden rounded-sm left-0 right-0 bg-black bg-opacity-85 text-white text-center py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200 cursor-pointer">
                {movie.title}
              </span>
            </button>
          ))}
        </div>
      </section>
    </div>
  );
}
