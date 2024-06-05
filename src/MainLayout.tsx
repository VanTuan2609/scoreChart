import { Outlet } from "react-router-dom";
import MainHeader from "./MainHeader";
import MainSidebar from "./MainSidebar";

const MainLayout = () => {
  return (
    <div className="h-screen flex flex-col">
      <MainHeader />
      <div className="flex flex-grow">
        <MainSidebar />
        <div className="bg-[#f8f8f8] flex-grow rounded-lg mx-1 my-1">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
