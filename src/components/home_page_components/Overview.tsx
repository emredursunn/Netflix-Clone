import { Movie } from "../../types/Movie";
import { Info, Play } from "lucide-react";

type Props = {
    selectedMovie?:Movie
}

const Overview = ({selectedMovie}:Props) => {
  return (
    <div className="absolute bottom-1/4  left-8 lg:left-16 max-w-xl">
      <h1 className="text-3xl lg:text-5xl font-bold mb-4">
        {selectedMovie?.title}
      </h1>
      <p className="text-md lg:text-lg mb-6">
        <span className="hidden lg:inline">{selectedMovie?.overview}</span>
        <span className="lg:hidden">
          {selectedMovie?.overview.substring(0, 300)}
          {selectedMovie && selectedMovie.overview.length > 300 ? "..." : ""}
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
  );
};

export default Overview;
