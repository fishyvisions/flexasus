import React, { useState } from "react";
import PropTypes from "prop-types";
import MultiRangeSlider from "./MultiRange/MultiRangeSlider";
import { SingleSlider } from "./SingleRange/SingleSlider";

export const Slider = ({
  maxValue,
  minValue,
  defaultValue,
  type,
  ...props
}) => {
  if (type === "multiRange") {
    return (
      <MultiRangeSlider
        min={minValue}
        max={maxValue}
        onChange={({ min, max }) => `min = ${min}, max = ${max}`}
        {...props}
      />
    );
  } else {
    return <SingleSlider minValue={minValue} maxValue={maxValue} defaultValue={defaultValue}  {...props} />;
  }
};




Slider.propTypes = {
  minValue: PropTypes.number,
  maxValue: PropTypes.number,
  defaultValue: PropTypes.number,
  type: PropTypes.oneOf(["multiRange", "default"]),
  bgColor: PropTypes.string,
  filledBgColor: PropTypes.string,
  thumbColor: PropTypes.string,
  borderColor: PropTypes.string,
  showValue: PropTypes.bool,
  borderSpread: PropTypes.bool,
  spreadColor: PropTypes.string,
  valuePrefix: PropTypes.string,
  valueSuffix: PropTypes.string,
  valueColor: PropTypes.string,
  valueBackground:PropTypes.string,
  sliderWidth:PropTypes.string,
};

Slider.defaultProps = {
  minValue: 0,
  maxValue: 100,
  defaultValue:40,
  bgColor: "#D9DBE9",
  filledBgColor: "#610BEF",
  borderColor: "#4700AB",
  showValue: false,
  borderSpread: false,
  valueBackground:"#4700AB",
};
