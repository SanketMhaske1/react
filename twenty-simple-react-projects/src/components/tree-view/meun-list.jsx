import MeunItem from "./meun-item";
import "./styles.css";
export default function MeunList({ list = [] }) {
  return (
    <ul className="meun-list-container">
      {list && list.length
        ? list.map((listItem) => <MeunItem item={listItem} />)
        : null}
    </ul>
  );
}
