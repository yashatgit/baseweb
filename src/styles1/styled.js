import * as React from 'react';
import _styled from '@emotion/styled';

import {ThemeContext} from './theme-provider.js';

export const styled = (type, getStyles) => {
  return React.forwardRef((props, ref) => (
    <ThemeContext.Consumer>
      {theme => {
        const StyledComponent = _styled(type)(getStyles);
        return <StyledComponent {...props} ref={ref} $theme={theme} />;
      }}
    </ThemeContext.Consumer>
  ));
};

export const withStyle = styled;

export const useStyletron = () => {
  const theme = React.useContext(ThemeContext);
  const css = p => '';
  return [css, theme];
};

export const createThemedStyled = () => styled;
export const createThemedWithStyle = () => withStyle;
export const createThemedUseStyletron = () => useStyletron;
