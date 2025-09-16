import React, { useState } from "react";
import Model from "./mode";
import "./mode.css";

function ModeTest() {
  const [showModalPopup, setShowModalPopup] = useState(false);

  function handleClosePopupModal() {
    setShowModalPopup(!showModalPopup);
  }

  return (
    <div>
      <button onClick={handleClosePopupModal}>Open Mode Popup</button>
      {showModalPopup && (
        <Model
          header={<div>Customized Header</div>}
          body={<div>Customized Body</div>}
          footer={<div>Customized Footer</div>}
          handleClosePopupModal={handleClosePopupModal}
        />
      )}
    </div>
  );
}

export default ModeTest;
