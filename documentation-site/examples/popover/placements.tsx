import * as React from 'react';
import {useStyletron} from 'baseui';
import {Button} from 'spaceweb/button';
import {
  StatefulPopover,
  PLACEMENT,
  TRIGGER_TYPE,
} from 'spaceweb/popover';
import {Paragraph3} from 'spaceweb/typography';

export default () => {
  const [css, theme] = useStyletron();
  return (
    <div
      className={css({
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        flexWrap: 'wrap',
        height: '560px',
      })}
    >
      {Object.keys(PLACEMENT).map((key, index) => (
        <div style={{padding: theme.sizing.scale700}} key={index}>
          <StatefulPopover
            placement={PLACEMENT[key as keyof PLACEMENT]}
            triggerType={TRIGGER_TYPE.hover}
            content={
              <Paragraph3 padding="scale300">{`PLACEMENT.${
                PLACEMENT[key as keyof PLACEMENT]
              }`}</Paragraph3>
            }
            accessibilityType={'tooltip'}
          >
            <Button>{PLACEMENT[key as keyof PLACEMENT]}</Button>
          </StatefulPopover>
        </div>
      ))}
    </div>
  );
};
