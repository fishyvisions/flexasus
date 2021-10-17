import React from 'react'
import PropTypes from 'prop-types'
import "./dropdown.css"
import { css, cx } from "@emotion/css";

export const Dropdown = ({
    iconColor,
    bgColor,
    color,
    borderColor,
    borderSpread,
    spreadColor,
    children,
    form,
    field,
    ...props
    
}) => {
    const dropdownStyle= css`
    color: ${color};
    background: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg"   viewBox="0 0 24 24" fill="none" color="${iconColor.startsWith("#")? iconColor.replace('#', '%23') : iconColor}" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-down"><polyline points="6 9 12 15 18 9"></polyline></svg>')
      no-repeat right 0.8em center / 1.4em,
            ${bgColor};
    border: 2px solid ${borderColor};
    box-shadow: ${borderSpread && `0px 0px 0px 5px ${spreadColor}`};
    `;

  
    return (
        <select className={dropdownStyle}  {...props} {...field} >
            {children}
        </select> 

    )
}

Dropdown.propTypes = {
    iconColor: PropTypes.string,
    bgColor: PropTypes.string,
    color: PropTypes.string,
    borderColor: PropTypes.string,
    borderSpread: PropTypes.bool,
    spreadColor: PropTypes.string,
}

Dropdown.defaultProps = {
    iconColor:"#A0A3BD",
    bgColor:"#EFF0F7",
    color:"#14142B",
    spreadColor:"#BFBEFC",
    borderColor:"transparent",
    children:(<option>Flexasus</option>)
}; 
  

 