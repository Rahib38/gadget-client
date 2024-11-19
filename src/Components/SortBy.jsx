function SortBy({setSort}) {
  return (
    <div>
   
          <select className="select select-bordered w-full " onChange={(e)=>setSort(e.target.value)}>
            <option value="asc">Low to high</option>
            <option value="desc">High to low</option>
          </select>
      
    </div>
  );
}

export default SortBy;
