import React from 'react';
import {Input} from 'spaceweb/input';

export default () => {
  const [value, setValue] = React.useState('1234');
  return (
    <Input
      onChange={event => setValue(event.currentTarget.value)}
      type="password"
      value={value}
    />
  );
};
