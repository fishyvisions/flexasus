import React from 'react';
import "./header.css"



import {Header, Heading, Input}  from '../index';

export default {
  component: Header,
  title: 'Header-Navbar',
}

const Template = (args) => <Header {...args} >
    <div align="mid" >
      <ul className="flex" >
        <li className="pr-4" >Home</li>
        <li className="pr-4" >About us</li>
        <li className="pr-4" >Service</li>
        <li className="pr-4" >Contact</li>
      </ul>
    </div>
    <div align="right" className="mr-3 mt-1.5 " > 
      <Input  style={{width:"240px"}} icon="https://cdn-icons-png.flaticon.com/512/64/64673.png" placeholder="Searh places to visit" />
    </div>
    <div align="left">
      <Heading size="small" >Logo Here</Heading>
    </div>
</Header>

export const Default = Template.bind({});

Default.parameters = {
  layout: 'fullscreen'
}


export const MultipleHeader = () => (
  <div>
    <div className="mb-8" >
      <Header>
        <div align="mid" >
          <ul className="flex" >
            <li className="pr-4" >Home</li> 
            <li className="pr-4" >About us</li>
            <li className="pr-4" >Service</li>
            <li className="pr-4" >Contact</li>
          </ul>
        </div>
        <div align="right" className="mr-3 mt-2.5 " > 
          <Input  style={{width:"240px"}} icon="https://cdn-icons-png.flaticon.com/512/64/64673.png" placeholder="Searh places to visit" />
        </div>
        <div align="left">
          <Heading size="small" >Logo Here</Heading>
        </div>

      </Header>
    </div>
    <div className="mb-8" >
      <Header bgColor="#adf" color="black" >
        <div align="right" >
            <ul className="flex" >
              <li className="pr-4" >Home</li> 
              <li className="pr-4" >About us</li>
              <li className="pr-4" >Service</li>
              <li className="pr-4" >Contact</li>
            </ul>
          </div>
          
          <div align="left">
            <Heading size="small" >Logo Here</Heading>
          </div>

      </Header>
    </div>
    <div className="mb-8" >
      <Header size="large" bgColor="seagreen" >
      <div align="mid" >
          <ul className="flex" >
            <li className="pr-4" >Home</li> 
            <li className="pr-4" >About us</li>
            <li className="pr-4" >Service</li>
            <li className="pr-4" >Contact</li>
          </ul>
        </div>
        <div align="right" className="mr-3 mt-2.5 " > 
          <Input  style={{width:"240px"}} icon="https://cdn-icons-png.flaticon.com/512/64/64673.png" placeholder="Searh places to visit" />
        </div>
        <div align="left">
        <Heading size="small" >Logo Here</Heading>
        </div>
        

      </Header>
    </div>
    
  </div>
)

MultipleHeader.parameters = {
  layout: 'fullscreen'
}


export const FullPageHeader = () => (
  <div style={{width:"100vw", height:"120vh", background:"lightgrey"}} >
    <Header position="sticky" >
      <div align="mid" >
        <ul className="flex" >
          <li className="pr-4" >Home</li> 
          <li className="pr-4" >About us</li>
          <li className="pr-4" >Service</li>
          <li className="pr-4" >Contact</li>
        </ul>
      </div>
      <div align="right" className="mr-3 mt-1.5 " > 
        <Input  style={{width:"240px"}} icon="https://cdn-icons-png.flaticon.com/512/64/64673.png" placeholder="Searh places to visit" />
      </div>
      <div align="left">
      <Heading size="small" >Logo Here</Heading>
      </div>
    </Header>
    <div style={{width:"100vw", height:"120vh", background:"lightgrey"}} >
      <div className="flex justify-center items-center pt-60" >
          <Heading fontSize="150px" fontFamily="cursive"  >Flexasus</Heading>
      </div>
    </div>
  </div>
)


FullPageHeader.parameters = {
  layout: 'fullscreen'
}



