import * as React from 'react';
import {Button} from 'spaceweb/button';
import {ButtonGroup} from 'spaceweb/button-group';
import {TriangleDown} from 'spaceweb/icon';
import {Popover} from 'spaceweb/popover';
import {StatefulMenu} from 'spaceweb/menu';

const items = [
  {label: 'deploy'},
  {label: 'restart'},
  {label: 'scale'},
  {label: 'rollback'},
  {label: 'abort'},
];

// This component is required because of the way that button-group works.
// The button group parent will decorate its children with additional props.
// In Dropdown, we ensure that those props get shuttled to the Button component
// rather than the wrapping StatefulPopover
const Dropdown = (props: {children: React.ReactNode}) => {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <Popover
      isOpen={isOpen}
      onClick={() => setIsOpen(s => !s)}
      content={
        <StatefulMenu
          items={items}
          onItemSelect={() => setIsOpen(false)}
        />
      }
    >
      <Button
        {...props}
        endEnhancer={() => <TriangleDown size={24} />}
      >
        {props.children}
      </Button>
    </Popover>
  );
};

export default () => (
  <ButtonGroup>
    <Button>First</Button>
    <Button>Second</Button>
    <Dropdown>Third</Dropdown>
  </ButtonGroup>
);
