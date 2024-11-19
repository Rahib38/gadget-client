/* eslint-disable react/prop-types */
import { LuFilter } from "react-icons/lu";
import { MdOutlineResetTv } from "react-icons/md";

const FilterBar = ({
  setBrand,
  setCategory,
  handleReset,
  uniqueBrand,
  uniqueCategory,
}) => {
  return (
    <div className="bg-gray-200 h-full min-h-screen p-4  border-black border-r-2">
      <div className="flex items-center gap-1">
        <LuFilter size={20} />
        <h2 className="text-xl font-semibold">Filters</h2>
      </div>
      <div className="mt-8 space-y-2  flex flex-col items-center gap-2">
        <div className="w-48">
          <select
            className="select select-bordered w-full "
            onChange={(e) => setBrand(e.target.value)}
          >
            <option value="">Brands</option>
            {uniqueBrand?.map((brand) => (
              <option key={brand} value={brand}>
                {brand}
              </option>
            ))}
          </select>
        </div>
        <div className="w-48">
          <select
            className="select select-bordered w-full "
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="">Category</option>
            {uniqueCategory?.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>

        <button
          onClick={handleReset}
          className="btn w-44 bg-green-200 hover:bg-green-200 flex items-center "
        >
          Reset
          <MdOutlineResetTv />
        </button>
      </div>
    </div>
  );
};

export default FilterBar;
