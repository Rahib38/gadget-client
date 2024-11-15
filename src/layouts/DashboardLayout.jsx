import { Outlet } from "react-router-dom";
import Slider from "../Components/DashboardComponents/Slider";

const DashboardLayout = () => {
  return (
    <div className="grid grid-cols-12">
      <div className="col-span-2">
        <Slider></Slider>
      </div>
      <div className="col-span-10">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default DashboardLayout;
