import React, { useRef } from "react";

function ScrollToSections() {
  const ref = useRef(null);
  const handleScrollToSections = () => {
    let pos = ref.current.getBoundingClientRect().top;
    window.scrollTo({
      top: pos,
      behavior: "smooth",
    });
  };
  const data = [
    {
      label: "First Card",
      style: {
        width: "100%",
        height: "600px",
        background: "red",
      },
    },
    {
      label: "Second Card",
      style: {
        width: "100%",
        height: "600px",
        background: "grey",
      },
    },
    {
      label: "Third Card",
      style: {
        width: "100%",
        height: "600px",
        background: "blue",
      },
    },
    {
      label: "Fourth Card",
      style: {
        width: "100%",
        height: "600px",
        background: "green",
      },
    },
    {
      label: "Fifth Card",
      style: {
        width: "100%",
        height: "600px",
        background: "orange",
      },
    },
  ];
  return (
    <div>
      <h1>Scroll To Particaluar Sections</h1>
      <button onClick={handleScrollToSections}>Click To Scroll</button>
      {data.map((dataItem, index) => (
        <div ref={index == 3 ? ref : null}>
          <div style={dataItem.style}>
            <h3>{dataItem.label}</h3>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ScrollToSections;
