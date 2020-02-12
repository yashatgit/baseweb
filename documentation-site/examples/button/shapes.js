// @flow
import * as React from 'react';
import {Button, SHAPE} from 'spaceweb/button';
import Upload from 'spaceweb/icon/upload';

export default () => (
  <React.Fragment>
    <p>
      <Button>Default shape</Button>
    </p>
    <p>
      <Button shape={SHAPE.pill}>Pill shape</Button>
    </p>
    <p>
      <Button shape={SHAPE.square}>
        <Upload />
      </Button>
    </p>
    <p>
      <Button shape={SHAPE.round}>
        <Upload />
      </Button>
    </p>
  </React.Fragment>
);
