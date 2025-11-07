import React from 'react';
import { StyleSheet, TextInputProps } from 'react-native';
import { Input } from './Input';

export const TextArea: React.FC<TextInputProps> = props => (
  <Input
    {...props}
    multiline
    numberOfLines={props.numberOfLines ?? 4}
    style={[styles.textArea, props.style]}
  />
);

const styles = StyleSheet.create({
  textArea: {
    textAlignVertical: 'top',
  },
});

