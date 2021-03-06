import React from 'react';
import {withStyle} from 'spaceweb';
import {StatefulMenu, OptionList, StyledList} from 'spaceweb/menu';
import {List, AutoSizer} from 'react-virtualized';

const ITEMS = [...new Array(1500)].map((_, index) => ({
  label: `item number: ${index + 1}`,
}));

const Container = withStyle(StyledList, {height: '500px'});

const VirtualList = React.forwardRef((props: any, ref) => {
  const children = React.Children.toArray(props.children);
  return (
    <Container {...props} ref={ref}>
      <AutoSizer>
        {({width}) => (
          <List
            role={props.role}
            height={500}
            rowCount={props.children.length}
            rowHeight={36}
            rowRenderer={({index, key, style}) => (
              <OptionList
                key={key}
                style={style}
                {...children[index].props}
                overrides={{
                  ListItem: {
                    style: {
                      paddingTop: 0,
                      paddingBottom: 0,
                      display: 'flex',
                      alignItems: 'center',
                    },
                  },
                }}
              />
            )}
            width={width}
          />
        )}
      </AutoSizer>
    </Container>
  );
});

export default () => (
  <StatefulMenu
    items={ITEMS}
    overrides={{List: {component: VirtualList}}}
  />
);
