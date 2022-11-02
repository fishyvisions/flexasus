import React from "react";

import { Radio } from "../index";

const countryOption = [
  { key: 'Norway', value: 'norway' },
  { key: 'Russia', value: 'Russia' },
  { key: 'UK', value: 'uk' },
]; 


export default {
  component: Radio,
  title: "Radio Input",
};
const Template = (args) => <Radio {...args} />;

export const DefaultRadio = Template.bind({});
DefaultRadio.args = {
  name:"testing",
  options:countryOption,
  size:"small",
  labelColor:"#6e7191",
  bgColor: "#D9DBE9",
  checkedBgColor: "#610BEF",
  hoverColor: "lightgrey",
  borderColor: "transparent",
  fillColor:"white"
}




const foodOption = [
  { key: 'Apple', value: 'Apple' },
  { key: 'Banana', value: 'Banana' },
  { key: 'Orange', value: 'Orange' }
]; 



export const MultipleRadio = () => (<form style={{display:"flex", flexWrap:"wrap" , alignItems:"center" }} >
  <div style={{margin:"20px 20px"}} >
    <Radio name="food" options={foodOption} />
  </div>
  <div style={{margin:"20px 20px"}} >
    <Radio name="country" options={countryOption} borderColor="#BFBEFC"  size="small" />
  </div>
  <div style={{margin:"20px 20px"}} >
    <Radio name="city"  bgColor="skyblue" checkedBgColor="hotpink"  hoverColor="pink" labelColor="#318832"  />
  </div>
  </form>
)  