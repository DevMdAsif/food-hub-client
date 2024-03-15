import { useEffect, useState } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { ImCross } from "react-icons/im";

function AddItem() {
  const [image, setImage] = useState(null);
  const [error, setError] = useState(null);
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();

  // get image from user

  const pic = watch("image");
  useEffect(() => {
    if (pic && pic.length > 0) {
      setImage(URL.createObjectURL(pic[0]));
    }
  }, [pic]);

  // upload image to imgbb and save product to database

  const onSubmit = async (data) => {
    const { name, category, price, description, image } = data;
    const formData = new FormData();
    formData.append("image", image[0]);

    const newPrice = Number(price);

    try {
      const imagebbRes = await axios.post(
        `https://api.imgbb.com/1/upload?key=${
          import.meta.env.VITE_IMAGEBB_API_KEY
        }`,
        formData
      );
      if (imagebbRes.status === 200) {
        try {
          const DBRes = await axios.post("/api/products", {
            name,
            category,
            price: newPrice,
            image: imagebbRes.data.data.display_url,
            description,
          });
          if (DBRes.status === 200) {
            console.log(DBRes);
            setImage(null);
            setError(null);
            reset();
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "product added successfully",
              showConfirmButton: false,
              timer: 1500,
            });
          }
        } catch (error) {
          setError(
            error.message || "Failed to create product. Please try again later."
          );
        }
      } else {
        throw new Error("Image upload failed");
      }
    } catch (error) {
      console.error(error);
      setError(error.message || "An error occurred. Please try again later.");
    }
  };

  return (
    <div className="text-white pt-10 px-5">
      <form className="grid grid-cols-3" onSubmit={handleSubmit(onSubmit)}>
        {/* get image from user */}
        <div>
          <div className="border border-[#1e293b] p-3 w-[315px] h-[315px] rounded-lg">
            <label htmlFor="input-image" className="block">
              <div className="w-72 h-72 border-2 border-[#f58220] border-dotted rounded-xl flex items-center justify-center">
                {image ? (
                  <div className="relative w-full h-full">
                    <img
                      className="w-full h-full pb-10 object-cover rounded-xl"
                      src={image}
                      alt=""
                    />
                    <i
                      className="absolute bottom-3 left-1/2 cursor-pointer"
                      onClick={() => setImage(null)}
                    >
                      <ImCross className="text-white" />
                    </i>
                  </div>
                ) : (
                  <p className="text-[#f58220]">Upload Image</p>
                )}
              </div>

              <input
                className="hidden"
                type="file"
                id="input-image"
                accept="image/*"
                {...register("image", { required: true })}
              />
            </label>
          </div>
          {errors.image?.type === "required" && (
            <span className="text-sm text-red-700">This field is required</span>
          )}
        </div>

        <div className=" ml-4 col-span-2">
          <div className="mb-5">
            <label className="text-white mb-3">Product Name</label>
            <input
              type="text"
              placeholder="Recipe name"
              name="name"
              className="bg-[#040717] border border-[#1e293b] text-white sm:text-sm rounded-lg block w-full p-2.5 outline-none focus:border-[#f58220] placeholder:text-[#94a3b8]"
              {...register("name", { required: true })}
            />
            {errors.name?.type === "required" && (
              <span className="text-sm text-red-700">
                This field is required
              </span>
            )}
          </div>
          <div className="grid grid-cols-2 gap-6">
            <div className="relative z-0 w-full mb-5 group">
              <label className="text-white mb-3">Product Category</label>
              <select
                {...register("category", { required: true })}
                className="w-full text-[#e2e4e9] bg-[#020617] py-3 focus:border-[#f58220] border border-[#1e293b]"
              >
                <option value="Coffee">Coffee</option>
                <option value="Burger">Burger</option>
                <option value="Noodles">Noodles</option>
                <option value="Pizza">Pizza</option>
                <option value="Dessert">Dessert</option>
              </select>
            </div>
            <div className="relative z-0 w-full mb-5 group">
              <label className="text-white mb-3">Price</label>
              <input
                type="number"
                name="price"
                step="any"
                placeholder="Price"
                id="password"
                className="bg-[#040717] border border-[#1e293b] text-white sm:text-sm rounded-lg block w-full p-2.5 outline-none focus:border-[#f58220] placeholder:text-[#94a3b8]"
                {...register("price", { required: true })}
              />
              {errors.price?.type === "required" && (
                <span className="text-sm text-red-700">
                  This field is required
                </span>
              )}
            </div>
          </div>
          <div className="relative z-0 w-full mb-5 group">
            <label className="text-white mb-3">Description</label>
            <textarea
              {...register("description", { required: true })}
              placeholder="Short description"
              rows="5"
              className="bg-[#040717] border border-[#1e293b] text-white sm:text-sm rounded-lg block w-full p-2.5 outline-none focus:border-[#f58220] placeholder:text-[#94a3b8]"
            ></textarea>
            {errors.description?.type === "required" && (
              <span className="text-sm text-red-700">
                This field is required
              </span>
            )}
          </div>
          <button
            type="submit"
            className="mt-5 text-white bg-[#f58220] hover:bg-orange-700 focus:outline-none font-medium duration-500 rounded-lg text-base w-full px-5 py-2.5 text-center"
          >
            Add Item
          </button>
        </div>
      </form>
      {error && <p className="text-red-500">{error}</p>}
    </div>
  );
}

export default AddItem;
