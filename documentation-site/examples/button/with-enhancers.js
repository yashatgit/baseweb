// @flow
import * as React from 'react';
import {Button} from 'spaceweb/button';
import Upload from 'spaceweb/icon/upload';
import ArrowRight from 'spaceweb/icon/arrow-right';

export default () => (
  <React.Fragment>
    <p>
      <Button startEnhancer={() => <ArrowRight size={24} />}>
        Start Enhancer
      </Button>
    </p>
    <p>
      <Button endEnhancer={() => <Upload size={24} />}>
        End Enhancer
      </Button>
    </p>
  </React.Fragment>
);
