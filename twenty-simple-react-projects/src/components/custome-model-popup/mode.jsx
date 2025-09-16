import React from "react";
import "./mode.css";

function Modal({ id, header, body, footer, handleClosePopupModal }) {
  return (
    <div id={id || "model"} className="modal">
      <div className="modal-content">
        <div className="header">
          <span
            className="close-modal-icon"
            onClick={() => handleClosePopupModal()}
          >
            &times;
          </span>
          <h2>{header ? header : "Header"}</h2>
        </div>
        <div className="body">
          {body ? (
            body
          ) : (
            <div>
              <p>This Is Our Modal Body</p>
            </div>
          )}
        </div>
        <div className="footer">
          {footer ? (
            footer
          ) : (
            <div>
              <h2>This Is Our Modal Footer</h2>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Modal;
