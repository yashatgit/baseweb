import * as React from 'react';
import {FlexGrid, FlexGridItem} from 'spaceweb/flex-grid';
import {BlockProps} from 'spaceweb/block';
import {LightTheme} from 'spaceweb';

const itemProps: BlockProps = {
  backgroundColor: 'mono300',
  height: 'scale1000',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
};

const narrowItemProps = {
  ...itemProps,
  overrides: {
    Block: {
      // theme type is inferred when in-lined
      style: ({$theme}: {$theme: typeof LightTheme}) => ({
        width: $theme.sizing.scale1600,
        flexGrow: 0,
      }),
    },
  },
};

export default () => (
  <FlexGrid
    flexGridColumnCount={3}
    flexGridColumnGap="scale800"
    flexGridRowGap="scale800"
  >
    <FlexGridItem {...itemProps}>Item</FlexGridItem>
    <FlexGridItem {...narrowItemProps}>Narrow</FlexGridItem>
    <FlexGridItem {...itemProps}>Item</FlexGridItem>
    <FlexGridItem {...itemProps}>Item</FlexGridItem>
    <FlexGridItem {...narrowItemProps}>Narrow</FlexGridItem>
    <FlexGridItem {...itemProps}>Item</FlexGridItem>
  </FlexGrid>
);
