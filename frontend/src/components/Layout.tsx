import { LayoutProps } from "../interfaces";
import NavBar from "./NavBar";

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col bg-websiteBgColor text-white">
      <NavBar />
      <div id="main" className="flex-grow">
        {children}
      </div>
    </div>
  );
};

export default Layout;
