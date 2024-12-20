import { NavLink } from "react-router-dom";
import UseAuth from "../../Hooks/UseAuth";
import BadgeRoundedFullBaseIcon from "./BadgeRoundedFullBaseIcon";

const UserDropDown = () => {
  const { user, LogOut } = UseAuth();
  const handleLogout = () => {
    LogOut();
  };
  return (
    <div>
      <div className="dropdown dropdown-bottom dropdown-end">
        <div tabIndex={0} className="flex justify-center items-center gap-2">
          <div className="avatar online">
            <div className="w-12 rounded-full">
              <img
                src={`${
                  user?.photoURL ||
                  "https://cdn.pixabay.com/photo/2018/11/13/21/43/avatar-3814049_1280.png"
                }`}
              />
            </div>
          </div>
          <BadgeRoundedFullBaseIcon></BadgeRoundedFullBaseIcon>
        </div>
        <ul
          tabIndex={0}
          className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow"
        >
          <li>
            <NavLink to="/dashboard/overview">Dashboard</NavLink>
          </li>
          <li>
            <button
              onClick={handleLogout}
              className="btn btn-primary btn-outline btn-sm"
            >
              Log out
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default UserDropDown;
