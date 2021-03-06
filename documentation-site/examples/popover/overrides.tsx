import * as React from 'react';
import {Button} from 'spaceweb/button';
import {StatefulPopover} from 'spaceweb/popover';
import {Paragraph3} from 'spaceweb/typography';

export default () => (
  <StatefulPopover
    initialState={{isOpen: true}}
    showArrow
    overrides={{
      Arrow: {
        style: ({$theme}) => ({
          backgroundColor: $theme.colors.warning,
        }),
      },
      Body: {
        style: ({$theme}) => ({
          backgroundColor: $theme.colors.warning,
          borderTopLeftRadius: $theme.borders.radius200,
          borderTopRightRadius: $theme.borders.radius200,
          borderBottomRightRadius: $theme.borders.radius200,
          borderBottomLeftRadius: $theme.borders.radius200,
        }),
      },
      Inner: {
        style: ({$theme}) => ({
          backgroundColor: $theme.colors.warning,
          borderTopLeftRadius: $theme.borders.radius200,
          borderTopRightRadius: $theme.borders.radius200,
          borderBottomRightRadius: $theme.borders.radius200,
          borderBottomLeftRadius: $theme.borders.radius200,
          color: $theme.colors.white,
        }),
      },
    }}
    content={
      <Paragraph3 padding="scale500">hello world</Paragraph3>
    }
  >
    <Button>Click Me</Button>
  </StatefulPopover>
);
