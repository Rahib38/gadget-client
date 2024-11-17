import { MdOutlineSearchOff } from "react-icons/md";

function Searchbar() {
  return (
    <div>
      <form>
        <label className="input input-bordered flex items-center gap-2">
          <input type="text" className="grow" placeholder="Search Products" />
          <MdOutlineSearchOff />

        </label>
      </form>
    </div>
  );
}

export default Searchbar;
