import React from 'react';

import { Button } from 'wombat/src/components';

export default {
  title: 'Button',
  component: Button,
  args: {
    children: 'Wombat UI'
  }
};

const Template = (args) => <Button {...args} />;

export const Regular = Template.bind({});

export const Small = Template.bind({});
Small.args = {
  size: 'small'
};
