import { useState } from "react";
import MeunList from "./meun-list";
import "./styles.css";

import { FaMinus, FaPlus } from "react-icons/fa";

export default function MeunItem({ item }) {
  const [displayCurrentChildern, setDisplayCurrentChildern] = useState({});
  function handleToggleChildern(getCurrentLable) {
    setDisplayCurrentChildern({
      ...displayCurrentChildern,
      [getCurrentLable]: !displayCurrentChildern[getCurrentLable],
    });
  }
  console.log(displayCurrentChildern);
  return (
    <li>
      <div className="meun-item">
        <p>{item.label}</p>
        {item && item.children && item.children.length > 0 ? (
          <span onClick={() => handleToggleChildern(item.label)}>
            {displayCurrentChildern[item.label] ? (
              <FaMinus color="#fff" size={15} />
            ) : (
              <FaPlus color="#fff" size={15} />
            )}
          </span>
        ) : null}
      </div>

      {item &&
      item.children &&
      item.children.length > 0 &&
      displayCurrentChildern[item.label] ? (
        <MeunList list={item.children} />
      ) : null}
    </li>
  );
}
