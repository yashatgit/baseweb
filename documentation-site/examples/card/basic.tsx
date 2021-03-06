import * as React from 'react';
import {Card, StyledBody} from 'spaceweb/card';

export default () => (
  <Card overrides={{Root: {style: {width: '328px'}}}}>
    <StyledBody>
      Proin ut dui sed metus pharetra hend rerit vel non mi. Nulla
      ornare faucibus ex, non facilisis nisl.
    </StyledBody>
  </Card>
);
