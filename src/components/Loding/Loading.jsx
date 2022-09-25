import React from "react";
import loading from "./Loading.json";
import Lottie from "react-lottie";

const Loading = () => {
  const loadingoption = {
    loop: true,
    autoplay: true,
    animationData: loading,
    rendererSettings: {
      preserverAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div>
      <Lottie options={loadingoption} height={300} width={300}></Lottie>
    </div>
  );
};

export default Loading;
