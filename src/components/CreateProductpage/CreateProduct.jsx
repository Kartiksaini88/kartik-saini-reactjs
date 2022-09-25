import axios from "axios";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { getproductsdata } from "../redux/Homepageredux/home-action";

export default function CreateProduct() {
  const [form, setform] = useState({});
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handlechange = (e) => {
    const { value, name } = e.target;

    setform({
      ...form,
      [name]: value,
    });
  };

  const handlesubmit = (e) => {
    e.preventDefault();
    const token = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InNhaW5pa2FydGlrODJAZ21haWwuY29tIiwiZ2l0aHViIjoiaHR0cHM6Ly9naXRodWIuY29tL0thcnRpa3NhaW5pODgiLCJpYXQiOjE2NjM5NTEzODgsImV4cCI6MTY2NDM4MzM4OH0.BxOKt88vdVdqVETuEVPJ4Mg3GRfNNvbibOeB_nkpxHo`;
    const postdata = {
      method: "POST",
      url: `https://upayments-studycase-api.herokuapp.com/api/products`,
      headers: {
        Authorization: `Bearer ${token}`,
      },
      data: form,
    };

    axios
      .request(postdata)
      .then((res) => {
        if (res.data.message == "Success") {
          dispatch(getproductsdata());
          alert("Created");
          navigate("/");
        } else {
          alert("Error");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <div className="hidden sm:block" aria-hidden="true">
        <div className="py-5">
          <div className="border-t border-gray-200" />
        </div>
      </div>

      <div className="mt-10 sm:mt-0">
        <div className="md:grid md:grid-cols-3 md:gap-6">
          <div className="md:col-span-1">
            <div className="px-4 sm:px-0">
              <h3 className="text-lg font-medium leading-6 text-gray-900">
                Product Information
              </h3>
              <p className="mt-1 text-sm text-gray-600">
                Enter all the product details in the form.
              </p>
            </div>
          </div>
          <div className="mt-5 md:col-span-2 md:mt-0">
            <form action="#" method="POST" onSubmit={handlesubmit}>
              <div className="overflow-hidden shadow sm:rounded-md">
                <div className="bg-white px-4 py-5 sm:p-6">
                  <div className="grid grid-cols-6 gap-6">
                    <div className="col-span-6 sm:col-span-3">
                      <label
                        htmlFor="Name"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Name
                      </label>
                      <input
                        required={true}
                        onChange={handlechange}
                        type="text"
                        name="name"
                        id="Name"
                        placeholder="Enter the product Name"
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-3">
                      <label
                        htmlFor="Price"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Price
                      </label>
                      <input
                        required={true}
                        onChange={handlechange}
                        type="number"
                        name="price"
                        id="Price"
                        placeholder="Enter the product Price"
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-4">
                      <label
                        htmlFor="email-address"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Developer's Email
                      </label>
                      <input
                        required={true}
                        onChange={handlechange}
                        type="email"
                        value={form.email}
                        name="developerEmail"
                        id="developerEmail"
                        autoComplete="email"
                        placeholder="Enter your Email"
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-3">
                      <label
                        htmlFor="country"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Category
                      </label>
                      <select
                        required={true}
                        onChange={handlechange}
                        id="category"
                        name="category"
                        autoComplete="category-name"
                        className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                      >
                        <option>Select</option>
                        <option value={"Electronics"}>Electronics</option>
                        <option value={"Clothing"}>Clothing</option>
                        <option value={"Accessories"}>Accessories</option>
                        <option value={"Furniture"}>Furniture</option>
                        <option value={"Hobby"}>Hobby</option>
                      </select>
                    </div>

                    <div className="col-span-6">
                      <label
                        htmlFor="Picture"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Product's Image
                      </label>
                      <input
                        required={true}
                        onChange={handlechange}
                        type="text"
                        name="avatar"
                        id="avatar"
                        placeholder="Paste Product's Image URL"
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="about"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Description
                      </label>
                      <div className="mt-1">
                        <textarea
                          required={true}
                          onChange={handlechange}
                          id="description"
                          name="description"
                          rows={3}
                          className="mt-1 block  rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                          placeholder="Write something about the product..."
                          defaultValue={""}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 px-4 py-3 text-right sm:px-6">
                  <button
                    type="submit"
                    className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                  >
                    Save
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
