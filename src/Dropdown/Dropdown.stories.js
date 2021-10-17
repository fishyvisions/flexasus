import React from 'react';



import {Dropdown}  from '../index';

export default {
  component: Dropdown,
  title: 'Dropdown',
}

const Template = (args) => <Dropdown {...args}>
  <option value="1">Orange</option>
  <option value="2">Apple</option>
  <option value="3">Banana</option>
</Dropdown>;

export const Default = Template.bind({});



export const MultipleDropdown = () => (<form style={{display:"flex", flexWrap:"wrap" , alignItems:"center" }} >
  <div style={{margin:"20px 20px"}} >
    <Dropdown defaultValue="1" >
        <option value="5" >Russia</option>
        <option value="1" >Japan</option>
        <option value="3">UK</option>
        <option value="2">USA</option>
        <option value="4" >India</option>
    </Dropdown>
  </div>
  <div style={{margin:"20px 20px"}} >
    <Dropdown disabled  defaultValue="1"  >
        <option value="5" >Russia</option>
        <option value="1" >Disabled</option>
        <option value="3">UK</option>
        <option value="2">USA</option>
        <option value="4" >India</option>
    </Dropdown>
  </div>
  <div style={{margin:"20px 20px"}} >
    <Dropdown borderColor="#610BEF" borderSpread={true } iconColor="seagreen"   >
        <option value="5" >Russia</option>
        <option value="1" >Norway</option>
        <option value="3">UK</option>
        <option value="2">USA</option>
        <option value="4" >India</option>
    </Dropdown>
  </div>
  <div style={{margin:"20px 20px"}} >
    <Dropdown borderColor="#A996FF" defaultValue="1" bgColor="#339999" borderSpread={true } iconColor="white" color="white"  style={{width:"600px" , height:"40px"}}  >
        <option value="5" >Russia</option>
        <option value="1" >Norway</option>
        <option value="3">UK</option>
        <option value="2">USA</option>
        <option value="4" >India</option>
    </Dropdown>
  </div>
  

  </form>
)  