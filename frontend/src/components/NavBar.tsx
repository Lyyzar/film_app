import { FilmIcon } from "@heroicons/react/24/solid";
import { Routes, useNavigate } from "react-router-dom";

function NavBar() {
  const navigate = useNavigate();

  const handleNavigate = (path: string) => {
    navigate(path);
  };

  return (
    <nav className="bg-orange-800 p-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center flex-shrink-0 text-white mr-6">
          <span className="font-semibold text-xl">My Film App</span>
        </div>
        <div className="hidden lg:block">
          <div className="flex space-x-4">
            <a
              href="/"
              onClick={(e) => {
                e.preventDefault();
                handleNavigate("/");
              }}
              className="text-orange-300 hover:bg-orange-700 hover:text-white px-3 py-2 rounded-md text-lg font-medium"
            >
              Home
            </a>
            <a
              href="/about"
              onClick={(e) => {
                e.preventDefault();
                handleNavigate("/about");
              }}
              className="text-orange-300 hover:bg-orange-700 hover:text-white px-3 py-2 rounded-md text-lg font-medium"
            >
              About
            </a>
            <a
              href="/services"
              onClick={(e) => {
                e.preventDefault();
                handleNavigate("/services");
              }}
              className="text-orange-300 hover:bg-orange-700 hover:text-white px-3 py-2 rounded-md text-lg font-medium"
            >
              Services
            </a>
            <a
              href="/profile"
              onClick={(e) => {
                e.preventDefault();
                handleNavigate("/profile");
              }}
              className="text-orange-300 hover:bg-orange-700 hover:text-white px-3 py-2 rounded-md text-lg font-medium"
            >
              Profile
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
export default NavBar;
