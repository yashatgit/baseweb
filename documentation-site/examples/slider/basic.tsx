import * as React from 'react';
import {Slider} from 'spaceweb/slider';

export default () => {
  const [value, setValue] = React.useState([60]);
  return (
    <Slider value={value} onChange={({value}) => setValue(value)} />
  );
};
