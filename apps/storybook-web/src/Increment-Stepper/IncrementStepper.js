import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

import { Button } from "../index";
import { cx } from "@emotion/css";

export const IncrementStepper = ({
  size,
  defaultValue,
  minValue,
  maxValue,
  valueColor,
  name,
  align,
  form,
  field,
  ...props
}) => {
  const [value, setValue] = useState(field?.value || defaultValue || 0);
  const { setFieldValue } = form || {};

  let incrementClass = cx("flex", {
    "flex-col items-center ": align === "vertical",
  });

  useEffect(() => {
    if (form) {
      setFieldValue(field?.name, value);
    }
  }, [value]);

  const incrementValue = () => {
    if (maxValue) {
      if (value < maxValue) {
        setValue(value + 1);
      }
    } else {
      setValue(value + 1);
    }
  };
  const decrementValue = () => {
    if (minValue === 0 || minValue) {
      if (value > minValue) {
        setValue(value - 1);
      }
    } else {
      setValue(value - 1);
    }
  };
  return (
    <div className={incrementClass}>
      <Button
        style={{
          width: size === "small" ? "28px" : "36px",
          height: size === "small" ? "28px" : "36px",
          padding: "0",
          paddingBottom: "3px",
          margin: "10px",
        }}
        label="-"
        size={size}
        onClick={decrementValue}
        {...props}
        borderType="circular"
      />
      <input
        style={{ color: valueColor }}
        className="outline-none w-11 text-center"
        name={name}
        {...field}
        value={value}
        readOnly
      />
      <Button
        style={{
          width: size === "small" ? "28px" : "36px",
          height: size === "small" ? "28px" : "36px",
          padding: "0",
          paddingBottom: "3px",
          margin: "10px",
        }}
        label="+"
        size={size}
        onClick={incrementValue}
        {...props}
        borderType="circular"
      />
    </div>
  );
};

IncrementStepper.propTypes = {
  color: PropTypes.string,
  bgColor: PropTypes.string,
  size: PropTypes.oneOf(["small", "medium"]),
  align: PropTypes.oneOf(["vertical", "horizontal"]),
  design: PropTypes.oneOf(["filled", "outlined"]),
  borderStyle: PropTypes.oneOf(["solid", "dashed", "dotted", "double", "none"]),
  hoverType: PropTypes.oneOf(["default", "glow", "float", "fade", "none"]),
  borderSpread: PropTypes.bool,
  spreadColor: PropTypes.string,
  glowColor: PropTypes.string,
  defaultValue: PropTypes.number,
  minValue: PropTypes.number,
  maxValue: PropTypes.number,
  valueColor: PropTypes.string,
};

IncrementStepper.defaultProps = {
  hoverType: "none",
  design: "outlined",
  color: "black",
};
