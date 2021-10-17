import React from "react";
import PropTypes from "prop-types";
import "./heading.css";
import { css, cx } from "@emotion/css";

export const Heading = ({
  size,
  children,
  variant,
  fontWeight,
  fontFamily,
  color,
  underline,
  italic,
  fontSize,
  ...props
}) => {
  const headingStyleClass = css`
    font-weight: ${fontWeight};
    font-family: ${fontFamily && `${fontFamily}, sans-serif ` };
    color: ${color};
    font-size: ${fontSize};
  `;

  let headingClass = cx(
    `leading-header_${size}`,
    ` text-mobile_header_${size} sm:text-header_${size} `,
    headingStyleClass,
    {
      underline: underline,
    },
    {
      italic: italic,
    }
  );

  if (variant === "h2") {
    return (
      <h2 className={headingClass} {...props}>
        {children}
      </h2>
    );
  }
  if (variant === "h3") {
    return (
      <h3 className={headingClass} {...props}>
        {children}
      </h3>
    );
  }
  if (variant === "h4") {
    return (
      <h4 className={headingClass} {...props}>
        {children}
      </h4>
    );
  }
  if (variant === "h5") {
    return (
      <h5 className={headingClass} {...props}>
        {children}
      </h5>
    );
  }
  if (variant === "h6") {
    return (
      <h6 className={headingClass} {...props}>
        {children}
      </h6>
    );
  }
  return (
    <h1 className={headingClass} {...props}>
      {children}
    </h1>
  );
};

Heading.propTypes = {
  size: PropTypes.oneOf(["huge", "large", "medium", "small", "tiny"]),
  variant: PropTypes.oneOf(["h1", "h2", "h3", "h4", "h5", "h6"]),
  fontWeight: PropTypes.string,
  fontFamily: PropTypes.string,
  color: PropTypes.string,
  underline: PropTypes.bool,
  italic: PropTypes.bool,
  fontSize:PropTypes.string,
};

Heading.defaultProps = {
  variant: "h1",
  fontWeight: "normal",
  size: "medium",
  fontFamily: "",
  underline: false,
  italic: false,
};
