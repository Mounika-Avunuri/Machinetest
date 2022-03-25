import React from "react";

function Pagination({ perpage, totaluser, paginate }) {
  const paginateNum = [];

  for (let i = 1; i <= Math.ceil(totaluser / perpage); i++) {
    paginateNum.push(i);
  }

  return (
    <>
      <div 
    style={{textAlign:"right",marginRight:"200px",marginTop: "80px"}}
      >
        {paginateNum.map((number) => (
          <a
            onClick={() => paginate(number)}
            className="my-4"
            style={{
              border: "2px solid black",
              padding: "10px",
              color: "black",
              backgroundColor: "#a3bce3",
            }}
          >
            {number}
          </a>
        ))}
      </div>
    </>
  );
}

export default Pagination;