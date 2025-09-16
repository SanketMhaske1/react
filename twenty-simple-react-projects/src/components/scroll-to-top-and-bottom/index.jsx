import React, { useRef } from "react";
import UseFetch from "../use-fetch";

function ScrollToTopAnsBottom() {
  const { data, errorMessage, pending } = UseFetch(
    "https://dummyjson.com/products?limit=100",
    {}
  );

  const ref = useRef(null);

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };
  const handleScrollToBottom = () => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };

  if (pending) return <div>Data is Loading ! Wait</div>;
  if (errorMessage !== null) return <div>Error {errorMessage}</div>;

  return (
    <div>
      <h1>Scroll To Top And Bottom Feature</h1>
      <h3>This is the top Section</h3>
      <button onClick={handleScrollToBottom}>Scroll To Bottom</button>
      <ul>
        {data && data.products && data.products.length
          ? data.products.map((dataItem) => {
              return <li key={dataItem.title}>{dataItem.title}</li>;
            })
          : null}
      </ul>
      <button onClick={handleScrollToTop}>Scroll To Top</button>
      <div ref={ref}>
        <h3>This is the bottom Section</h3>
      </div>
    </div>
  );
}

export default ScrollToTopAnsBottom;
