import { MdOutlineSearchOff } from "react-icons/md";

function Searchbar({handleSearch}) {
  return (
    <div>
      <form onSubmit={handleSearch}>
        <label className="input input-bordered flex items-center gap-2">
          <input type="text" 
          name="search"
          className="grow" placeholder="Search Products" />
          <button><MdOutlineSearchOff /></button>

        </label>
      </form>
    </div>
  );
}

export default Searchbar;
