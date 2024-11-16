import { useForm } from "react-hook-form";

function AddProduct() {
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm();
  //   const navigate = useNavigate();
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div>
      <h1 className="text-2xl font-bold text-center mb-12">Add Product</h1>

      <form className="card-body" onSubmit={handleSubmit(onSubmit)}>
        <div className="flex gap-8 ">
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Title</span>
            </label>
            <input
              type="text"
              name="title"
              placeholder="Product Title"
              className="input input-bordered border-black"
              {...register("title", { required: true })}
            />
            {errors.title && (
              <p className="text-red-500 text-sm font-light">
                Title is required
              </p>
            )}
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Brand</span>
            </label>
            <input
              type="text"
              name="brand"
              placeholder="Product brand"
              className="input input-bordered border-black"
              {...register("brand", { required: true })}
            />
            {errors.brand && (
              <p className="text-red-500 text-sm font-light">
                Brand is required
              </p>
            )}
          </div>
        </div>
        <div className="flex gap-8 ">
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Price</span>
            </label>
            <input
              type="number"
              name="price"
              placeholder="Product price"
              className="input input-bordered border-black"
              {...register("price", { required: true })}
            />
            {errors.price && (
              <p className="text-red-500 text-sm font-light">
                Price is required
              </p>
            )}
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Stock</span>
            </label>
            <input
              type="number"
              name="stock"
              placeholder="Product stock Quantity"
              className="input input-bordered border-black"
              {...register("stock", { required: true })}
            />
            {errors.stock && (
              <p className="text-red-500 text-sm font-light">
                Stock is required
              </p>
            )}
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Category</span>
            </label>
            <input
              type="number"
              name="category"
              placeholder="Product category "
              className="input input-bordered border-black"
              {...register("category", { required: true })}
            />
            {errors.category && (
              <p className="text-red-500 text-sm font-light">
                Category is required
              </p>
            )}
          </div>
        </div>
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">Description</span>
          </label>
          <textarea
            type="text"
            name="description"
            placeholder="Product description "
            className="input input-bordered border-black"
            {...register("description", { required: true })}
          />
          {errors.description && (
            <p className="text-red-500 text-sm font-light">
              Description is required
            </p>
          )}
        </div>
        <div>
          <button className="btn w-full my-8 bg-primary text-white">
            Add Product
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddProduct;
