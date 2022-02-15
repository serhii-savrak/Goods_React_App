import React from "react";
import { PropTypes } from "prop-types";
import "./Modal.scss";

const Modal = ({ className, closeButton, header, text, actions }) => {
  return (
    <>
      <div className="modal-container" onClick={closeButton}>
        <div
          className={className}
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          <div className={`${className}__head-wrapper`}>
            <h2 className={`${className}__title`}>{header}</h2>
            <button
              className={`${className}__closing-btn`}
              onClick={closeButton}
            >
              X
            </button>
          </div>
          <p className={`${className}__description`}>{text}</p>
          <div className="btn-wrapper">
            {actions[0]}
            {actions[1]}
          </div>
        </div>
      </div>
    </>
  );
};

Modal.propTypes = {
  header: PropTypes.string,
  text: PropTypes.string,
  className: PropTypes.string,
  closeButton: PropTypes.func,
  confirmButton: PropTypes.func,
};

export default Modal;
