import React from "react";

import AvatarImage from '../assets/Avatar/avatar.jpeg'

import { Avatar } from "../index";

export default {
  component: Avatar,
  title: "Avatar",
};
const Template = (args) => <Avatar {...args} />;

export const DefaultAvatar = Template.bind({});

DefaultAvatar.args = {
    img:AvatarImage
}




export const MultipleAvatar = () => (<form style={{display:"flex", flexWrap:"wrap" , alignItems:"center" }} >
  <div style={{margin:"20px 20px"}} >
    <Avatar name="Amy Jackson" img={AvatarImage} />
  </div>
  <div style={{margin:"20px 20px"}} >
    <Avatar name="Amy Jackson" img={AvatarImage} borderColor="#FFA3FD" active={true} label={true} />
  </div>
  <div style={{margin:"20px 20px"}} >
    <Avatar name="Amy Jackson"  borderColor="#FFA3FD" active={true} label={true}  />
  </div>
  <div style={{margin:"20px 20px"}} >
    <Avatar name="Emma Stone"  borderColor="#FFA3FD" active={true} label={true} labelAlign="left"  />
  </div>
  <div style={{margin:"20px 20px"}} >
    <Avatar name="Emma Stone" img={AvatarImage} borderColor="#FFA3FD" active={true}  />
  </div>
  <div style={{margin:"20px 20px"}} >
    <Avatar  name="Izuku Midoriya"  borderColor="pink" labelAlign="bottom"  label={true} bgColor="orange" />
  </div>
  <div style={{width:"100%"}} > </div>
  <div style={{margin:"20px 20px"}} >
    <Avatar  name="Amy Jackson" img={AvatarImage} borderColor="#BFBEFC" size="small" />
  </div>
  <div style={{margin:"20px 20px"}} >
    <Avatar  img="https://images.unsplash.com/photo-1561505457-3bcad021f8ee?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80"  name="William Brown"  labelAlign="right" active={true} label={true}  size="small" />
  </div>
  <div style={{margin:"20px 20px"}} >
    <Avatar  img={AvatarImage} borderColor="#FFA3FD" active={true} label={true}  size="small" />
  </div>
  <div style={{margin:"20px 20px"}} >
    <Avatar   borderColor="#FFA3FD" active={true} label={true} labelAlign="left"  size="small" />
  </div>
  <div style={{margin:"20px 20px"}} >
    <Avatar  img="https://i.pinimg.com/originals/b6/6d/22/b66d22a8b57900e75cbab27192cd58a3.jpg"  name="eren yeager"  labelAlign="bottom" label={true}  size="small" />
  </div>
  </form>
)  