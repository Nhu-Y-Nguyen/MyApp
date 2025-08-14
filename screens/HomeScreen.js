import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';

export default function HomeScreen() {
  const posts = [
    {
      id: 1,
      title: 'Mẹo lập trình tiết kiệm thời gian',
      description: 'Một số tips giúp code gọn gàng, tránh bug và rút ngắn thời gian phát triển ứng dụng.',
      image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80', // bàn phím, lập trình
    },
    {
      id: 2,
      title: 'React Native: Bắt đầu từ đâu?',
      description: 'Hướng dẫn từng bước cho người mới bắt đầu với React Native và Expo.',
      image: 'https://images.unsplash.com/photo-1517430816045-df4b7de11d1d?auto=format&fit=crop&w=800&q=80', // laptop, code
    },
    {
      id: 3,
      title: 'Top thư viện nên dùng trong React Native',
      description: 'Danh sách các thư viện hữu ích giúp tăng tốc phát triển ứng dụng mobile.',
      image: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=800&q=80', // lập trình teamwork
    },
  ];

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <Text style={styles.header}>Tin tức & Bài viết mới</Text>
      {posts.map((post) => (
        <TouchableOpacity key={post.id} style={styles.card}>
          <Image source={{ uri: post.image }} style={styles.cardImage} resizeMode="cover" />
          <View style={styles.cardContent}>
            <Text style={styles.cardTitle}>{post.title}</Text>
            <Text style={styles.cardDescription}>{post.description}</Text>
          </View>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f5f5f5' },
  content: { padding: 16 },
  header: { fontSize: 22, fontWeight: '700', marginBottom: 16 },
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    marginBottom: 16,
    overflow: 'hidden',
    elevation: 3,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 2 },
  },
  cardImage: { width: '100%', height: 180, backgroundColor: '#eee' },
  cardContent: { padding: 12 },
  cardTitle: { fontSize: 16, fontWeight: '700', marginBottom: 6 },
  cardDescription: { fontSize: 14, color: '#555' },
});
