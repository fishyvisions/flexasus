import React from "react";

import { Toggle } from "../index";

export default {
  component: Toggle,
  title: "Toggle",
};
const Template = (args) => <Toggle{...args} />;

export const DefaultToggle = Template.bind({});


export const WithLabel = Template.bind({});
WithLabel.args= {
  uId:"unique-one-",
  label:"Toggle Switch",
}




export const MultipleToggle = () => (<form style={{display:"flex", flexWrap:"wrap" , alignItems:"center" }} >
  <div style={{margin:"20px 20px"}} >
    <Toggle uId="first" />
  </div>
  <div style={{margin:"20px 20px"}} >
    <Toggle uId="second" size="small" />
  </div>
  <div style={{margin:"20px 20px"}} >
    <Toggle  uId="third" borderColor="#BFBEFC" />
  </div>
  <div style={{margin:"20px 20px"}} >
    <Toggle  uId="forth" bgColor="pink" checkedBgColor="skyblue" color="red"  />
  </div>
  </form>
)  