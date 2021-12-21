import React, { useCallback, useEffect, useState, useRef } from "react";
import PropTypes from "prop-types";
import "./multiRangeSlider.css";
import { css, cx } from "@emotion/css";

const MultiRangeSlider = ({
  min,
  max,
  onChange, 
  bgColor,
  filledBgColor,
  showValue,
  borderColor,
  thumbColor,
  valuePrefix,
  valueSuffix,
  valueColor,
  valueBackground,
  sliderWidth,
  borderSpread,
  spreadColor,
  form,
  field,
  ...props
}) => {
  const [minVal, setMinVal] = useState(min);
  const [maxVal, setMaxVal] = useState(max);
  const minValRef = useRef(min);
  const maxValRef = useRef(max);
  const range = useRef(null);
  const valueRef = useRef();
  const { setFieldValue } = form || {};


  //  Style and Classes
  const rangeSliderStyle = css`
    .slider__range {
      background-color: ${filledBgColor};
    }
    .slider__track {
      background-color: ${bgColor};
    }

    .thumb{
      width: ${sliderWidth};
    }
    .multi-slider {
      width: ${sliderWidth};
    }

    .thumb::-webkit-slider-thumb {
      border: 3px solid ${borderColor};
      background-color: ${thumbColor};
      box-shadow: ${borderSpread && `0px 0px 0px 4px ${spreadColor}`};
    }
  `;

  const mainDivContainer = css`
   .value-div{
        width: calc(${sliderWidth} - 36px);
      }
   #value-span::after {
        border-top : 6px solid ${valueBackground};
        }
  `
  
  const rangeSliderClass = cx("container", rangeSliderStyle);

  // Convert to percentage
  const getPercent = useCallback(
    (value) => Math.round(((value - min) / (max - min)) * 100),
    [min, max]
  );

  // Set width of the range to decrease from the left side
  useEffect(() => {
    const minPercent = getPercent(minVal);
    const maxPercent = getPercent(maxValRef.current);

    if (range.current) {
      range.current.style.left = `${minPercent}%`;
      range.current.style.width = `${maxPercent - minPercent}%`;
    }
    if (form) {
      setFieldValue(field?.name, {minValue:minVal, maxValue:maxVal} );
    }
  }, [minVal, getPercent, maxVal]);

  // Set width of the range to decrease from the right side
  useEffect(() => {
    const minPercent = getPercent(minValRef.current);
    const maxPercent = getPercent(maxVal);

    if (range.current) {
      range.current.style.width = `${maxPercent - minPercent}%`;
    }
  }, [maxVal, getPercent]);

  // Get min and max values when their state changes
  useEffect(() => {
    onChange({ min: minVal, max: maxVal });
  }, [minVal, maxVal, onChange]);


  useEffect(() => {
    const maxPercent = getPercent(maxVal);
    const minPercent = getPercent(minValRef.current);

    valueRef.current.style.left = `${
      minPercent + (maxPercent - minPercent) / 2 - 2
    }%`;
  }, [getPercent, maxVal, minVal]);

  return (
    <div className={mainDivContainer} >
      <div
        className="value-div"
        style={{ display: showValue ? "block" : "none" }}
      >
        <span ref={valueRef}  id="value-span" style={{backgroundColor:valueBackground, color:valueColor }} >
          {valuePrefix}{minVal}{valueSuffix}  - {valuePrefix}{maxVal}{valueSuffix}
        </span>
      </div>

      <div className={rangeSliderClass}>
        <input
          type="range"
          min={min}
          max={max}
          value={minVal}
          onChange={(event) => {
            const value = Math.min(Number(event.target.value), maxVal - 1);
            setMinVal(value);
            minValRef.current = value;
          }}
          className="thumb thumb--left"
          style={{ zIndex: minVal > max - 100 && "5" }}
        />
        <input
          type="range"
          min={min}
          max={max}
          value={maxVal}
          onChange={(event) => {
            const value = Math.max(Number(event.target.value), minVal + 1);
            setMaxVal(value);
            maxValRef.current = value;
          }}
          className="thumb thumb--right"
        />

        <div className="multi-slider">
          <div className="slider__track" />
          <div ref={range} className="slider__range" />

        </div>
      </div>
    </div>
  );
};

MultiRangeSlider.propTypes = {
  min: PropTypes.number.isRequired,
  max: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
};

MultiRangeSlider.defaultProps = {
  showValue: true,
};

export default MultiRangeSlider;
