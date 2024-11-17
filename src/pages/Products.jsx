import Searchbar from "../Components/Searchbar";
import SortBy from "../Components/SortBy";

const Products = () => {
  return (
    <div className="container mx-auto">
      <h1 className="my-8 text-2xl font-semibold text-center">All Products</h1>
      <div className="flex justify-between items-center w-full mb-5">
        <h1><Searchbar/></h1>
        <h1><SortBy/></h1>
      </div>
      <div className="grid grid-cols-12">
        <div className="col-span-2">filterBars</div>
        <div className="col-span-10">Products</div>
      </div>
    </div>
  );
};

export default Products;
