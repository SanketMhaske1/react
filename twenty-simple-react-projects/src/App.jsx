import React from "react";
import Accordian from "./components/accordian/Index";
import RandomColor from "./components/randomColor/Index";
import "./App.css";
import StarRating from "./components/star-rating/Index";
import ImgSlider from "./components/img-slider/Index";
import LoadMoreData from "./components/load-more-button";

function App() {
  return (
    <div>
      {/* <Accordian /> */}
      {/* <RandomColor /> */}
      {/* <StarRating noOfStars={7} /> */}
      {/* <ImgSlider
        url={"https://picsum.photos/v2/list"}
        limit={"10"}
        page={"1"}
      /> */}
      <LoadMoreData />
    </div>
  );
}

export default App;
