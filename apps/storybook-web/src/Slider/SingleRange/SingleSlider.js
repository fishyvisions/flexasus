import React, { useEffect, useRef, useState } from 'react'
import PropTypes from 'prop-types'
import './slider.css'
import { css, cx } from '@emotion/css'

export const SingleSlider = ({
    maxValue,
    minValue,
    defaultValue,
    bgColor,
    filledBgColor,
    showValue,
    borderColor,
    thumbColor,
    borderSpread,
    spreadColor,
    valuePrefix,
    valueSuffix,
    valueColor,
    valueBackground,
    sliderWidth,
    form,
    field,
    ...props
}) => {
    const [value, setValue] = useState( field?.value || defaultValue || 0 )
    const { setFieldValue } = form || {};
    const valuePercentage = ((value-minValue) /(maxValue-minValue))*100
    const valueRef = useRef()
    //  Styling and Classes
    useEffect(() => {
        valueRef.current.style.left = `${valuePercentage}%`;
        if (form) {
            setFieldValue(field?.name, value);
        }
    }, [valuePercentage, value])

    

    const sliderStyle =  css`
        .sliderRange { 
            background: linear-gradient(to right, ${filledBgColor} 0%, ${filledBgColor} ${valuePercentage}% , ${bgColor} ${valuePercentage}%,  ${bgColor} 100%)
        }
        .sliderRange::-webkit-slider-thumb {
            border: 3px solid ${borderColor} ;
            background-color: ${thumbColor};
            box-shadow: ${borderSpread && `0px 0px 0px 4px ${spreadColor}`};
        }
        .sliderRange::-moz-range-thumb {
            border: 3px solid ${borderColor} ;
            background-color: ${thumbColor};
            box-shadow: ${borderSpread && `0px 0px 0px 4px ${spreadColor}`};
        }
        #value-span::after {
            border-top : 6px solid ${valueBackground};
        }
        .sliderRange {
            width: ${sliderWidth};
        }
        .value-div{
            width: calc(${sliderWidth} - 36px);
            }
  `;
  const sliderClass = cx(
      "slidercontainer",
      sliderStyle,
  )

    return (
        <div className={sliderClass}>
            <div className="value-div"  style={{display: showValue?"block":"none" }} ><span ref={valueRef} id="value-span" style={{backgroundColor:valueBackground, color:valueColor }} > {valuePrefix}{value}{valueSuffix} </span></div>
            <input  type="range" min={minValue} max={maxValue} value={value}   className="sliderRange" id="myRange" onChange={(e)=> setValue(e.target.value) }  />    
        </div>
    )
}

SingleSlider.propTypes = {
    minValue:PropTypes.number,
    maxValue:PropTypes.number,
    defaultValue:PropTypes.number,
    
}



SingleSlider.defaultProps = {
    minValue:0,
    maxValue:100,

  };
   