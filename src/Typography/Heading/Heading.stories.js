import React from "react";

import { Heading } from "../../index";

export default {
  component: Heading,
  title: "Typography/Heading",
};
const Template = (args) => <Heading {...args}>Flexasus Heading. Have a good day. </Heading>

export const DefaultHeading = Template.bind({});



export const MultipleHeadings = () => (<div style={{display:"flex", flexWrap:"wrap" , flexDirection:"column" , alignItems:"center" }} >
  <div style={{margin:"20px 20px"}} >
      <Heading size="huge" >Flexasus Heading. Have a good day. </Heading>
  </div>
  <div style={{margin:"20px 20px"}} >
      <Heading size="large"  >Flexasus Heading. Have a good day. </Heading>
  </div>
  <div style={{margin:"20px 20px"}} >
      <Heading size="medium" >Flexasus Heading. Have a good day. </Heading>
  </div>
  <div style={{margin:"20px 20px"}} >
      <Heading size="small" >Flexasus Heading. Have a good day. </Heading>
  </div>
  <div style={{margin:"20px 20px"}} >
      <Heading size="tiny" >Flexasus Heading. Have a good day. </Heading>
  </div>
  <div style={{margin:"20px 20px"}} >
      <Heading size="huge" underline={true}  >Flexasus Heading. Have a good day. </Heading>
  </div>
  <div style={{margin:"20px 20px"}} >
      <Heading size="large" italic={true}  >Flexasus Heading. Have a good day. </Heading>
  </div>
  <div style={{margin:"20px 20px"}} >
      <Heading size="medium" color="seagreen" >Flexasus Heading. Have a good day. </Heading>
  </div>
  <div style={{margin:"20px 20px"}} >
      <Heading size="small" color="red" fontFamily="cursive" >Flexasus Heading. Have a good day. </Heading>
  </div>
  <div style={{margin:"20px 20px"}} >
      <Heading size="tiny" >Flexasus Heading. Have a good day. </Heading>
  </div>
  </div>
)  

