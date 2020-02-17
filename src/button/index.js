/*
Copyright (c) 2018-2020 Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import React from 'react';
import {Button as BW_Button} from 'baseui/button';
import {StyledBaseButton} from './styled-components';

const Button = props => {
  const overrides = {...props.overrides, BaseButton: StyledBaseButton};
  return <BW_Button {...props} overrides={overrides} />;
};

export {Button};
export {StyledBaseButton};
// Constants
export {
  KIND,
  SIZE,
  SHAPE,
  StyledStartEnhancer,
  StyledEndEnhancer,
  StyledLoadingSpinner,
  StyledLoadingSpinnerContainer,
} from 'baseui/button';
