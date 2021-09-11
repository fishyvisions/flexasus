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
  color:"lightgrey"

};


export const WithIcon = Template.bind({});
WithIcon.args = {
  label: 'WithIcon',
  icon:ButtonIconDefalut
};
