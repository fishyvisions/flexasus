import React, { useState } from "react";
import PropTypes from "prop-types";
import "./header.css";
import { css, cx } from "@emotion/css";

export const Header = ({
  children,
  bgColor,
  position,
  size,
  color,
  iconColor,
  sliderBgColor,
  menuIcon, 
  ...props
}) => {
  const [showHeader, setshowHeader] = useState(false);

  const headerStyleClass = css`
    background-color: ${bgColor};
    color: ${color};
    position: ${position === "sticky" && "fixed"};
    @media screen and (max-width: 900px) {
      .header-menu-side {
        background-color: ${sliderBgColor};
        top:${size==="large"&&"100px"}
      }
    }
  `;

  let headerClass = cx(
    "main-header-div items-center pl-3 pr-3 ",
    {
      "main-header-div-large": size === "large",
    },
    headerStyleClass
  );

  let headeMenuSide = cx(
    "header-menu-side flex justify-between  items-center ",
    {
      "header-active": showHeader,
    }
  );

  if (!children?.length || typeof children === 'string' || children instanceof String ) {
    return <div className={headerClass}>{children}</div>;
  }

  return (
    <div className={headerClass}>
      <div className="flex left-side-header">
        {children?.filter((item) => item?.props?.align === "left")}
      </div>
      <div className={headeMenuSide}>
        <section className="flex mid-side-header">
          {children?.filter((item) => item?.props?.align === "mid")}
        </section>
        <section className="flex right-side-header">
          {children?.filter((item) => item?.props?.align === "right")}
        </section>
      </div>

      <div
        className="header-menu-svg "
        onClick={() => setshowHeader(!showHeader)}
      >
        {menuIcon ? (
          <img src={menuIcon} alt="flexasus-header" />
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            stroke={iconColor}
            fill="none"
          >
            <path d="M4 7H20" strokeWidth="2" strokeLinecap="round" />
            <path d="M8 17H20" strokeWidth="2" strokeLinecap="round" />
          </svg>
        )}
      </div>
    </div>
  );
};

Header.propTypes = {
  color: PropTypes.string,
  sliderBgColor: PropTypes.string,
  bgColor: PropTypes.string,
  iconColor: PropTypes.string,
  position: PropTypes.oneOf(["sticky", "default"]),
  size: PropTypes.oneOf(["medium", "large"]),
};

Header.defaultProps = {
  bgColor: "#262338",
  size: "medium",
  iconColor: "white",
  sliderBgColor: "black",
};
