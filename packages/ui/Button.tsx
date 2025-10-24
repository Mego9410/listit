
import React from 'react';
import { Pressable, Text } from 'react-native';

type Props = { title: string; onPress?: () => void };

export const Button: React.FC<Props> = ({ title, onPress }) => {
  return (
    <Pressable
      onPress={onPress}
      style={{ paddingVertical: 12, paddingHorizontal: 18, borderRadius: 10, borderWidth: 1 }}
    >
      <Text style={{ fontSize: 16 }}>{title}</Text>
    </Pressable>
  );
};
