import React from 'react';
import ButtonIconDefalut from '../assets/Button/button.svg'

import {Button}  from '../index';

export default {
  component: Button,
  title: 'Button',
}

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  label: 'Button',
  color:"lightgrey",
  borderSpread:true,
  spreadColor:"#BFBEFC",

};


export const WithIcon = Template.bind({});
WithIcon.args = {
  label: 'WithIcon',
  icon:ButtonIconDefalut,
  onClick:()=> (alert("hello"))
};


// const OutlineButton= Template.bind({});
// OutlineButton.args = {
//   label: 'Outline',
//   icon:ButtonIconDefalut,
//   borderSpread:true,
//   spreadColor:"#BFBEFC",
//   bgColor:"#BFBEFC",
//   design:"outlined"

// };

export const MultipleButtons = () => (<div style={{display:"flex", flexWrap:"wrap" }} >
  <div style={{margin:"20px 20px"}} >
    <Button borderSpread={true} spreadColor="#BFBEFC"  color="white"  >FilledBorder</Button>
  </div>
  <div style={{margin:"20px 20px"}} >
    <Button borderSpread={true} spreadColor="#BFBEFC" design="outlined"  color="black"  >Outlined</Button>
  </div>
  <div style={{margin:"20px 20px"}} >
    <Button design="outlined" borderStyle="double"  color="black"  >Outlined</Button>
  </div>
  <div style={{margin:"20px 20px"}} >
    <Button design="outlined" borderStyle="dotted"  color="black"  >Outlined</Button>
  </div>
  <div style={{margin:"20px 20px"}} >
    <Button design="outlined"  color="black"  >FilledBorder</Button>
  </div>
  <div style={{margin:"20px 20px"}} >
    <Button borderSpread={true} spreadColor="pink" design="outlined"  color="black"  >Outlined</Button>
  </div>
  <div style={{margin:"20px 20px"}} >
    <Button design="outlined" borderType="rounded" color="black"  >Filled</Button>
  </div>
  <div style={{margin:"20px 20px"}} >
    <Button icon={ButtonIconDefalut} bgColor="black" color="white"  >FilledBorder</Button>
  </div>
  <div style={{margin:"20px 20px"}} >
    <Button icon={ButtonIconDefalut} iconAlign="right" bgColor="black" color="white"  >FilledBorder</Button>
  </div>
  <div style={{margin:"20px 20px"}} >
    <Button icon={ButtonIconDefalut} iconAlign="right" bgColor="black" color="white"  borderType="rounded" >FilledBorder</Button>
  </div>
  <div style={{margin:"20px 20px"}} >
    <Button icon={ButtonIconDefalut} bgColor="black" color="white"  ></Button>
  </div>
  <div style={{margin:"20px 20px"}} >
    <Button icon={ButtonIconDefalut} bgColor="black" color="white" borderType="rounded" ></Button>
  </div>
  
  
  
</div>)



export const CustomCss = () => <Button disabled style={{width:"350px", height:"60px", fontSize:"10px" }} >Custom Style</Button>

