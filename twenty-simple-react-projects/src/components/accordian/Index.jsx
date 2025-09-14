import React, { useState } from "react";
import data from "./data";
import "./styles.css";

function Index() {
  const [singleSelected, setSingleSelected] = useState(null);
  const [currentType, setCurrentType] = useState("single");
  const [multiSelected, setMultiSelected] = useState([]);

  const clickHandler = (id) => {
    if (currentType === "single") {
      setSingleSelected(id);
    } else {
      if (multiSelected.includes(id)) {
        const currentData = multiSelected.filter(
          (currentId) => currentId !== id
        );
        setMultiSelected(currentData);
      } else {
        setMultiSelected((prev) => [...prev, id]);
      }
    }
  };
  const changeTypeHandler = () => {
    setCurrentType(currentType === "single" ? "multiSingle" : "single");
    setMultiSelected([]);
    setSingleSelected(null);
  };

  return (
    <div className="wrapper">
      <button onClick={changeTypeHandler}>
        {currentType === "single"
          ? "Enable Multi Selection"
          : "Enable Single Selection"}
      </button>
      <div className="accordian">
        {data && data.length > 0 ? (
          data.map((dataItem) => {
            return (
              <div className="item" key={dataItem.id}>
                <div
                  onClick={() => clickHandler(dataItem.id)}
                  className="title"
                >
                  <h3>{dataItem.question}</h3>
                  <span>+</span>
                </div>
                <div className="content">
                  {(currentType === "single" &&
                    dataItem.id === singleSelected) ||
                  (currentType === "multiSingle" &&
                    multiSelected.includes(dataItem.id))
                    ? dataItem.answer
                    : null}
                </div>
              </div>
            );
          })
        ) : (
          <div>Data Not Found</div>
        )}
      </div>
    </div>
  );
}

export default Index;
