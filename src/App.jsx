import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './screens/HomeScreen';
import { NavigationContainer } from '@react-navigation/native';
import RootNavigator from './navigation/RootNavigation';

export default function App() {
  return (
    <>
    <StatusBar style='auto' />
    <NavigationContainer>
    <RootNavigator/>
    </NavigationContainer>
    </>
  )
  
}

