import { BiLogOutCircle } from "react-icons/bi";
import { GrOverview } from "react-icons/gr";
import { MdOutlineHome, MdOutlineInventory2, MdOutlinePlaylistAddCircle } from "react-icons/md";
import { NavLink } from "react-router-dom";
import UseAuth from "../../Hooks/UseAuth";
import UseUserData from "../../Hooks/UseUserData";
const sellerRoutes = [
  {
    id:1,
    route:"/dashboard/my-products",
    title:"My Products",
    icon:<MdOutlineInventory2 />

  },
  {
    id:2,
    route:"/dashboard/add-products",
    title:"Add Products",
    icon:<MdOutlinePlaylistAddCircle />


  },
]


function Slider() {
  const userData = UseUserData()
  const {LogOut}=UseAuth()
  return (
    <div className="bg-gray-200 border-r-2 border-black min-h-screen px-8 py-16">
      <h3 className="text-3xl font-bold mb-8 font-mono">Gadget Shop</h3>
      <ul className="flex flex-col gap-2">
        <li className="p-2 border border-black rounded-md ">
          <NavLink
            className="flex justify-center items-center gap-2"
            to="/dashboard/overview"
          >
            <GrOverview />

            <p> overview</p>
          </NavLink>
        </li>



{userData.role ==="seller"&&sellerRoutes.map((route)=>(
       <li key={route.id} className="p-2 border border-black rounded-md">
       <NavLink
         className="flex justify-center items-center gap-2"
         to="/dashboard/overview"
       >
        <>{route.icon}</>

         <p>{route.title}</p>
       </NavLink>
     </li>
))}







        <li className="p-2 border border-black rounded-md">
          <NavLink
            className="flex justify-center items-center gap-2"
            to="/"
          >
            <MdOutlineHome />

            <p> Home</p>
          </NavLink>
        </li>
        <li className="p-2 border border-black rounded-md" onClick={()=>LogOut()}>
          <NavLink
            className="flex justify-center items-center gap-2"
            to="/dashboard/overview"
          >
            <BiLogOutCircle />

            <p> Log out</p>
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default Slider;
