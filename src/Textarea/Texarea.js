import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import "./textarea.css";
import cx from "classnames";
import RequiredIcon from "../assets/Input/required.svg";
import { css } from '@emotion/css'

export const Textarea = ({
  label,
  placeholder,
  bgColor,
  color,
  labelColor,
  borderColor,
  placeholderColor,
  style,
  required,
  focusColor,
  resize,
  defaultMessageType,
  defaultMessage,
  children,
  defaultValue,
  field,
  form,
  ...props
}) => {
  const { value, onChange } = field || {};
  const { errors, setFieldValue, submitCount } = form || {};
  const [textareaValue, setTextareaValue] = useState(value || defaultValue || children );
  const [messageType, setMessageType] = useState(defaultMessageType);
  const [message, setMessage] = useState(defaultMessage);

  const textareaStyleClass = css`
    &:focus{
      box-shadow: 0px 0px 2px  ${focusColor};
    }
    &::placeholder{
    color:${placeholderColor};
  }
`

  useEffect(() => {
    if (errors || submitCount > 0) {
      if (textareaValue?.length > 0 || submitCount > 0) {
        setMessageType(
          errors[field?.name]
            ? "error"
            : textareaValue?.length > 0
            ? "success"
            : ""
        );
        setMessage(errors[field?.name]);
      }
    }
  }, [errors, textareaValue, submitCount]);

  let textareaClass = cx(
    {
      "textarea-default": !label ,
    },
    {
      "textarea-with-label": label,
    },
    {
      keepUp: textareaValue?.length > 0 || field?.value?.length > 0,
    },
    "mb-2"
  );

  const clearTextarea = () => {
    if (form) {
      setFieldValue(field?.name, "");
    }
    setTextareaValue("");
  };
  const onChangeValue = (e) => {
    setTextareaValue(e.target.value)
  };

  return (
    <div className={textareaClass}>
      <div className="flex items-center mb-1">

        <textarea

          style={{
            background:
              (messageType === "error" && "#FFECFC") ||
              (messageType === "success" && "#EAF9DE") ||
              bgColor,
            boxShadow: `0 0 2px 0  ${
              (messageType === "error" && "#CA024F") ||
              (messageType === "success" && "#008A00") ||
              borderColor
            }`,
            resize:resize,
            
            color: color,
            borderTop: (messageType === "error" && textareaValue?.length > 0 && label && `19px solid ${"#FFECFC"}` ) ||
            (messageType === "success" && label && textareaValue?.length > 0 && `19px solid ${"#EAF9DE"}`) ||  label && textareaValue?.length > 0 && `19px solid ${bgColor}` ,
            paddingTop: label && textareaValue?.length > 0 && `0px` ,
            ...style,
          }}

          className={textareaStyleClass}
          value={textareaValue || ""}
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

          <button
            className="textarea-clear-button"
            type="button"
            onClick={clearTextarea}
            style={{
              color:
                (messageType === "error" && "#9E0038") ||
                (messageType === "success" && "#008A00") ||
                labelColor,
            }}
          >
            X
          </button>
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

Textarea.propTypes = {
  color: PropTypes.string,
  bgColor: PropTypes.string,
  labelColor: PropTypes.string,
  label: PropTypes.string, 
  resize: PropTypes.oneOf(["auto", "vertical", "horizontal", "none"]),
  defaultMessageType: PropTypes.oneOf(["error", "success"]),
  defaultMessage: PropTypes.string,
  borderColor: PropTypes.string,
  placeholderColor: PropTypes.string,
  placeholder: PropTypes.string,
  focusColor: PropTypes.string,
};

Textarea.defaultProps = {
  bgColor: "#EFF0F6",
  color: "#14142B",
  resize:"auto",
  focusColor:"#0066ff",
};
