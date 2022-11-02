import React from "react";

import { IncrementStepper } from "../index";


export default {
  component: IncrementStepper,
  title: "IncrementStepper",
};
const Template = (args) => <IncrementStepper {...args} />;

export const IncrementStepperDefault = Template.bind({}); 

IncrementStepperDefault.args = {
  defaultValue:12,
  minValue:0,
  maxValue:20,  
}




export const Multiple = () => (<div style={{display:"flex", flexWrap:"wrap" , alignItems:"center" }} >
  <div style={{margin:"20px 20px"}} >
    <IncrementStepper defaultValue={10} bgColor="#EFF0F6" />
  </div>

  <div style={{margin:"20px 20px"}} >
    <IncrementStepper size="small" align="vertical" />
  </div>

  <div style={{margin:"20px 20px"}} >
    <IncrementStepper borderSpread={true} spreadColor="#BFBEFC"  design="filled" color="white" valueColor="red" />
  </div>
  <div style={{margin:"20px 20px"}} >
    <IncrementStepper borderSpread={true} spreadColor="#BFBEFC" design="outlined"  color="black"  />
  </div>
  <div style={{margin:"20px 20px"}} >
    <IncrementStepper design="filled" borderStyle="double"  color="white"   />
  </div>
  <div style={{margin:"20px 20px"}} >
    <IncrementStepper design="outlined" borderStyle="dotted"  color="black"  />
  </div>
  <div style={{margin:"20px 20px"}} >
    <IncrementStepper design="outlined"  color="black"  />
  </div>
  <div style={{margin:"20px 20px"}} >
    <IncrementStepper borderSpread={true} spreadColor="pink" design="outlined"  color="black"  />
  </div>
  <div style={{margin:"20px 20px"}} >
    <IncrementStepper design="outlined" borderType="rounded" color="black" size="small"  />
  </div>
  

  
</div>) 
