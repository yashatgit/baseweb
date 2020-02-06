import * as React from 'react';
import {StatefulList} from 'spaceweb/dnd-list';

export default () => (
  <StatefulList
    initialState={{
      items: [
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        'Donec ornare.',
        'Morbi malesuada id ante ac tincidunt. Phasellus at varius enim, fringilla pretium lorem. Integer placerat, est in aliquam tempus, ex urna hendrerit quam, eu sagittis nulla lorem eu magna.',
        'Morbi nibh nunc.',
        'Nunc consequat erat id ante mollis tincidunt in a nulla.',
      ],
    }}
    onChange={console.log}
  />
);
