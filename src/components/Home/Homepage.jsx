import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import "./Homepage.css";
import loadinAni from "../Loding/Loading.json";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteproduct,
  getproductsdata,
} from "../redux/Homepageredux/home-action";
import { store } from "../redux/store";
import Filter from "../Sort/Filter";
import Loading from "../Loding/Loading";
import Lottie from "react-lottie";
import { Link } from "react-router-dom";
import { addtofav } from "../redux/Addfav/action";

const Homepage = () => {
  const dispatch = useDispatch();
  const [fav, setfav] = useState([]);
  const [filter, setfilter] = useState("");
  const { products, loading } = useSelector((store) => store.products);
  const { categories } = useSelector((store) => store.categories);
  const { favitems } = useSelector((store) => store.fav);
 
  const loadingoption = {
    loop: true,
    autoplay: true,
    animationData: loadinAni,
    rendererSettings: {
      preserverAspectRatio: "xMidYMid slice",
    },
  };

  const addfav = (data) => {
    dispatch(addtofav(data));
    alert("Added");
  };

  useEffect(() => {
    dispatch(getproductsdata());
  }, []);

  return (
    <>
      <Filter filter={filter} setfilter={setfilter}></Filter>
      {loading && (
        <Lottie options={loadingoption} height={300} width={300}></Lottie>
      )}
      <div className="bg-white">
        <div className=" mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
          <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {products
              .filter((product) => product.category.includes(filter))
              .map((product) => (
                <div key={product._id} className="group relative">
                  <Link to={`/detail/${product._id}`}>
                    <div className="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-80">
                      <img
                        src={product.avatar}
                        alt="product-img"
                        className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                      />
                    </div>

                    <div className="mt-4 flex justify-between">
                      <div>
                        <h3 className="text-sm text-gray-700">
                          <p>
                            <span
                              aria-hidden="true"
                              className="absolute inset-0"
                            />
                            {product.name}
                          </p>
                        </h3>
                        <p className="mt-1 text-sm text-gray-500">
                          {product.category}
                        </p>
                      </div>
                      <p className="text-sm font-medium text-gray-900">
                        ₹{product.price}
                      </p>
                    </div> 
                    </Link> 
                  <button
                    onClick={() => {
                      dispatch(deleteproduct(product._id));
                    }}
                    className="button-60"
                    role="button"
                  >
                    Delete
                  </button>
                  <button
                    onClick={() => {
                      addfav(product);
                    }}
                    className="button-60"
                    role="button"
                  >
                    Wishlist
                  </button>
                </div>
              ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Homepage;
