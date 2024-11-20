import { MdOutlineNotificationAdd } from "react-icons/md";
import UseUserData from "../../Hooks/UseUserData";

export default function BadgeRoundedFullBaseIcon() {
  const userData = UseUserData();
  console.log(userData);
  return (
    <>
      <div>
        <div className="text-left font-bold ">
          <div className="badge absolute -mt-2 ml-3">{userData?.wishlist?.length}</div>
        </div>
        <div className="relative ">
          <MdOutlineNotificationAdd size={20} />
        </div>
      </div>
    </>
  );
}
