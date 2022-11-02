import React, {useState, useEffect} from 'react'
import PropTypes from 'prop-types'
import "./toggle.css"
import { css, cx } from "@emotion/css";

export const Toggle = ({
    uId,
    size,
    bgColor,
    borderColor,
    checkedBgColor,
    fillColor,
    field,
    form,
    label,
    labelColor,
    labelStyle,
    props
}) => {

    const [haveError, setHaveError] = useState(false);
    const { errors, submitCount } = form || {};

    //  Style & Classes 
    const toggleStyleClass = css`
    .slider {
      background-color: ${haveError ? "#FFECFC" : bgColor};
      box-shadow: 0 0 0 2px ${borderColor};
    }
    .slider::before {
      background-color: ${fillColor};
    }
    input:checked ~ .slider {
      background-color: ${checkedBgColor};
      box-shadow: 0 0 0 4px ${borderColor};
    }
  `;
  let toggleClass = cx("toggle-container", toggleStyleClass, {
    "toggle-container-small": size === "small",
  });

  useEffect(() => {
    if (errors && submitCount > 0) {
      if(errors[field.name]){
        setHaveError(true);
      }
    }
  }, [errors, submitCount]);

    return (
      <div className="flex items-center" > 
      <label className={toggleClass}>
          <input type="checkbox" id={uId} {...props} {...field} />
          <span className="slider"></span>
      </label>
      {label && ( <label htmlFor={uId}> 
          <p
            style={{ 
              color: haveError ? "#CA024F" : labelColor,
              cursor: "pointer",
              paddingLeft: 10,
              ...labelStyle,
            }}
            className={`text-${size}`}
          >
            {label}
          </p>
      </label>
    )}
    </div>
    )
}

Toggle.propTypes = {
    uId: PropTypes.string.isRequired,
    size:PropTypes.oneOf(["small", "medium"]),
    bgColor:PropTypes.string,
    checkedBgColor:PropTypes.string,
    fillColor:PropTypes.string,
    borderColor:PropTypes.string,
}


Toggle.defaultProps = {
    bgColor: "#D9DBE9",
    checkedBgColor: "#610BEF",
    fillColor: "white",
    borderColor: "transparent",
  };
   


