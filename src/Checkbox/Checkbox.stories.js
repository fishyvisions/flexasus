import React from 'react';

import "./checkbox.css"

import {Checkbox}  from '../index';

export default {
  component: Checkbox,
  title: 'Checkbox',
}

const Template = (args) => <Checkbox {...args} />;

export const Default = Template.bind({});
Default.args= {
  uId:"fae"
}



export const WithLabel = Template.bind({});
WithLabel.args= {
  uId:"unique-one",
  label:"Term and Conditions",
  labelColor:"purple",
  size:"small"
}


export const MultipleInputs = () => (<form style={{display:"flex", flexWrap:"wrap" , alignItems:"center" }} >
  <div style={{margin:"20px 20px"}} >
    <Checkbox uId="first" />
  </div>
  <div style={{margin:"20px 20px"}} >
    <Checkbox uId="second" size="small" />
  </div>
  <div style={{margin:"20px 20px"}} >
    <Checkbox  uId="third" borderColor="#BFBEFC" />
  </div>
  <div style={{margin:"20px 20px"}} >
    <Checkbox  uId="forth" bgColor="pink" checkedBgColor="skyblue" color="red"  />
  </div>
  </form>
)  