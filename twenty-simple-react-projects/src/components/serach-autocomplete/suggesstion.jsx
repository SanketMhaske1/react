import React from "react";

function Suggesstion({ data, handleClick }) {
  return (
    <div>
      {data && data.length
        ? data.map((item, index) => (
            <li onClick={handleClick} key={index}>
              {item}
            </li>
          ))
        : null}
    </div>
  );
}

export default Suggesstion;
