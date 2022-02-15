import React from "react";
import { PropTypes } from "prop-types";
import "./Button.scss";

const Button = (props) => {
  const { text, onClick, background, className } = props;

  return (
    <button
      className={className}
      onClick={onClick}
      style={{ background: background }}
    >
      {text}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  text: PropTypes.string,
  onClick: PropTypes.func,
  background: PropTypes.string,
};

export default Button;
