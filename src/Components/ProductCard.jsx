/* eslint-disable react/prop-types */
const ProductCard = ({product}) => {
  
  // console.log(product)
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
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
