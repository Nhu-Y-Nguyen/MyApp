import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

export default function MenuBar({ route, setRoute }) {
  const items = ['Home', 'Profile', 'Settings'];
  return (
    <View style={styles.menu}>
      {items.map((it) => {
        const active = route === it;
        return (
          <TouchableOpacity
            key={it}
            onPress={() => setRoute(it)}
            style={[styles.button, active && styles.activeButton]}
          >
            <Text style={[styles.buttonText, active && styles.activeText]}>{it}</Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  menu: {
    height: 56,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#eeeeee',
  },
  button: {
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 6,
  },
  activeButton: {
    backgroundColor: '#1976D2',
  },
  buttonText: {
    fontSize: 16,
    color: '#333',
  },
  activeText: {
    color: '#fff',
    fontWeight: '600',
  },
});
