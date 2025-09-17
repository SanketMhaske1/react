import React from "react";
import "../../App.css";

function Serach({ serach, setSerach, handleSerach }) {
  return (
    <div className="serach-engine">
      <input
        value={serach}
        onChange={(e) => setSerach(e.target.value)}
        type="text"
        name="serach"
        className="city-serach"
        placeholder="Enter City Name..."
      />
      <button onClick={handleSerach} className="serach-btn">
        Serach
      </button>
    </div>
  );
}

export default Serach;
