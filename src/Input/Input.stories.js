import React from 'react';
import UserIcon from '../assets/Profile.svg'

import "./input.css"

import {Input}  from '../index';

export default {
  component: Input,
  title: 'Input',
}

const Template = (args) => <Input {...args} />;

export const DefaultInput = Template.bind({});

DefaultInput.args = {
  label:"Enter Name",
  icon:UserIcon,
  placeholder:"Enter The Username"
}

export const PasswordInput = Template.bind({});

PasswordInput.args = {
 
  placeholder:"Enter the Password ",
  bgColor:"#EFF0F6",
  type:"password",
  label:"password",
  icon:UserIcon,
  required:true,
}


export const MultipleInputs = () => (<form style={{display:"flex", flexWrap:"wrap" , alignItems:"center" }} >
  <div style={{margin:"20px 20px"}} >
    <Input  />
  </div>
  <div style={{margin:"20px 20px"}} >
    <Input label="username" />
  </div>
  <div style={{margin:"20px 20px"}} >
    <Input placeholder="only Placeholder" placeholderColor="purple" />
  </div>
  <div style={{margin:"20px 20px"}} >
    <Input label="User Name" icon={UserIcon} defaultValue="this is value" />
  </div>
  <div style={{margin:"20px 20px"}} >
    <Input icon="http://assets.stickpng.com/images/580b57fcd9996e24bc43c521.png" />
  </div>
  <div style={{margin:"20px 20px"}} >
    <Input label="Username" defaultMessageType="error" defaultMessage="Already taken" defaultValue="Alex@123" icon={UserIcon} />
  </div>
  <div style={{margin:"20px 20px"}} >
    <Input label="Instagram"  defaultMessage="Username Available"  defaultMessageType="success" defaultValue="Alex@007" icon="http://assets.stickpng.com/images/580b57fcd9996e24bc43c521.png" />
  </div>
  <div style={{margin:"20px 20px"}} >
    <Input placeholder="Password" defaultValue="1234@"  defaultMessage="Password is weak" defaultMessageType="error" type="password" icon="http://assets.stickpng.com/images/580b57fcd9996e24bc43c521.png" />
  </div>
  <div style={{margin:"20px 20px"}} >
    <Input label="Your Label"  defaultMessage="Everything great" defaultMessageType="success" icon={UserIcon} />
  </div>
  <div style={{margin:"20px 20px"}} >
    <Input label="Your Label here"  placeholder="Your Place holder" icon={UserIcon} bgColor="white" borderColor="black"  style={{width:"600px" , height:"46px"}} />
  </div>
  <div style={{margin:"20px 20px"}} >
    <Input label="Enter Password" type="password" labelColor="red" required defaultValue="1234" placeholder="Your Place holder" icon={UserIcon} bgColor="skyblue"   style={{width:"600px" , height:"46px"}} />
  </div>
  <div style={{margin:"20px 20px"}} >
    <Input label="Simple message"  defaultMessage="Welcome to the team" messageColor="purple" icon={UserIcon} />
  </div>
  </form>) 