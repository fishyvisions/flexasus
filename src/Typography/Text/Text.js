import React from 'react'
import PropTypes from 'prop-types'
import { css, cx } from "@emotion/css";
import "./text.css"

export const Text = ({
    size,
    children,
    fontWeight,
    fontFamily,
    color,
    underline,
    italic,
    fontSize,
    ...props
  }) => {
    const textStyleClass = css`
      font-weight: ${fontWeight};
      font-family: ${fontFamily && `${fontFamily}, sans-serif ` };
      color: ${color};
      font-size: ${fontSize};
    `;
  
    let textClass = cx(
      `text-text_${size} `,
      `leading-text_${ !fontSize && size}`,
      textStyleClass,
      {
        "underline": underline,
      },
      {
        "italic": italic,
      },
      
    );

    return (
        <p className={textClass} {...props}>
        {children}
      </p>
    )
}

Text.propTypes = {
    size: PropTypes.oneOf(["large", "medium", "small", "tiny"]),
    fontWeight: PropTypes.string,
    fontFamily: PropTypes.string,
    color: PropTypes.string,
    underline: PropTypes.bool,
    italic: PropTypes.bool,
    fontSize:PropTypes.string,
} 


Text.defaultProps = {
    fontWeight: "normal",
    size: "medium",
    underline: false,
    italic: false,
  };