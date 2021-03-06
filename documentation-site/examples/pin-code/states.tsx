import React from 'react';
import {PinCode} from 'spaceweb/pin-code';

export default () => {
  const [valuesA, setValuesA] = React.useState(['', '', '', '']);
  const [valuesB, setValuesB] = React.useState(['', '', '', '']);
  const [valuesC, setValuesC] = React.useState(['', '', '', '']);
  return (
    <React.Fragment>
      <PinCode
        disabled
        values={valuesA}
        onChange={({values}) => {
          setValuesA(values);
        }}
      />
      <br />
      <PinCode
        error
        values={valuesB}
        onChange={({values}) => {
          setValuesB(values);
        }}
      />
      <br />
      <PinCode
        positive
        values={valuesC}
        onChange={({values}) => {
          setValuesC(values);
        }}
      />
    </React.Fragment>
  );
};
