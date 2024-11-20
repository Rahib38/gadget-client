import axios from "axios";
import UseUserData from "../Hooks/UseUserData";

/* eslint-disable react/prop-types */
const ProductCard = ({product}) => {
  const userData = UseUserData()
  const userEmail = userData.email;
  console.log(userEmail)
  // console.log(product)


  const handleWishlist =async ()=>{
 await axios.patch("http://localhost:4001/wishlist/add",{
    userEmail:userEmail,
    productId:product._id
  })
  .then((res)=>console.log(res.data))
  }
  return (
    <div >
      <div className="">
        <figure>
          <img
             
            src={product?.imageURL}
            alt="product"
          />
        </figure>
        <div className="p-2">
          <h2 className="text-xl font-semibold">{product?.title}</h2>
          <h2 className="text-lg">{product?.brand}</h2>
          <h2 className="text-sm">Price: $<span className="text-red-600">{product?.price
          }</span></h2>
          <h2 className="text-sm">Price: $<span className="text-red-600 ">{product?.stock
          }</span></h2>
          <p>{product?.category}</p>
          <p>{product?.description}</p>
          <div className="">
            <button onClick={handleWishlist} className="btn btn-primary">Add to Wishlist</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
