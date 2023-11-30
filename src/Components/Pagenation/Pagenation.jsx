import React from "react";
import './pagenation.css'
const Pagenation = ({ data, postsPerPage, setCurrentPage, currentPage }) => {
  const pages = [];
  for (let index = 0; index < Math.ceil(data.length / postsPerPage); index++) {
    pages.push(index);
  }
  return (
    <div className="pages__button">
      {pages.map((page, index) => {
        return (
          <button key={index}
            className={index + 1 == currentPage ? "active" : ""}
            onClick={() => {
              setCurrentPage(index+1);
            }}
          >
            {index + 1}
          </button>
        );
      })}
    </div>
  );
};

export default Pagenation;
