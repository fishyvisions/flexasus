import React from 'react';




import {Textarea}  from '../index'

export default {
  component: Textarea,
  title: 'Text Area',
}

const Template = (args) => <Textarea {...args} />;


export const DefaultTextArea = Template.bind({});



export const MultipleInputs = () => (<form style={{display:"flex", flexWrap:"wrap" , alignItems:"center" }} >
  <div style={{margin:"20px 20px"}} >
    <Textarea  />
  </div>
  <div style={{margin:"20px 20px"}} >
    <Textarea color="purple" >Never regret anything that made you smile.</Textarea>
  </div>
  <div style={{margin:"20px 20px"}} >
    <Textarea label="Resize none"  resize="none" />
  </div>
  <div style={{margin:"20px 20px"}} >
    <Textarea label="Quote" color="fuchsia"  defaultValue="Die with memories, not dreams." />
  </div>
  <div style={{margin:"20px 20px"}} >
    <Textarea label="Feedback" defaultMessageType="error" defaultMessage="Try again" defaultValue="Every moment is a fresh beginning."  />
  </div>
  <div style={{margin:"20px 20px"}} >
    <Textarea label="Anything"  defaultMessage="you are doing grt"  defaultMessageType="success" defaultValue="Every moment is a fresh beginning."  />
  </div>
  <div style={{margin:"20px 20px"}} >
    <Textarea label="Your Label here" required  placeholder="Your Place holder"  bgColor="white" borderColor="black"  style={{width:"600px" , height:"46px"}} />
  </div>

  </form>)