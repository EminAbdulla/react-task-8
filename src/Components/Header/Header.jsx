import React, { useState } from "react";
const Header = ({handleSearch,paginatedProducts,setCurrentPage}) => {

  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        paddingTop: "20px",
      }}
    >
      <input
    //    onChange={(e)=>{handleSearch(e.target.value)}}
        placeholder="Search..." />
    </div>
  );
};

export default React.memo(Header);
