import React from "react";
import PropTypes from "prop-types";
import "./button.css";
import cx from "classnames";

export const Button = ({
  label,
  color,
  bgColor,
  size,
  design,
  icon,
  iconAlign,
  children,
  borderWidth,
  borderStyle,
  borderSpread,
  spreadColor,
  borderType,
  style,
  ...props
}) => {
  const borderColor = bgColor;
  if (design === "outlined") {
    bgColor = "transparent";
  }

  let buttonClass = cx(
    `text-${size}`, 
    `border-${borderStyle}`,
    `button-size-${size} button-type-${design}`,
    `cursor-pointer font-semibold rounded-${borderType}  button-default disabled:opacity-50`,
    {
    "border-3 ": design === "outlined",
    }
  );

  let iconClass = cx(
    label || children && icon && iconAlign === "left" ? 'pr-2.5' : icon && iconAlign === "right" ? 'pl-2.5' : ''
  )


  return (
    <button
      className={`${buttonClass}`}
      style={{
        color: color,
        backgroundColor: bgColor,
        borderColor: borderColor,
        borderStyle:borderStyle,
        boxShadow:borderSpread&&`0px 0px 0px 3px ${spreadColor}`,
        ...style
      }}
      
      {...props}
    >
      {icon && iconAlign === "left" && <img src={icon} className={iconClass} />}
      {label || children}
      {icon && iconAlign === "right" && <img src={icon} className={iconClass} />}
    </button>
  );
};

Button.propTypes = {
  color: PropTypes.string,
  children: PropTypes.string,
  bgColor: PropTypes.string,
  size: PropTypes.oneOf(["small", "medium", "large", "wide"]),
  label: PropTypes.string,
  design: PropTypes.oneOf(["filled", "outlined"]),
  iconAlign: PropTypes.oneOf(["left", "right"]),
  borderStyle: PropTypes.oneOf(["solid", "dashed", "dotted", "double","none"]),
  borderType: PropTypes.oneOf(["default", "rounded", "none"]),
  borderSpread:PropTypes.bool,
  spreadColor:PropTypes.string,
};

Button.defaultProps = {
  bgColor: "#610BEF",
  color: "#fff",
  size: "medium",
  design: "filled",
  iconAlign: "left",
  borderStyle:"solid",
  borderType:"default",
  borderSpread:false,
};
