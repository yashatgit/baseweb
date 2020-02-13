import * as React from 'react';
import {
  StyletronComponent,
  StyletronComponentInjectedProps,
} from 'styletron-react';
import {KIND,SHAPE,SIZE} from './constants'
// @ts-ignore
// import {Override} from '../../src/helpers/overrides';

type Override<T> = any

export interface ButtonOverrides {
  BaseButton?: Override<any>;
  StartEnhancer?: Override<any>;
  EndEnhancer?: Override<any>;
  LoadingSpinnerContainer?: Override<any>;
  LoadingSpinner?: Override<any>;
}

export interface ButtonProps
  extends StyletronComponentInjectedProps<ButtonProps> {
  forwardedRef?:any;
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
  $theme?: any,
  $kind?: KIND[keyof KIND],
  $isSelected?: boolean,
  $shape?: SHAPE[keyof SHAPE],
  $size?: SIZE[keyof SIZE],
  $isLoading?: boolean,
  $disabled?: boolean,
};
