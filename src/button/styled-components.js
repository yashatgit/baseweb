/*
Copyright (c) 2018-2020 Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
// @flow
import {styled} from '../styles/index.js';
import {KIND, SIZE, SHAPE} from './constants.js';
import type {SharedStylePropsT} from './types.js';

export const BaseButton = styled<SharedStylePropsT>(
  'button',
  ({$theme, $size, $kind, $shape, $isLoading, $isSelected, $disabled}) => ({
    display: 'inline-flex',
    // need to maintain button width while showing loading spinner
    flexDirection: $isLoading ? 'column' : 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: '1px',
    borderStyle: 'solid',
    textDecoration: 'none',
    outline: 'none',
    WebkitAppearance: 'none',
    transitionProperty: 'background',
    transitionDuration: $theme.animation.timing100,
    transitionTimingFunction: $theme.animation.easeOutCurve,
    cursor: $disabled ? 'not-allowed' : 'pointer',
    opacity: $disabled ? '0.6' : '1',
    lineHeight: '1',
    ':disabled': {
      cursor: 'not-allowed',
      opacity: '0.6'
    },
    marginLeft: 0,
    marginTop: 0,
    marginRight: 0,
    marginBottom: 0,
    ...getFontStyles({$theme, $size}),
    ...getBorderRadiiStyles({$theme, $size, $shape}),
    ...getPaddingStyles({$theme, $size, $shape}),
    // Kind style override
    ...getKindStyles({$theme, $kind, $isLoading, $isSelected, $disabled}),
  }),
);

export const EndEnhancer = styled<SharedStylePropsT>('div', ({$theme}) => ({
  display: 'flex',
  [$theme.direction === 'rtl' ? 'marginRight' : 'marginLeft']: $theme.sizing
    .scale500,
}));

export const StartEnhancer = styled<SharedStylePropsT>('div', ({$theme}) => ({
  display: 'flex',
  [$theme.direction === 'rtl' ? 'marginLeft' : 'marginRight']: $theme.sizing
    .scale500,
}));

export const LoadingSpinnerContainer = styled('div', {
  position: 'static',
});

export const LoadingSpinner = styled<SharedStylePropsT>(
  'div',
  ({$theme, $kind, $disabled}) => {
    const {foreground, background} = getLoadingSpinnerColors({
      $theme,
      $kind,
      $disabled,
    });
    return {
      height: $theme.sizing.scale600,
      width: $theme.sizing.scale600,
      borderTopLeftRadius: '50%',
      borderTopRightRadius: '50%',
      borderBottomRightRadius: '50%',
      borderBottomLeftRadius: '50%',
      borderLeftStyle: 'solid',
      borderTopStyle: 'solid',
      borderRightStyle: 'solid',
      borderBottomStyle: 'solid',
      borderLeftWidth: $theme.sizing.scale0,
      borderTopWidth: $theme.sizing.scale0,
      borderRightWidth: $theme.sizing.scale0,
      borderBottomWidth: $theme.sizing.scale0,
      borderTopColor: foreground,
      borderLeftColor: background,
      borderBottomColor: background,
      borderRightColor: background,
      animationDuration: $theme.animation.timing700,
      animationTimingFunction: 'linear',
      animationIterationCount: 'infinite',
      animationName: {
        to: {
          transform: 'rotate(360deg)',
        },
        from: {
          transform: 'rotate(0deg)',
        },
      },
    };
  },
);

function getLoadingSpinnerColors({$theme, $kind, $disabled}) {
  if ($disabled) {
    return {
      foreground: $theme.colors.buttonDisabledSpinnerForeground,
      background: $theme.colors.buttonDisabledSpinnerBackground,
    };
  }
  switch ($kind) {
    case KIND.secondary: {
      return {
        foreground: $theme.colors.buttonSecondarySpinnerForeground,
        background: $theme.colors.buttonSecondarySpinnerBackground,
      };
    }
    case KIND.tertiary: {
      return {
        foreground: $theme.colors.buttonTertiarySpinnerForeground,
        background: $theme.colors.buttonTertiarySpinnerBackground,
      };
    }
    case KIND.minimal: {
      return {
        foreground: $theme.colors.buttonMinimalSpinnerForeground,
        background: $theme.colors.buttonMinimalSpinnerBackground,
      };
    }
    case KIND.primary:
    default: {
      return {
        foreground: $theme.colors.buttonPrimarySpinnerForeground,
        background: $theme.colors.buttonPrimarySpinnerBackground,
      };
    }
  }
}

function getBorderRadiiStyles({$theme, $size, $shape}) {
  let value = $theme.borders.buttonBorderRadius;

  if($size === SIZE.large){
    value = '0.4rem'
  } else {
    value = '0.2rem'
  }

  return {
    borderTopRightRadius: value,
    borderBottomRightRadius: value,
    borderTopLeftRadius: value,
    borderBottomLeftRadius: value,
  };
}

function getFontStyles({$theme, $size}) {
  switch ($size) {
    case SIZE.mini:
      return $theme.typography.font150;
    case SIZE.compact:
      return { fontSize : '1.2rem' };
    case SIZE.large:
      return { fontSize : '1.3rem' };;
    default:
      return { fontSize : '1.2rem' };;
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
        paddingLeft: iconShape
          ? '1.2rem'
          : '1.2rem',
        paddingRight: iconShape
          ? '1.2rem'
          : '1.2rem',
      };
    case SIZE.large:
      return {
        paddingTop: '0.9rem',
        paddingBottom: '0.9rem',
        paddingLeft: iconShape
          ? '1.6rem'
          : '1.6rem',
        paddingRight: iconShape
          ? '1.6rem'
          : '1.6rem',
      };
    default:
      return {
        paddingTop: '0.55rem',
        paddingBottom: '0.55rem',
        paddingLeft: iconShape
          ? '1.2rem'
          : '1.2rem',
        paddingRight: iconShape
          ? '1.2rem'
          : '1.2rem',
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
