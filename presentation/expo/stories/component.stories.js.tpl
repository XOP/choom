import React from 'react';

import { Divider } from '../../../packages/choom-react/src/components';

export default {
  title: 'Divider',
  component: Divider,
  args: {
    
  }
};

const Template = (args) => <Divider {...args} />;

export const Regular = Template.bind({});

// export const Small = Template.bind({});
// Small.args = {
//   size: 'small'
// };
