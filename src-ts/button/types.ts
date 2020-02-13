import * as React from 'react';
import {
  StyletronComponent,
  StyletronComponentInjectedProps,
} from 'styletron-react';
import {Override} from '../../src/overrides';

export interface KIND {
  primary: 'primary';
  secondary: 'secondary';
  tertiary: 'tertiary';
  minimal: 'minimal';
}

export interface SIZE {
  compact: 'compact';
  default: 'default';
  large: 'large';
  mini: 'mini';
}

export interface SHAPE {
  default: 'default';
  pill: 'pill';
  round: 'round';
  square: 'square';
}

export interface ButtonOverrides {
  BaseButton?: Override<any>;
  StartEnhancer?: Override<any>;
  EndEnhancer?: Override<any>;
  LoadingSpinnerContainer?: Override<any>;
  LoadingSpinner?: Override<any>;
}

export interface ButtonProps
  extends StyletronComponentInjectedProps<ButtonProps> {
  href?: string;
  target?: string;
  children?: React.ReactNode;
  disabled?: boolean;
  endEnhancer?: React.ReactNode;
  isLoading?: boolean;
  isSelected?: boolean;
  kind?: KIND[keyof KIND];
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => any;
  overrides?: ButtonOverrides;
  shape?: SHAPE[keyof SHAPE];
  size?: SIZE[keyof SIZE];
  startEnhancer?: React.ReactNode;
  type?: 'submit' | 'reset' | 'button';
}

export type StyledBaseButton = StyletronComponent<any>;
export type StyledStartEnhancer = StyletronComponent<any>;
export type StyledEndEnhancer = StyletronComponent<any>;
export type StyledLoadingSpinner = StyletronComponent<any>;
export type StyledLoadingSpinnerContainer = StyletronComponent<any>;

export type SharedStylePropsT = {
  $kind?: keyof KIND,
  $isSelected?: boolean,
  $shape?: keyof SHAPE,
  $size?: keyof SIZE,
  $isLoading?: boolean,
  $disabled?: boolean,
};
