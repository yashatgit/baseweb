/*
Copyright (c) 2018-2020 Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import React from 'react';
import {Button as BW_Button} from 'baseui/button';

const Button = props => {
  const overrides = {...props.overrides, 
    BaseButton: {
      style: ({ $theme, $size, $shape , $kind, $isLoading, $isSelected, $disabled}) => {
        return {
          opacity: $disabled ? '0.6' : '1',
          lineHeight: '1',
          borderWidth: '1px',
          borderStyle: 'solid',
          ...getFontStyles({$theme, $size}),
          ...getPaddingStyles({$theme, $size, $shape}),
          ...getKindStyles({$theme, $kind, $isLoading, $isSelected, $disabled}),
        };
      }
  }};
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

function getFontStyles({$theme, $size}) {
  switch ($size) {
    case SIZE.mini:
      return $theme.typography.font150;
    case SIZE.compact:
      return {fontSize: '1.2rem'};
    case SIZE.large:
      return {fontSize: '1.3rem'};
    default:
      return {fontSize: '1.2rem'};
  }
}

function getPaddingStyles({$theme, $size, $shape}) {
  const iconShape = $shape === SHAPE.square || $shape === SHAPE.round;
  switch ($size) {
    case SIZE.mini:
      return {
        paddingTop: $theme.sizing.scale200,
        paddingBottom: $theme.sizing.scale200,
        paddingLeft: iconShape
          ? $theme.sizing.scale200
          : $theme.sizing.scale300,
        paddingRight: iconShape
          ? $theme.sizing.scale200
          : $theme.sizing.scale300,
      };
    case SIZE.compact:
      return {
        paddingTop: '0.55rem',
        paddingBottom: '0.55rem',
        paddingLeft: iconShape ? '1.2rem' : '1.2rem',
        paddingRight: iconShape ? '1.2rem' : '1.2rem',
      };
    case SIZE.large:
      return {
        paddingTop: '0.9rem',
        paddingBottom: '0.9rem',
        paddingLeft: iconShape ? '1.6rem' : '1.6rem',
        paddingRight: iconShape ? '1.6rem' : '1.6rem',
      };
    default:
      return {
        paddingTop: '0.55rem',
        paddingBottom: '0.55rem',
        paddingLeft: iconShape ? '1.2rem' : '1.2rem',
        paddingRight: iconShape ? '1.2rem' : '1.2rem',
      };
  }
}

function getKindStyles({$theme, $isLoading, $isSelected, $kind, $disabled}) {
  switch ($kind) {
    case KIND.primary:
      if ($disabled) {
        return {
          color: $theme.spr['text-05'],
          backgroundColor: $theme.spr['interactive-01'],
          borderColor: $theme.spr['interactive-01'],
        };
      }
      return {
        color: $theme.spr['text-05'],
        backgroundColor: $theme.spr['interactive-01'],
        borderColor: $theme.spr['interactive-01'],
        ':hover': {
          backgroundColor: $theme.spr['interactive-hover'],
          borderColor: $theme.spr['interactive-hover'],
        },
        ':focus': {
          backgroundColor: $theme.spr['interactive-focus'],
          borderColor: $theme.spr['interactive-focus'],
        },
        ':active': {
          backgroundColor: $theme.spr['interactive-focus'],
          borderColor: $theme.spr['interactive-focus'],
        },
      };
    case KIND.secondary:
      if ($disabled) {
        return {
          color: $theme.spr['text-02'],
          backgroundColor: $theme.spr['ui-01'],
          borderColor: $theme.spr['interactive-02'],
        };
      }
      return {
        color: $theme.spr['text-02'],
        backgroundColor: $theme.spr['ui-01'],
        borderColor: $theme.spr['interactive-02'],
        ':hover': {
          backgroundColor: $theme.spr['ui-hover'],
        },
        ':focus': {
          backgroundColor: $theme.spr['ui-focus'],
        },
        ':active': {
          backgroundColor: $theme.spr['ui-focus'],
        },
      };
    case KIND.tertiary:
      if ($disabled) {
        return {
          color: $theme.spr['text-04'],
          backgroundColor: $theme.spr['ui-01'],
          borderColor: $theme.spr['interactive-01'],
        };
      }
      return {
        color: $theme.spr['text-04'],
        backgroundColor: $theme.spr['ui-01'],
        borderColor: $theme.spr['interactive-01'],
        ':hover': {
          backgroundColor: $theme.spr['ui-hover'],
        },
        ':focus': {
          backgroundColor: $theme.spr['ui-focus'],
        },
        ':active': {
          backgroundColor: $theme.spr['ui-focus'],
        },
      };
    case KIND.minimal:
      if ($disabled) {
        return {
          color: $theme.spr['text-04'],
          backgroundColor: $theme.spr['ui-01'],
          borderColor: $theme.spr['interactive-01'],
        };
      }
      return {
        color: $theme.spr['text-04'],
        backgroundColor: $theme.spr['ui-01'],
        borderColor: $theme.spr['interactive-01'],
        ':hover': {
          backgroundColor: $theme.spr['ui-hover'],
        },
        ':focus': {
          backgroundColor: $theme.spr['ui-focus'],
        },
        ':active': {
          backgroundColor: $theme.spr['ui-focus'],
        },
      };
    default:
      return {};
  }
}

