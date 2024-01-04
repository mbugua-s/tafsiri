import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TextInput, Image } from 'react-native';
import LoginScreen from './app/screens/LoginScreen';
import RegisterScreen from './app/screens/RegisterScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ResultScreen from './app/screens/ResultScreen';
import FrequentTranslationsScreen from './app/screens/FrequentTranslationsScreen';
// import { client } from "@gradio/client"

const Stack = createNativeStackNavigator();

const tryAPI = async () => {
    try {
        const response = await fetch(
            `http://192.168.0.14:5000/send`
        )
        const json = await response.json()
        console.log(json)
    }

    catch (error) {
        console.error(error)
    }
}

// tryAPI()

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='Result'>
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
                />

                <Stack.Screen
                    name='Translations'
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
