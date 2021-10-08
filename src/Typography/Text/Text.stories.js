import React from "react";

import { Text } from "../../index";

export default {
  component: Text,
  title: "Typography/Text",
};
const Template = (args) => <Text {...args}>  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </Text>

export const DefaultText = Template.bind({});



export const MultipleText = () => (<div style={{display:"flex", flexWrap:"wrap" , flexDirection:"column" , alignItems:"center" }} >
  <div style={{margin:"20px 20px"}} >
      <Text size="large"  >Flexasus Typography. Have a good day. </Text>
  </div>
  <div style={{margin:"20px 20px"}} >
      <Text size="medium" >Flexasus Typography. Have a good day. </Text>
  </div>
  <div style={{margin:"20px 20px"}} >
      <Text size="small" >Flexasus Typography. Have a good day. </Text>
  </div>
  <div style={{margin:"20px 20px"}} >
      <Text size="tiny" >Flexasus Typography. Have a good day. </Text>
  </div>
 
  <div style={{margin:"20px 20px"}} >
      <Text size="large" italic={true}  >Flexasus Typography. Have a good day. </Text>
  </div>
  <div style={{margin:"20px 20px"}} >
      <Text size="medium" color="seagreen" >Flexasus Typography. Have a good day. </Text>
  </div>
  <div style={{margin:"20px 20px"}} >
      <Text size="small" color="red" fontFamily="cursive" >Flexasus Typography. Have a good day. </Text>
  </div>
  <div style={{margin:"20px 20px"}} >
      <Text size="small"  > 
            There was an old owl that lived in an oak. Everyday he saw incidents happening around him. Yesterday he saw a boy helping an old man to carry a heavy basket. Today he saw a girl shouting at her mother. The more he saw the less he spoke. 
            As he spoke less, he heard more. He heard people talking and telling stories. He heard a woman saying that an elephant jumped over a fence. He also heard a man saying that he had never made a mistake.
            The old owl had seen and heard about what happened to people. Some became better and some became worse. But the old owl had become wiser each and every day.
       </Text>
       <Text underline={true} fontWeight="bold" color="seagreen" fontFamily="cursive" > Moral : You should be observant, talk less but listen more. This will make you a wise person. </Text>
  </div>
  </div>
)  
