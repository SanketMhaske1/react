import React, { useState } from "react";
import "./tabs.css";

function Tabs({ tabsContent, onChnage }) {
  const [currentTabIndex, setCurrentTabIndex] = useState(0);
  return (
    <div className="wrapper">
      <div className="heading">
        {tabsContent.map((tabItem, index) => {
          return (
            <div
              className={`tab-item ${
                currentTabIndex === index ? "active" : ""
              }`}
              key={index}
            >
              <span
                className="label"
                onClick={() => {
                  setCurrentTabIndex(index);
                  onChnage(index);
                }}
              >
                {tabItem.label}
              </span>
            </div>
          );
        })}
      </div>
      <div className="content" style={{ color: "red" }}>
        {tabsContent[currentTabIndex] && tabsContent[currentTabIndex].content
          ? tabsContent[currentTabIndex]["content"]
          : null}
      </div>
    </div>
  );
}

export default Tabs;
