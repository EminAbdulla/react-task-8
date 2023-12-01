import React, { useState } from "react";
const Header = ({paginatedProducts,setData,data,orginal}) => {
  const handleChange = (e) => {
    console.log(paginatedProducts);
    let search = e.target.value.trim().toLowerCase();
    if (search == "") {
      setData([...orginal]);
    } else {
      let searchedItems = data.filter((item) =>
        item.name.trim().toLowerCase().includes(search)
      );
      setData([...searchedItems]);
    }
  };
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
       onChange={(e)=>handleChange(e)}
        placeholder="Search..." />
    </div>
  );
};

export default React.memo(Header);
