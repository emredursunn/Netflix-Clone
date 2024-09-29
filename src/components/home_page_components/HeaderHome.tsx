import { Link } from "react-router-dom";

const HeaderHome = () => {
  return (
    <header className="flex items-center justify-between px-4 py-2 bg-gradient-to-b from-black to-transparent absolute top-0 left-0 right-0 z-10">
      <div className="flex items-center space-x-4">
        <Link to={"/"}>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
          alt="netflix logo"
          className="w-36 md:w-48 md:h-16 h-12"
          />
          </Link>
        <nav className="hidden md:flex space-x-4">
          <ul className="flex space-x-4">
            <li>
              <a href="#" className="hover:text-gray-300">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300">
                TV Shows
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300">
                Movies
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300">
                New & Popular
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300">
                My List
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <div className="flex items-center space-x-4">
        <form action="">
          <label htmlFor="search" className="sr-only">
            Search
          </label>
          <input
            type="search"
            id="search"
            placeholder="Search"
            className="px-2 py-1 bg-black border w-32 border-gray-700 rounded-md"
          />
        </form>
        <img
          alt="User"
          className="rounded-full object-cover h-8 w-8 cursor-pointer hover:bg-slate-600"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFCzxivJXCZk0Kk8HsHujTO3Olx0ngytPrWw&s"
        />
      </div>
    </header>
  );
};

export default HeaderHome;
