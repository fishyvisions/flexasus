import { css } from "@emotion/css";
import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import "./checkbox.css";
import cx from "classnames";

export const Checkbox = ({
  color,
  bgColor,
  checkedBgColor,
  borderColor,
  label,
  labelColor,
  size,
  form,
  field,
  uId,
  labelStyle,
  ...props
}) => {
  const [haveError, setHaveError] = useState(false);
  const { errors, submitCount } = form || {};

  //  Styling and Classes ---------------------

  const checkboxStyleClass = css`
    input[type="checkbox"]:checked + label {
      background-color: ${checkedBgColor};
      border-color: ${checkedBgColor};
    }
    label {
      background-color: ${haveError ? "#FFECFC" : bgColor};
      border: 3px solid ${haveError ? "#CA024F" : borderColor};
    }
    label:after {
      border-color: ${color};
    }
    input[type="checkbox"]:checked + label {
      box-shadow: 0 0 0 4px ${borderColor};
    }
  `;

  let checkboxClass = cx(
    "checkbox-div-default",
    {
      "checkbox-div-small": size === "small",
    },
    checkboxStyleClass
  );

  // --------------------------

  useEffect(() => {
    if (errors && submitCount > 0) {
      setHaveError(true);
    }
  }, [errors, submitCount]);

  return (
    <div className="flex items-center pb-1.5 ">
      <div className={checkboxClass}>
        <input type="checkbox" id={uId} {...props} {...field} />
        <label htmlFor={uId}></label>
      </div>
      {label && (
        <p
          style={{ color: haveError ? "#CA024F" : labelColor , ...labelStyle }}
          className="text-small"
        >
          {label}
        </p>
      )}
    </div>
  );
};

Checkbox.propTypes = {
  color: PropTypes.string,
  checkedBgColor: PropTypes.string,
  bgColor: PropTypes.string,
  borderColor: PropTypes.string,
  label: PropTypes.string,
  labelColor: PropTypes.string,
  size: PropTypes.oneOf(["medium", "small"]),
  uId: PropTypes.string.isRequired,
};

Checkbox.defaultProps = {
  checkedBgColor: "#610BEF",
  bgColor: "#D9DBE9",
  color: "white",
  borderColor: "transparent",
  size: "medium",
};
