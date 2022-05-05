import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import "./radio.css";
import { css, cx } from "@emotion/css";

export const Radio = ({
  bgColor,
  hoverColor,
  checkedBgColor,
  borderColor,
  name,
  size,
  form,
  field,
  labelColor,
  labelStyle,
  fillColor,
  style,
  options,
  props
}) => {
  const [haveError, setHaveError] = useState(false);
  const { errors, submitCount } = form || {};

  const radioStyleClass = css`
    color: ${haveError ? "red" : labelColor};
    .check {
      background-color: ${haveError ? "#FFECFC" : bgColor};
      box-shadow: 0 0 0 2px ${borderColor};
    }
    .check::after {
      background-color: ${fillColor};
    }
    input:checked ~ .check {
      background-color: ${checkedBgColor};
      box-shadow: 0 0 0 4px ${borderColor};
    }
    :hover input ~ .check {
      background-color: ${hoverColor};
    }
    :hover input:checked ~ .check {
      background-color: ${checkedBgColor};
    }
  `;
  let radioClass = cx("radio-container", radioStyleClass, {
    "radio-container-small": size === "small",
  });

  useEffect(() => {
    if (errors && submitCount > 0) {
      if (errors[field.name]) {
        setHaveError(true);
      }
    }
  }, [errors, submitCount]);

  return options?.map((option) => {
    return (
      <label key={option?.key} htmlFor={option.value} className={radioClass}>
        <p style={labelStyle} > {option.key}</p>
        <input
          type="radio"
          id={option.value}
          name={name}
          {...field}
          value={option.value}
          checked={field && field?.value === option.value}
          {...props}
        />
        <span style={style} className="check"></span>
      </label>
    );
  });
};

Radio.propTypes = {
  bgColor: PropTypes.string,
  checkedBgColor: PropTypes.string,
  hoverColor: PropTypes.string,
  label: PropTypes.string,
  borderColor: PropTypes.string,
  labelColor: PropTypes.string,
  fillColor: PropTypes.string,
  options: PropTypes.array,
  size: PropTypes.oneOf(["medium", "small"]),
};

Radio.defaultProps = {
  bgColor: "#D9DBE9",
  checkedBgColor: "#610BEF",
  hoverColor: "lightgrey",
  fillColor: "white",
  borderColor: "transparent",
  options: [
    { key: "Option 1", value: "value 1" },
    { key: "Option 2", value: "value 2" },
    { key: "Option 3", value: "value 3" },
  ],
};
