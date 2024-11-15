import { BiLogOutCircle } from "react-icons/bi";
import { GrOverview } from "react-icons/gr";
import { MdOutlineHome } from "react-icons/md";
import { NavLink } from "react-router-dom";

function Slider() {
  return (
    <div className="bg-gray-200 border-r-2 border-black min-h-screen px-8 py-16">
      <h3 className="text-3xl font-bold mb-8 font-mono">Gadget Shop</h3>
      <ul className="flex flex-col gap-2">
        <li className="p-2 border border-black rounded-md ">
          <NavLink className="flex justify-center items-center gap-2" to="/dashboard/overview">
            <GrOverview />

            <p> overview</p>
          </NavLink>
        </li>
        {/* <li>
          <Link to="/">My products</Link>
        </li>
        <li>
          <Link to="/">Add Products</Link>
        </li> */}
     <li className="p-2 border border-black rounded-md">
          <NavLink className="flex justify-center items-center gap-2" to="/dashboard/overview">
          <MdOutlineHome />


            <p> Home</p>
          </NavLink>
        </li>
        <li className="p-2 border border-black rounded-md">
          <NavLink className="flex justify-center items-center gap-2" to="/dashboard/overview">
          <BiLogOutCircle />


            <p> Log out</p>
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default Slider;
