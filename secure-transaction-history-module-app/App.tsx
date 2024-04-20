import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import LoginScreen  from './src/screens/LoginScreen';
import HomeScreen  from './src/screens/HomeScreen';
import ScreenNavigator from './src/navigation/ScreenNavigator';

export default function App() {
  return (
    <ScreenNavigator/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
