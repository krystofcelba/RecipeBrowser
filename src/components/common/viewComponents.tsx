import React from 'react';
import { KeyboardAvoidingView as RNKeyboardAvoidingView, Platform } from 'react-native';
import glamorous from 'glamorous-native';
import namedGlamorous from './namedGlamorous';

import AppTheme from 'src/assets/appTheme';

export const { View } = glamorous;

export const PaddedView = namedGlamorous(View, 'PaddedView')({
  padding: AppTheme.defaultPadding,
});

export const KeyboardAvoidingView = ({ children, ...otherProps }) => (
  <RNKeyboardAvoidingView
    testID="recipesListScreen"
    keyboardVerticalOffset={60}
    behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    {...otherProps}
  >
    {children}
  </RNKeyboardAvoidingView>
);
