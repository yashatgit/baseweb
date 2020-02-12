// @flow
import * as React from 'react';
import {useStyletron} from 'spaceweb';
import {Button, SIZE} from 'spaceweb/button';

export default () => {
  const [css, theme] = useStyletron();
  const space = css({marginBottom: theme.sizing.scale300});
  return (
    <React.Fragment>
      <Button size={SIZE.compact}>Compact size</Button>
      <div className={space} />
      <Button size={SIZE.default}>Default size</Button>
      <div className={space} />
      <Button size={SIZE.large}>Large size</Button>
    </React.Fragment>
  );
};
