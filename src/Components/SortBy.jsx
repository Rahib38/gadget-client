function SortBy() {
  return (
    <div>
      <form>
        <label className="flex items-center gap-2">
          <select className="select select-bordered w-full ">
            <option value="asc">Low to high</option>
            <option value="desc">High to low</option>
          </select>
        </label>
      </form>
    </div>
  );
}

export default SortBy;
