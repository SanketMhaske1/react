import React from "react";
import Accordian from "./components/accordian/Index";
import RandomColor from "./components/randomColor/Index";
import "./App.css";
import StarRating from "./components/star-rating/Index";
import ImgSlider from "./components/img-slider/Index";
import LoadMoreData from "./components/load-more-button";
import TreeView from "./components/tree-view";
import menus from "./components/tree-view/data";
import QRCodeGenerator from "./components/qr-code-generator";
import LightDarkMode from "./components/light-dark-mode";
import ScrollIndicator from "./components/scroll-indicator";
import TabTest from "./components/custom-tabs/tab.text";
import ModeTest from "./components/custome-model-popup/mode-test";
import GithubProfileFinder from "./components/github-profiles-finder";
import SearchAutocomplete from "./components/serach-autocomplete";

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
      {/* <LoadMoreData /> */}

      {/* Tree View Component
      <TreeView meuns={menus} /> */}

      {/* Qr Code Generator
      <QRCodeGenerator /> */}
      {/* <LightDarkMode /> */}
      {/* <ScrollIndicator url={`https://dummyjson.com/products?limit=100`} /> */}
      {/* <TabTest /> */}
      {/* <ModeTest /> */}
      {/* <GithubProfileFinder /> */}
      <SearchAutocomplete />
    </div>
  );
}

export default App;
