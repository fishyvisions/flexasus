import React from 'react';



import {Dropdown}  from '../index';

export default {
  component: Dropdown,
  title: 'Dropdown',
}

const Template = (args) => <Dropdown {...args} />

export const Default = Template.bind({});



export const MultipleDropdown = () => (<form style={{display:"flex", flexWrap:"wrap" , alignItems:"center" }} >
  <div style={{margin:"20px 20px"}} >
    <Dropdown  >
    </Dropdown>
  </div>
  <div style={{margin:"20px 20px"}} >
    <Dropdown disabled    >
    </Dropdown>
  </div>
  <div style={{margin:"20px 20px"}} >
    <Dropdown borderColor="#610BEF" borderSpread={true } iconColor="seagreen"   >
    </Dropdown>
  </div>
  <div style={{margin:"20px 20px"}} >
    <Dropdown borderColor="#A996FF"  bgColor="#339999" borderSpread={true } iconColor="white" color="white"  style={{width:"600px" , height:"40px"}}  >
    </Dropdown>
  </div>

  </form>
)  




export const MultipleSelectDefault = Template.bind({});

MultipleSelectDefault .args ={
  type:"multiple", 
}

export const TagsDefault = Template.bind({});

TagsDefault.args ={
  type:"multiple", 
  tags:true
}


export const MultipleSelects = () => (<form style={{display:"flex", flexWrap:"wrap" , alignItems:"center" }} >
  <div style={{margin:"20px 20px"}} >
    <Dropdown  type="multiple" >
    </Dropdown>
  </div>
  <div style={{margin:"20px 20px"}} >
    <Dropdown disabled  defaultValue={["Apple"]} type="multiple"  >
    </Dropdown>
  </div>
  <div style={{margin:"20px 20px"}} >
    <Dropdown borderColor="#610BEF" borderSpread={true } iconColor="seagreen" type="multiple"  >
    </Dropdown>
  </div>
  <div style={{margin:"20px 20px"}} >
    <Dropdown type="multiple" borderColor="#A996FF" selectedBgColor="white" color="black"  bgColor="#339999" borderSpread={true } iconColor="white" selectedColor="black"  style={{width:"600px" , height:"40px"}}  >
    </Dropdown>
  </div>
  

  </form>
)  