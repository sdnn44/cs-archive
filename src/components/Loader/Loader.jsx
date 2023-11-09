import React from "react";
import { MagnifyingGlass } from "react-loader-spinner";

export const Loading = () => {

  return (
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
  );

};
