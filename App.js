import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TextInput, Image } from 'react-native';
import LoginScreen from './app/screens/LoginScreen';
import RegisterScreen from './app/screens/RegisterScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LandingScreen from './app/screens/LandingScreen';
import FrequentTranslationsScreen from './app/screens/FrequentTranslationsScreen';


const Stack = createNativeStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='FrequentTranslations'>
                <Stack.Screen
                    name='Login' 
                    component={LoginScreen}
                />
                
                <Stack.Screen
                    name='Register'
                    component={RegisterScreen}
                />

                <Stack.Screen
                    name='Landing'
                    component={LandingScreen}
                />

                <Stack.Screen
                    name='FrequentTranslations'
                    component={FrequentTranslationsScreen}
                />
            </Stack.Navigator>
        </NavigationContainer>
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
