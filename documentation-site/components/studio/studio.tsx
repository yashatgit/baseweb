import * as React from 'react';
import Logo from './logo';
import {Block} from 'baseui/block';
import {useStyletron} from 'baseui';

const Studio = () => {
  const [css, theme] = useStyletron();
  return (
    <React.Fragment>
      <div
        className={css({
          ...theme.typography.font400,
          padding: theme.sizing.scale600,
          alignItems: 'center',
          display: 'flex',
          borderBottom: `1px solid ${theme.borders.border400.borderColor}`,
        })}
      >
        <Logo />
        <Block font="HeadingSmall" marginLeft="scale300">
          Base Studio
        </Block>
      </div>
    </React.Fragment>
  );
};

export default Studio;
