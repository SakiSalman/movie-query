import React from "react";
import { Circles } from "react-loader-spinner";

const Loader = () => {
  return (
    <div className="loader-wrapper">
      <Circles
        height="70"
        width="70"
        color="#0d6efd"
        ariaLabel="circles-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
      <div className="div">
      Loading ...
      </div>
    </div>
  );
};

export default Loader;
