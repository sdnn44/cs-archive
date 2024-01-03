import React from "react";
import { MagnifyingGlass } from "react-loader-spinner";
import './Loader.css';

export const Loading = () => {
  return (
    <div className="loader-container">
      <MagnifyingGlass
        visible={true}
        height="80"
        width="80"
        ariaLabel="MagnifyingGlass-loading"
        wrapperStyle={{}}
        wrapperClass="MagnifyingGlass-wrapper"
        glassColor="#c0efff"
        color="#7a7a8c"
      />
    </div>
  );
};
