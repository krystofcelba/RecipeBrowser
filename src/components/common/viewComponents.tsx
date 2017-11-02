import React from 'react';
import { KeyboardAvoidingView as RNKeyboardAvoidingView, Platform } from 'react-native';
import glamorous from 'glamorous-native';
import namedGlamorous from './namedGlamorous';

import AppTheme from 'src/assets/appTheme';

export const { View, TouchableOpacity } = glamorous;

export const PaddedView = namedGlamorous(View, 'PaddedView')({
  padding: AppTheme.defaultPadding,
});

export const KeyboardAvoidingView = ({ children, ...otherProps }) => (
  <RNKeyboardAvoidingView
    keyboardVerticalOffset={64}
    behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    {...otherProps}
  >
    {children}
  </RNKeyboardAvoidingView>
);
