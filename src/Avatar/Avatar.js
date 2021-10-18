import React from 'react'
import PropTypes from 'prop-types'
import { css, cx } from "@emotion/css";
import "./avatar.css"

//  Add label to left side   To Do----

var getAvatarName = function (string) {
    var names = string.split(' '),
        initials = names[0].substring(0, 1).toUpperCase();
    
    if (names.length > 1) {
        initials += names[names.length - 1].substring(0, 1).toUpperCase();
    }
    return initials;
};

export const Avatar = ({
    img,
    active,
    name,
    borderColor,
    activeColor,
    bgColor,
    textColor,
    label,
    labelAlign,
    labelColor,
    size,
}) => {
    const avatarStyleClass = css`
    ${borderColor && `outline: 2.5px solid ${borderColor};` }
        
        .main-avatar-div{
            background-color: ${bgColor};
        }

        .active-status{
            background-color: ${activeColor};
        }
        .avatar-text{
            color:${textColor}
        }
    
  `;
  let avatarClass = cx(
      "avatar-container",
      avatarStyleClass,
      {
          "avatar-container-small":size==="small"
      }
      
  );

  let mainDivClass = cx(
    "flex items-center",
    {
        "justify-start flex-row-reverse ":labelAlign ==="left" && label
    },
    {
        "flex-col ":labelAlign ==="bottom" && label
    },
  )
  const avtarName = getAvatarName(name)
    return (
        <div className={mainDivClass} >
        <div className={avatarClass} >
            <div className="main-avatar-div" >
                {img?<img src={img} alt="" />: name && <p className="avatar-text" > {avtarName}</p> }
                {active && <span className="active-status" ></span> }
            </div>
        </div>
        {label &&
        <div style={{paddingLeft:labelAlign === "right"&&"14px", paddingRight:labelAlign ==="left"&&"14px"}} > 
            <p className="text-text_small pl-0.5 font-semibold capitalize "style={{color:labelColor, marginTop:labelAlign ==="bottom" && "5px" }} >{name}</p>
            {active && labelAlign !=="bottom"   && <p  style={{color:activeColor}}  className="text-text_small pl-1.5 -mt-1 " > online </p> }
        </div>
        }
        </div>
    )
}

Avatar.propTypes = {
    active: PropTypes.bool,
    label: PropTypes.bool,
    labelColor:PropTypes.string,
    borderColor:PropTypes.string,
    activeColor:PropTypes.string,
    name:PropTypes.string.isRequired,
    bgColor:PropTypes.string,
    textColor:PropTypes.string,
    labelAlign:PropTypes.oneOf(["right", "left", "bottom"]),
    size:PropTypes.oneOf(["small","medium"]),
}

Avatar.defaultProps = {
    active: false,
    activeColor:"seagreen",
    name:"Anna Bancroft",
    bgColor:"#610BEF",
    textColor:"#fff",
    labelAlign:"right"
  };
  