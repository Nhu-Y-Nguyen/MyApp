import React, { useState } from 'react';
import { View, Text, StyleSheet, Switch, TouchableOpacity, ScrollView } from 'react-native';

export default function SettingsScreen() {
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const [darkModeEnabled, setDarkModeEnabled] = useState(false);

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <Text style={styles.title}>Cài đặt ứng dụng</Text>

      {/* Trạng thái thông báo */}
      <View style={styles.settingRow}>
        <Text style={styles.settingText}>Bật thông báo</Text>
        <Switch
          value={notificationsEnabled}
          onValueChange={setNotificationsEnabled}
        />
      </View>

      {/* Chế độ xem */}
      <View style={styles.settingRow}>
        <Text style={styles.settingText}>Chế độ tối</Text>
        <Switch
          value={darkModeEnabled}
          onValueChange={setDarkModeEnabled}
        />
      </View>

      {/* Cài đặt tài khoản */}
      <TouchableOpacity style={styles.settingRow}>
        <Text style={styles.settingText}>Quản lý tài khoản</Text>
      </TouchableOpacity>

      {/* Cài đặt quyền riêng tư */}
      <TouchableOpacity style={styles.settingRow}>
        <Text style={styles.settingText}>Cài đặt quyền riêng tư</Text>
      </TouchableOpacity>

      {/* Giới thiệu ứng dụng */}
      <TouchableOpacity style={styles.settingRow}>
        <Text style={styles.settingText}>Giới thiệu ứng dụng</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  content: { padding: 16 },
  title: { fontSize: 22, fontWeight: '700', marginBottom: 20 },
  settingRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 14,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  settingText: { fontSize: 16, color: '#333' },
});
