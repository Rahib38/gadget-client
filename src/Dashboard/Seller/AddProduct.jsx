import axios from "axios";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import UseAuth from "../../Hooks/UseAuth";

function AddProduct() {
  const { user } = UseAuth();
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm();
  //   const navigate = useNavigate();
  const onSubmit = (data) => {
    const title = data.title;
    const brand = data.brand;
    const price = parseFloat(data.price);
    const stock = parseFloat(data.stock);
    const imageURL = data.imageURL;
    const category = data.category;
    const description = data.description;
    const sellerEmail = user.email;
    const product = {
      title,
      brand,
      price,
      stock,
      imageURL,
      category,
      description,
      sellerEmail,
    };
    const token = localStorage.getItem("access-token");
    axios.post("http://localhost:4001/add-products", product, {
        headers: {
          authorization: ` Bearer ${token}`,
        },
      })
      .then((res) => {
        if (res.data.insertedId) {
            Swal.fire({
              position: "center",
              icon: "success",
              title: "product add success fully",
              showConfirmButton: false,
              timer: 1500,
            });
            
          }
      });
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
              type="text"
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
              <span className="label-text">Product Image</span>
            </label>
            <input
              type="text"
              name="imageURL"
              placeholder="Product imageURL "
              className="input input-bordered border-black"
              {...register("imageURL", { required: true })}
            />
            {errors.imageURL && (
              <p className="text-red-500 text-sm font-light">
                Product Image is required
              </p>
            )}
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
