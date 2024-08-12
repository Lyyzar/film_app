import { useNavigate } from "react-router-dom";

function NavBar() {
  const token = localStorage.getItem("token");

  const navigate = useNavigate();

  const handleNavigate = (path: string) => {
    navigate(path);
  };

  return (
    <nav className="bg-navbarBgColor p-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center flex-shrink-0 text-white mr-6">
          <span className="font-semibold text-xl">My Film App</span>
        </div>
        <div className="hidden lg:block">
          <div className="flex space-x-4 text-navbarMenuTextColor">
            <a
              href="/"
              onClick={(e) => {
                e.preventDefault();
                handleNavigate("/");
              }}
              className="hover:bg-navbarMenuHoverColor hover:text-white px-3 py-2 rounded-md text-lg font-medium"
            >
              Home
            </a>
            <a
              href="/about"
              onClick={(e) => {
                e.preventDefault();
                handleNavigate("/about");
              }}
              className="hover:bg-navbarMenuHoverColor hover:text-navbarMenuHoverTextColor px-3 py-2 rounded-md text-lg font-medium"
            >
              About
            </a>
            <a
              href="/services"
              onClick={(e) => {
                e.preventDefault();
                handleNavigate("/services");
              }}
              className="hover:bg-navbarMenuHoverColor hover:text-navbarMenuHoverTextColor px-3 py-2 rounded-md text-lg font-medium"
            >
              Services
            </a>
            {!token && (
              <a
                href="/profile"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavigate("/auth/login");
                }}
                className="hover:bg-navbarMenuHoverColor hover:text-navbarMenuHoverTextColor px-3 py-2 rounded-md text-lg font-medium"
              >
                Login
              </a>
            )}
            {token && (
              <a
                href="/profile"
                onClick={(e) => {
                  e.preventDefault();
                  //handleNavigate("/auth/login");
                }}
                className="hover:bg-navbarMenuHoverColor hover:text-navbarMenuHoverTextColor bg-red-400 shadow-xl px-3 py-2 rounded-md text-lg font-medium"
              >
                BK
              </a>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
export default NavBar;
