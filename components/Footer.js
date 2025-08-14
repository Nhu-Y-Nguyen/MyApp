import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Footer() {
  return (
    <View style={styles.footer}>
      <Text style={styles.text}>© 2025 My App</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  footer: {
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fafafa',
    borderTopWidth: 1,
    borderTopColor: '#e0e0e0',
  },
  text: {
    fontSize: 12,
    color: '#666',
  },
});
