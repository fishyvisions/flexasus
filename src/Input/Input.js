import React, { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import "./input.css";
import RequiredIcon from "../assets/Input/required.svg";
import Hidden from "../assets/Input/hidden.svg";
import Visible from "../assets/Input/visible.svg";
import { css, cx } from "@emotion/css";

export const Input = ({
  label,
  defaultValue,
  placeholder,
  icon,
  type,
  defaultMessageType,
  defaultMessage,
  bgColor,
  color,
  labelColor,
  borderColor,
  placeholderColor,
  messageColor,
  style,
  required,
  field,
  form,
  focusColor,
  ...props
}) => {
  const { value, onChange } = field || {};
  const { errors, setFieldValue, submitCount } = form || {};
  const [inputValue, setinputValue] = useState(value || defaultValue);
  const [showPassword, setShowPassword] = useState(false);
  const [messageType, setMessageType] = useState(defaultMessageType);
  const [message, setMessage] = useState(defaultMessage);

  const inputStyleClass = css`
    &:focus{
      box-shadow: 0px 0px 2px  ${focusColor};
    }
    &::placeholder{
    color:${placeholderColor};
  }
`

  useEffect(() => {
    if (errors || submitCount > 0) {
      if (inputValue?.length > 0 || submitCount > 0) {
        setMessageType(
          errors[field?.name]
            ? "error"
            : inputValue?.length > 0
            ? "success"
            : ""
        );
        setMessage(errors[field?.name]);
      }
    }
  }, [errors, inputValue, submitCount]);

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
      keepUp: inputValue?.length > 0 || field?.value?.length > 0,
    },
    "mb-2"
  );

  const clearInput = () => {
    if (form) {
      setFieldValue(field?.name, "");
    }
    setinputValue("");
  };
  const passwordToggle = () => {
    setShowPassword(!showPassword);
  };
  const onChangeValue = (e) => setinputValue(e.target.value);

  return (
    <div className={inputClass}>
      <div className="flex items-center mb-1">
        {icon && <img src={icon} alt="icon" className="input-icon" />}
        <input
          type={(type === "password" && showPassword && "text") || type}
          className={inputStyleClass}
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
            ...style,
          }}
          value={inputValue || ""}
          onKeyUp={onChangeValue}
          placeholder={placeholder}
          required={required}
          {...field}
          onChange={onChange || onChangeValue}
          {...props}
        />
        {label && (
          <label
            style={{
              color:
                (messageType === "error" && "#9E0038") ||
                (messageType === "success" && "#008A00") ||
                labelColor,
            }}
            className="flex"
          >
            {label}
            {required && (
              <img src={RequiredIcon} className="w-1.5 mb-2 ml-1 " alt="req" />
            )}
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
            style={{
              color:
                (messageType === "error" && "#9E0038") ||
                (messageType === "success" && "#008A00") ||
                labelColor,
            }}
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
        (message && <p style={{color:messageColor}} className="text-xs pl-3">{message}</p>)}
    </div>
  );
};

Input.propTypes = {
  color: PropTypes.string,
  bgColor: PropTypes.string,
  labelColor: PropTypes.string,
  label: PropTypes.string,
  type: PropTypes.oneOf(["text", "number", "email", "password"]),
  defaultMessageType: PropTypes.oneOf(["error", "success"]),
  defaultMessage: PropTypes.string,
  borderColor: PropTypes.string,
  placeholderColor: PropTypes.string,
  messageColor:PropTypes.string,
  focusColor:PropTypes.string,
};

Input.defaultProps = {
  bgColor: "#EFF0F6",
  color: "#14142B",
  type: "text",
  focusColor:"#0066ff"
};
