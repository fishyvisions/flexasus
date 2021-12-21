import React from "react";

import { Slider} from "../index";



export default {
  component: Slider,
  title: "Range Slider",
};
const Template = (args) => <Slider {...args} />;

export const DefaultSlider = Template.bind({});



export const MultipleSliders = () => (<form style={{display:"flex", flexWrap:"wrap" , alignItems:"center" }} >
  <div style={{margin:"20px 20px"}} >
    <Slider  />
  </div>
  <div style={{margin:"20px 20px"}} >
    <Slider showValue={true} filledBgColor="hotpink" bgColor="pink" borderColor="lightgrey" valueBackground="hotpink" minValue={10} maxValue={50} defaultValue={25} sliderWidth="600px" />
  </div>

  <div style={{margin:"20px 20px"}} >
    <Slider type="multiRange" minValue={10} maxValue={50} defaultValue={25} />
  </div> 
  <div style={{margin:"20px 20px"}} >
    <Slider showValue={true} type="multiRange" minValue={0} maxValue={100} defaultValue={25} />
  </div> 

  <div style={{margin:"20px 20px"}} >
    <Slider valuePrefix="$" type="multiRange" filledBgColor="cyan" bgColor="skyblue" borderColor="hotpink" borderSpread={true} spreadColor="pink" showValue={true} valueBackground="skyblue"  minValue={10} maxValue={50} defaultValue={25} />
  </div> 
  <div style={{margin:"20px 20px"}} >
    <Slider defaultValue={55} valueSuffix="%" filledBgColor="cyan" bgColor="skyblue" borderColor="hotpink" borderSpread={true} spreadColor="pink" showValue={true} valueBackground="lightgreen"  minValue={0} maxValue={100}   />
  </div>
 

  </form>
)  