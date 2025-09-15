import MeunList from "./meun-list";
import "./styles.css";

export default function TreeView({ meuns = [] }) {
  return (
    <div className="tree-view-container">
      <MeunList list={meuns} />
    </div>
  );
}
