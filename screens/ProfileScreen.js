import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';

export default function ProfileScreen() {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      {/* Avatar */}
      <Image
        source={{ uri: 'https://randomuser.me/api/portraits/men/32.jpg' }}
        style={styles.avatar}
      />

      {/* Name & Email */}
      <Text style={styles.name}>Nguyễn Văn A</Text>
      <Text style={styles.email}>nguyenvana@example.com</Text>

      {/* Thông tin */}
      <View style={styles.infoSection}>
        <View style={styles.infoRow}>
          <Text style={styles.infoLabel}>Số điện thoại:</Text>
          <Text style={styles.infoValue}>0123 456 789</Text>
        </View>
        <View style={styles.infoRow}>
          <Text style={styles.infoLabel}>Ngày sinh:</Text>
          <Text style={styles.infoValue}>01/01/1990</Text>
        </View>
        <View style={styles.infoRow}>
          <Text style={styles.infoLabel}>Địa chỉ:</Text>
          <Text style={styles.infoValue}>Hà Nội, Việt Nam</Text>
        </View>
      </View>

      {/* Nút chỉnh sửa/Đăng xuất */}
      <View style={styles.actions}>
        <TouchableOpacity style={[styles.button, styles.editButton]}>
          <Text style={styles.buttonText}>Chỉnh sửa</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.logoutButton]}>
          <Text style={styles.buttonText}>Đăng xuất</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  content: { alignItems: 'center', padding: 16 },
  avatar: { width: 120, height: 120, borderRadius: 60, marginBottom: 16 },
  name: { fontSize: 22, fontWeight: '700', marginBottom: 4 },
  email: { fontSize: 14, color: '#555', marginBottom: 20 },
  infoSection: {
    width: '100%',
    backgroundColor: '#f9f9f9',
    borderRadius: 10,
    padding: 16,
    marginBottom: 24,
  },
  infoRow: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 12 },
  infoLabel: { fontSize: 14, color: '#555' },
  infoValue: { fontSize: 14, fontWeight: '500' },
  actions: { flexDirection: 'row', justifyContent: 'space-between', width: '100%' },
  button: {
    flex: 1,
    paddingVertical: 12,
    marginHorizontal: 5,
    borderRadius: 8,
    alignItems: 'center',
  },
  editButton: { backgroundColor: '#1976D2' },
  logoutButton: { backgroundColor: '#E53935' },
  buttonText: { color: '#fff', fontSize: 14, fontWeight: '600' },
});
