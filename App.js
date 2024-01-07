import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TextInput, Image } from 'react-native';
import LoginScreen from './app/screens/LoginScreen';
import RegisterScreen from './app/screens/RegisterScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ResultScreen from './app/screens/ResultScreen';
import FrequentTranslationsScreen from './app/screens/FrequentTranslationsScreen';
import TakePhotoScreen from './app/screens/TakePhotoScreen';
// import { client } from "@gradio/client"

const Stack = createNativeStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='Login'>
                <Stack.Screen
                    name='Login' 
                    component={LoginScreen}
                />
                
                <Stack.Screen
                    name='Register'
                    component={RegisterScreen}
                />

                <Stack.Screen
                    name='Result'
                    component={ResultScreen}
                    initialParams={{ translatedText: "Loading..."}}
                />

                <Stack.Screen
                    name='Translations'
                    component={FrequentTranslationsScreen}
                />

                <Stack.Screen
                    name='TakePhoto'
                    component={TakePhotoScreen}
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
