import React, { useRef, useState } from "react";
import PropTypes from "prop-types";
import "./input.css";
import cx from "classnames";
import RequiredIcon from "../assets/Input/required.svg";
import Hidden from "../assets/Input/hidden.svg";
import Visible from "../assets/Input/visible.svg";

export const Input = ({
  label,
  value,
  placeholder,
  icon,
  type,
  messageType,
  message,
  bgColor,
  color,
  borderColor,
  style,
  required,
  ...props
}) => {
  const [inputValue, setinputValue] = useState(value);
  const [showPassword, setShowPassword] = useState(false);
  let inputClass = cx(
    {
      "input-default": !label && !icon,
    },
    {
      "input-with-label": label,
    },
    {
      "input-with-icon": icon,
    },
    {
      "input-with-icon-only": !label && icon,
    },
    {
      keepUp: inputValue?.length > 0,
    }
  );

  const clearInput = () => {
    setinputValue("");
  };
  const passwordToggle = () => {
    setShowPassword(!showPassword);
  };
  

  return (
    <div className={inputClass}>
      <div className="flex items-center">
        {icon && <img src={icon} alt="icon" className="input-icon" />}
        <input
          type={(type === "password" && showPassword && "text") || type}
          style={{
            background:
              (messageType === "error" && "#FFECFC") ||
              (messageType === "success" && "#EAF9DE") ||
              bgColor,
            border: `1px solid ${
              (messageType === "error" && "#CA024F") ||
              (messageType === "success" && "#008A00") ||
              borderColor
            }`,
            color: color,
            ...style
          }}
          value={inputValue || ""}
          onChange={(e) => setinputValue(e.target.value)}
          placeholder={placeholder}
          required = {required }
          {...props}
        />
        {label && (
          <label
            style={{
              color:
                (messageType === "error" && "#9E0038") ||
                (messageType === "success" && "#008A00"),
            }}
            className="flex"
          >
            {label}{required && <img src={RequiredIcon} className="w-1.5 mb-2 ml-1 " alt="req" /> }
          </label>
        )}
        {type === "password" || showPassword ? (
          <button
            type="button"
            onClick={passwordToggle}
            style={{ marginLeft: "-28px" }}
            className="input-clear-button"
          >
            {showPassword ? (
              <img src={Visible} alt="icon" className="w-4" />
            ) : (
              <img src={Hidden} alt="icon" className="w-4" />
            )}
          </button>
        ) : (
          <button
            className="input-clear-button"
            type="button"
            onClick={clearInput}
          >
            X
          </button>
        )}
      </div>
      {(messageType === "error" && message && (
        <p className="text-red-500 text-xs pl-3">{message}</p>
      )) ||
        (messageType === "success" && message && (
          <p className="text-green-400 text-xs pl-3">{message}</p>
        )) ||
        (message && <p className="text-grey-400 text-xs pl-3">{message}</p>)}
    </div>
  );
};

Input.propTypes = {
  color: PropTypes.string,
  bgColor: PropTypes.string,
  label: PropTypes.string,
  type: PropTypes.oneOf(["text", "number", "email", "password"]),
  messageType: PropTypes.oneOf(["error", "success"]),
  message: PropTypes.string,
  borderColor: PropTypes.string,
};

Input.defaultProps = {
  bgColor: "#EFF0F6",
  color: "#14142B",
  type:"text"
};
