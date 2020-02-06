// @flow
import React from 'react';
import {Block} from 'spaceweb/block';

export default function() {
  return (
    <React.Fragment>
      <Block>first element</Block>
      <Block paddingTop="100px">
        padding top applied to this element
      </Block>
    </React.Fragment>
  );
}
