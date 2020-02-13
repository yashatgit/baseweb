/*
Copyright (c) 2018-2020 Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import {ButtonProps} from './types';

export function getSharedProps({
  disabled,
  isLoading,
  isSelected,
  kind,
  shape,
  size,
}: ButtonProps) {
  return {
    $disabled: disabled,
    $isLoading: isLoading,
    $isSelected: isSelected,
    $kind: kind,
    $shape: shape,
    $size: size,
  };
}
