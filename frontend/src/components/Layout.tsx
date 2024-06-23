import { useQuery, useQueryClient } from "@tanstack/react-query";
import { LayoutProps } from "../interfaces";
import NavBar from "./NavBar";
import { getUser } from "../routes/api";

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const queryClient = useQueryClient();

  const {
    data: users,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["user"],
    queryFn: getUser,
  });

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error</div>;

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
