// import các thư viện, màn hình 
import React, { useState } from 'react';
import { SafeAreaView, View, StyleSheet } from 'react-native';
import Header from './components/Header';
import MenuBar from './components/MenuBar';
import Footer from './components/Footer';
import HomeScreen from './screens/HomeScreen';
import ProfileScreen from './screens/ProfileScreen';
import SettingsScreen from './screens/SettingsScreen';

export default function App() {
  // route lưu tên màn hiện tại: 'Home' | 'Profile' | 'Settings'
  const [route, setRoute] = useState('Home');

  const renderContent = () => {
    switch (route) {
      case 'Profile':
        return <ProfileScreen />;
      case 'Settings':
        return <SettingsScreen />;
      default:
        return <HomeScreen />;
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header title="My App" />
      <MenuBar route={route} setRoute={setRoute} />
      <View style={styles.content}>
        {renderContent()}
      </View>
      <Footer />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  content: { flex: 1, padding: 16 },
});
