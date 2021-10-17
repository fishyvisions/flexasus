import React, { useState, useRef, useEffect } from "react";
import PropTypes from "prop-types";
import "./multiselect.css";
import { css, cx } from "@emotion/css";

export const MultiSelect = ({
  iconColor,
  bgColor,
  name,
  color,
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
  selectedIconColor,
  selectedColor,
  selectedBgColor,
  tags,
  ...props
}) => {
  const [showDropdown, setshowDropdown] = useState(false);
  const [selected, setSelected] = useState(field?.value || defaultValue||[] ); 
  const [inputSearch, setinputSearch] = useState("");
  const { setFieldValue } = form || {};

  const dropdownStyle = css`
    .selected-div {
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
    .dropdown-for-multiselect {
      background-color: ${bgColor};
      width: ${width};
      color:${color}
    }
    .select-options:hover {
      background-color: ${dropdownHoverColor};
    }
    .selected-div button{
      cursor: ${disabled && "not-allowed"};
      background-color: ${selectedBgColor};
      color: ${selectedColor};
    }
  `;
  const addToSelected = (value , event) => {
    event?.stopPropagation()
    if(value?.length>1){
      if (selected?.includes(value)) {
        const index = selected?.indexOf(value);
        if (index > -1) {
          const filteredArray = selected?.filter((item) => item !== value);
          setSelected(filteredArray);
        }
      } else {
        setSelected((oldSlected) => [...oldSlected, value]);
      }
      setinputSearch("");
    }
  };
  
  useEffect(() => {
    if (form) {
      setFieldValue(field?.name, selected);
    }
  }, [selected]);


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
 
  return (
    <div className={dropdownStyle} ref={dropDownRef}>
      <input {...field} name={name} type="hidden" value={selected || ""} />
      <div
        className="selected-div"
        onClick={() => setshowDropdown(!showDropdown)}
      >
        <ul>
          {selected?.map((item) => (  
            <li key={item}>
              <button disabled={disabled} type="button" data-id={item} onClick={(e) => addToSelected(e.target.dataset.id , e)}  >
                <span data-id={item} >{item}</span>
                <span
                  style={{ fontSize: "8px", opacity: "0.8" }} 
                  className="pl-3 font-medium mt-0.5"
                  data-id={item}
                >
                  X
                </span>
              </button>
            </li>
          ))}
          { !disabled &&
                <div style={{width:`${(inputSearch.length*6 + 8)>110?110: (inputSearch.length*6 + 8) }px`}} >
                <input
                  onChange={(e) => setinputSearch(e.target.value)}
                  onKeyDown = {() => setshowDropdown(true)}
                  value={inputSearch || ""}
                  autoComplete="off"
                  type="search"
              />

              </div>
          }
          
        </ul>
        
      </div>
      <div
        className="dropdown-for-multiselect"
        style={{ display: showDropdown && !disabled ? "block" : "none" }}
      >
        {options?.filter((item) =>
            item.toLowerCase().includes(inputSearch.toLowerCase())
          )?.map((item) => (
          <div
            key={item}
            onClick={(e) => addToSelected(e.target.dataset.id)}
            data-id={item}
            className="select-options flex justify-between"
          >
            <span data-id={item} >{item}</span>
            {selected?.includes(item)&& 
                <svg data-id={item} xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill={selectedIconColor} ><path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"/></svg>
             }
          </div>

        ))}
        {tags ? options?.filter((item) => item.toLowerCase().includes(inputSearch.toLowerCase())).length < 1 &&
          inputSearch?.length > 3 && (
            <div
            key={inputSearch}
            onClick={(e) => addToSelected(e.target.dataset.id)}
            data-id={inputSearch}
            className="select-options flex justify-between"
          >
              {inputSearch} 
            </div>
          ) : options?.filter((item) => item.toLowerCase().includes(inputSearch.toLowerCase())).length < 1 &&
          inputSearch?.length > 3 && <div className="select-options flex justify-between">  No result </div> }
      </div>
    </div>
  );
};


MultiSelect.propTypes = {
  defaultValue:PropTypes.array,
};