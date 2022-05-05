import React, { useState, useRef, useEffect } from "react";
import PropTypes from "prop-types";
import "./simple.css";
import { css, cx } from "@emotion/css";

export const SimpleSelect = ({
  iconColor,
  bgColor,
  color,
  name,
  borderColor,
  borderSpread,
  spreadColor,
  form,
  field,
  options,
  dropdownHoverColor,
  width,
  disabled,
  defaultValue,
  ...props
}) => {
  const [showDropdown, setshowDropdown] = useState(false);
  const [dropdownValue, setdropdownValue] = useState(
    field?.value || defaultValue || options[0] || ""
  );
  const { setFieldValue } = form || {};

  const dropdownStyle = css`
    input {
      color: ${color};
      background: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg"   viewBox="0 0 24 24" fill="none" color="${iconColor.startsWith("#")? iconColor.replace('#', '%23') : iconColor}" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-down"><polyline points="6 9 12 15 18 9"></polyline></svg>')
        no-repeat right 0.8em center / 1.4em,
                ${bgColor};
      border: 2px solid ${borderColor};
      box-shadow: ${borderSpread && `0px 0px 0px 5px ${spreadColor}`};
      width: ${width};
      cursor: ${disabled && "not-allowed"};
      opacity: ${disabled && "0.7"};
    }
    .dropdown-for-select {
      background-color: ${bgColor};
      width: ${width};
      color: ${color};
    }
    .select-options:hover {
      background-color: ${dropdownHoverColor};
    }
  `;

  let simpleSelectClass = cx("simple-select-div", dropdownStyle);

  const setValue = (value) => {
    setdropdownValue(value);
    setshowDropdown(false);
  };

  const dropDownRef = useRef();

  const checkMouseClick = (event) => {
    if (!dropDownRef?.current?.contains(event?.target)) {
      setshowDropdown(false);
    }
  }

  useEffect(() => {
    document.addEventListener("mousedown", checkMouseClick);
    return () => {
      document.removeEventListener("mousedown", checkMouseClick);
    };
  }, []);  

  useEffect(() => {
    if (form) {
      setFieldValue(field?.name, dropdownValue);
    }
  }, [dropdownValue]);

  return (
    <div className={simpleSelectClass} ref={dropDownRef}>
      <input
        type="text"
        {...field}
        readOnly
        onClick={() => setshowDropdown(!showDropdown)}
        value={dropdownValue || ""}
        name={name}
      />
      <div
        className="dropdown-for-select"
        style={{ display: showDropdown && !disabled ? "block" : "none" }}
      >
        {options?.map((item) => (
          <div
            key={item}
            onClick={(e) => setValue(e.target.dataset.id)}
            data-id={item}
            className="select-options"
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};
