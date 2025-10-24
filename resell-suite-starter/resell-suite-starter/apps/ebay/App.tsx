
import React from 'react';
import { SafeAreaView, View, Text } from 'react-native';
import { Button } from '@resell/ui';

export default function App() {
  const [count, setCount] = React.useState(0);

  return (
    <SafeAreaView style={{ flex: 1, alignItems: 'center', justifyContent: 'center', padding: 20 }}>
      <View style={{ gap: 16, alignItems: 'center' }}>
        <Text style={{ fontSize: 24, fontWeight: '600' }}>ResellSnap – ebay</Text>
        <Button title={`Clicks: ${count}`} onPress={() => setCount(c => c + 1)} />
      </View>
    </SafeAreaView>
  );
}
