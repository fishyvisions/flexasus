import React from "react";
import PropTypes from "prop-types";
import "./button.css";
import ButtonIconDefalut from "../assets/Button/button.svg";

export const Button = ({
  label,
  color,
  bgColor,
  size,
  type,
  icon,
  iconAlign,
}) => {
  if (type === "outlined") {
    bgColor = "transparent";
  }
  return (
    <button
      className={`button-size-${size} button-type-${type} cursor-pointer font-bold rounded-lg  button-default `}
      style={{ color: color, backgroundColor: bgColor }}
    >
      {icon && iconAlign === "left" && <img src={icon} className="pr-2.5" />}
      {label}
      {icon && iconAlign === "right" && <img src={icon} className="pl-2.5" />}
    </button>
  );
};

Button.propTypes = {
  color: PropTypes.string,
  bgColor: PropTypes.string,
  size: PropTypes.oneOf(["small", "medium", "large", "wide"]),
  label: PropTypes.string.isRequired,
  type: PropTypes.oneOf(["filled", "outlined"]),
  iconAlign: PropTypes.oneOf(["left", "right"]),
};

Button.defaultProps = {
  bgColor: "#610BEF",
  color: "#fff",
  size: "medium",
  type: "filled",
  iconAlign: "left",
};
