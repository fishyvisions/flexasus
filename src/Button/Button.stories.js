import React from 'react';
import ButtonIconDefalut from '../assets/Button/button.svg'
import "./button.css"

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
};


export const WithIcon = Template.bind({});
WithIcon.args = {
  label: 'WithIcon',
  icon:ButtonIconDefalut,
  onClick:()=> (alert("hello"))
};



export const MultipleButtons = () => (<div style={{display:"flex", flexWrap:"wrap" , alignItems:"center" }} >
  <div style={{margin:"20px 20px"}} >
    <Button >Default</Button>
  </div>
  <div style={{margin:"20px 20px"}} >
    <Button borderType="rounded" >Rounded</Button>
  </div>
  <div style={{margin:"20px 20px"}} >
    <Button size="small" >Small</Button>
  </div>
  <div style={{margin:"20px 20px"}} >
    <Button size="large" >Large</Button>
  </div>
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
    <Button icon={ButtonIconDefalut} type="submit" onClick={()=>alert("you clicked")} bgColor="black" color="white" borderType="rounded" ></Button>
  </div>
  <div style={{margin:"20px 20px"}} >
    <Button design="outlined"  color="black"  >HoverDefault</Button>
  </div>
  <div style={{margin:"20px 20px"}} >
    <Button design="outlined"  hoverType="glow" color="black"  >HoverGlow</Button>
  </div>
  <div style={{margin:"20px 20px"}} >
    <Button icon={ButtonIconDefalut} iconAlign="right" bgColor="black" color="white" hoverType="glow" glowColor="cyan"  >HoverGlow</Button>
  </div>
  <div style={{margin:"20px 20px"}} >
    <Button icon={ButtonIconDefalut}  bgColor="black" color="white" hoverType="float" >HoverFloat</Button>
  </div>
  <div style={{margin:"20px 20px"}} >
    <Button  design="outlined"  color="#610BEF" hoverType="float" >HoverFloat</Button>
  </div>
  <div style={{margin:"20px 20px"}} >
    <Button icon={ButtonIconDefalut}  bgColor="black" color="white" hoverType="fade" >HoverFade</Button>
  </div>
  <div style={{margin:"20px 20px"}} >
    <Button borderSpread={true} spreadColor="#BFBEFC"  hoverType="fade" color="white"  >HoverFade</Button>
  </div>
  <div style={{margin:"20px 20px"}} >
    <Button icon={ButtonIconDefalut} iconAlign="right" bgColor="black" color="white" hoverType="none" >No-Hover</Button>
  </div>
  <div style={{margin:"20px 20px"}} >
    <Button icon={ButtonIconDefalut} bgColor="black" borderType="circular"  ></Button>
  </div>
  <div style={{margin:"20px 20px"}} >
    <Button icon={ButtonIconDefalut} borderSpread={true} size="small" spreadColor="#BFBEFC" borderType="circular"  ></Button>
  </div>
  <div style={{margin:"20px 20px"}} >
    <Button icon={ButtonIconDefalut} borderSpread={true} size="large" spreadColor="#BFBEFC" borderType="circular"  hoverType="glow" glowColor="pink" ></Button>
  </div>
  
</div>) 



export const CustomCss = () => <Button disabled style={{width:"350px", height:"60px", fontSize:"10px" }} >Custom Style</Button>

