import { useForm } from "react-hook-form";
import axios from "axios";
import useAxios from "../../../hooks/useAxios/useAxios";
import useAuth from "../../../hooks/useAuth/useAuth";
const image_hosting_key = import.meta.env.VITE_image_key;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`

const MenuForm = () => {
  const {successToast} = useAuth();
  const axiosSecure = useAxios();
  const { register, handleSubmit,formState: { errors },reset } = useForm();
  const onSubmit = async (data) => {
    // console.log(data)
    const imageFile = {image: data.image[0]}
    const res = await axios.post(image_hosting_api,imageFile,{
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    });
    // const img = res.data.data?.display_url;
    const menuItem = {
      name: data.name,
      recipe: data.details,
      image: res.data.data?.display_url,
      category: data.category,
      price: parseFloat(data.price),
    }
    console.log(menuItem)
    //TODO: post data on database 
    axiosSecure.post(`/menu`,menuItem)
    .then(res => {
      if(res.data.acknowledged){
        successToast(`${menuItem?.name} has been added!`)
        reset({
          name: '',
          category: '',
          price: '',
          details: '',
          image: null,
        });
      }
    })
    .catch(err => console.log(err))
};

  return (
    <form onSubmit={handleSubmit(onSubmit)} className=" bg-gray-300 py-12 rounded-md w-9/12 mx-auto flex flex-col gap-7 my-5">
      <div className=" flex flex-col px-10">
        <label
          htmlFor=""
          className=" font-inter text-xl font-semibold text-[#444]"
        >
          Recipe name*
        </label>
        <input
        {...register("name",{required: true})}
          type="text"
          name="name"
          placeholder="Recipe name"
          className=" text-xl p-3 rounded-lg border"
        />
        {errors.name?.type === "required" && (
        <p role="alert" className=" text-xs text-red-600">Recipe name is required</p>
      )}
      </div>
      <div className=" flex w-full justify-between">
        <div className=" flex flex-col px-10 w-full">
          <label
            htmlFor=""
            className=" font-inter text-xl font-semibold text-[#444]"
          >
            Select Category*
          </label>
          <select {...register("category",{required: "Category is required"})} required className=" text-xl p-3 rounded-lg border ">
            <option value="">Select Category</option>
            <option value="salad">Salad</option>
            <option value="pizza">Pizza</option>
            <option value="drinks">Drinks</option>
            <option value="soup">Soup</option>
          </select>
          {errors.category?.type === "required" && (
        <p role="alert" className=" text-xs text-red-600">Category is required</p>
      )}
        </div>
        <div className=" flex flex-col px-10 w-full">
          <label
            htmlFor=""
            className=" font-inter text-xl font-semibold text-[#444]"
          >
            Price*
          </label>
          <input
          {...register("price",{required: true})}
            type="number"
            name="price"
            placeholder="Recipe name"
            className=" text-xl p-3 rounded-lg border"
          />
        {errors.price?.type === "required" && (
        <p role="alert" className=" text-xs text-red-600">Price is required</p>
      )}
        </div>
      </div>
      <div className=" flex flex-col px-10">
        <label
          htmlFor=""
          className=" font-inter text-xl font-semibold text-[#444]"
        >
          Recipe Details*
        </label>
        <textarea
        {...register("details",{required: true})}
          type="text"
          name="details"
          placeholder="Recipe Details"
          className=" text-xl p-3 rounded-lg border h-32"
        />
        {errors.details?.type === "required" && (
        <p role="alert" className=" text-xs text-red-600">Recipe Details is required</p>
      )}
      </div>
      <div className=" flex flex-col px-10">
      <input 
      {...register("image")}
      type="file"
      name="image"
      className="file-input file-input-bordered w-full max-w-xs" />
      </div>
      <div className="px-10">
      <button type="submit" className=" btn btn-warning hover:opacity-70 active:opacity-40">Submit</button>
      </div>
    </form>
  );
};

export default MenuForm;
