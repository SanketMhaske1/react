import React, { useEffect, useState } from "react";
import "./styles.css";

function ScrollIndicator({ url }) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [scrollPercentage, setScrollPercentage] = useState(0);

  async function fetchData() {
    try {
      setLoading(true);
      const response = await fetch(`${url}`);
      const data = await response.json();

      if (data && data.products && data.products.length > 0)
        setData(data.products);
      setLoading(false);
    } catch (error) {
      console.log("Fail To fetch Data", error.message);
      setLoading(false);
      setErrorMessage(error.message);
    }
  }

  function handleScollPercentage() {
    const howMuchScrolled =
      document.body.scrollTop || document.documentElement.scrollTop;
    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;

    setScrollPercentage((howMuchScrolled / height) * 100);
  }

  useEffect(() => {
    fetchData(url);
  }, [url]);

  useEffect(() => {
    window.addEventListener("scroll", handleScollPercentage);
    return window.removeEventListener("scroll", () => {});
  }, []);

  if (loading) return <div>Loading data! Please wait</div>;
  if (errorMessage !== "") return <div>Error occured!{errorMessage}</div>;

  return (
    <div>
      <div className="top-container">
        <h1>Custome Scroll Indicator</h1>
        <div className="scroll-progress-tracking-container">
          <div
            className="current-progress-bar"
            style={{ width: `${scrollPercentage}%` }}
          ></div>
        </div>
      </div>
      <div className="data-container">
        {data && data.length > 0
          ? data.map((dataItem) => {
              return <p key={dataItem.id}>{dataItem.title}</p>;
            })
          : null}
      </div>
    </div>
  );
}

export default ScrollIndicator;
