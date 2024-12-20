import axios from "axios";
import { useEffect, useState } from "react";
import {
  FaRegArrowAltCircleLeft,
  FaRegArrowAltCircleRight,
} from "react-icons/fa";
import FilterBar from "../Components/FilterBar";
import ProductCard from "../Components/ProductCard";
import Searchbar from "../Components/Searchbar";
import SortBy from "../Components/SortBy";
import Loading from "./Loading";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("asc");
  const [brand, setBrand] = useState("");
  const [category, setCategory] = useState("");
  const [uniqueBrand, setUniqueBrand] = useState([]);
  const [uniqueCategory, setUniqueCategory] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  // console.log(search);
  console.log(category);
  useEffect(() => {
    setLoading(true);
    const fec = async () => {
      axios
        .get(
          `http://localhost:4001/all-products?title=${search}&page=${page}&limit=${9}&sort=${sort}&brand=${brand}&category=${category}`
        )
        .then((res) => {
          setProducts(res.data.products);
          setUniqueBrand(res.data.brands);
          setUniqueCategory(res.data.categorys);
          setLoading(false);
          setTotalPages(Math.ceil(res.data.totalProducts/9))
          console.log(res.data.products);
        });
    };
    fec();
  }, [brand, category, search, sort,page]);

  const handleSearch = (e) => {
    e.preventDefault();
    // const s = e.target.search.value;
    setSearch(e.target.search.value);
    e.target.search.value = "";
    // s=""
  };

  const handleReset = () => {
    setSearch("");
    setSort("asc");
    setBrand("");
    setCategory("");
    window.location.reload();
  };

  const handlePageChange = (newPage) => {
    if (newPage > 0 && newPage <= totalPages) {
      setPage(newPage);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <div className="container mx-auto">
      <h1 className="my-8 text-2xl font-semibold text-center">All Products</h1>
      <div className="flex justify-between items-center w-full mb-5">
        <h1>
          <Searchbar handleSearch={handleSearch} />
        </h1>
        <h1>
          <SortBy setSort={setSort} />
        </h1>
      </div>
      <div className="grid grid-cols-12">
        <div className="col-span-2">
          <FilterBar
            setBrand={setBrand}
            setCategory={setCategory}
            handleReset={handleReset}
            uniqueBrand={uniqueBrand}
            uniqueCategory={uniqueCategory}
          />
        </div>
        <div className="col-span-10">
          {loading ? (
            <Loading />
          ) : (
            <>
              {products.length === 0 ? (
                <div className="w-full h-full flex items-center justify-center">
                  <h3 className="text-3xl font-bold">No Products Found</h3>
                </div>
              ) : (
                <div className="grid grid-cols-3 gap-4 ml-2">
                  {products?.map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>
              )}
            </>
          )}
        </div>
      </div>
      <div className="flex justify-center items-center gap-2 my-8">
        <button onClick={()=>handlePageChange(page-1)}>
          <FaRegArrowAltCircleLeft />
        </button>
        <p>
          {" "}
          page {page} of {totalPages}
        </p>
        <button onClick={()=>handlePageChange(page+1)}>
          <FaRegArrowAltCircleRight />
        </button>
      </div>
    </div>
  );
};

export default Products;
