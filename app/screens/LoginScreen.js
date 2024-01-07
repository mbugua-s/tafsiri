import { Text, StyleSheet, View } from 'react-native'
import React, { Component, useState } from 'react'
import colours from '../config/colours'
import { TextInput } from 'react-native'
import { Button } from 'react-native'
import { Pressable } from 'react-native'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth"
import { fb_app, auth } from '../config/firebaseConfig'

export default function LoginScreen({ navigation }) {
    const [email, setEmail ] = useState("test@gmail.com")
    const [password, setPassword] = useState("12345678")
    
    return (
        <View style = {styles.container}>
            <Text style = {styles.title}>Tafsiri</Text>
            <Text style = {styles.description}>Log in to continue</Text>

            <View style = {styles.inputView}>
                <TextInput
                    placeholder='Email'
                    placeholderTextColor={colours.black}
                    style={styles.inputText}
                    value={email}
                    onChangeText={setEmail}
                ></TextInput>
            </View>

            <View style = {styles.inputView}>
                <TextInput
                    placeholder='Password'
                    secureTextEntry
                    placeholderTextColor={colours.black}
                    style={styles.inputText}
                    value={password}
                    onChangeText={setPassword}
                ></TextInput>
            </View>

            <View style = {styles.buttonArea}>
                <Pressable
                    style={styles.button}
                    onPress={async () => {
                        try {
                            console.log("Login button pressed")
                            const userCredential = await signInWithEmailAndPassword(auth, email, password)
                            const user = userCredential.user
                            console.log("User signed in")
                            navigation.navigate('TakePhoto')
                        }

                        catch (error) {
                            console.error(error)
                        }
                    }}
                >
                    <Text style = {styles.buttonText}>Log In</Text>                    
                </Pressable>
                
                <Pressable
                    style={[styles.button, styles.registerButton]}
                    onPress={() => navigation.navigate('Register')}
                >
                    <Text style = {styles.buttonText}>Register</Text>
                </Pressable>
            </View>
            
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        justifyContent: 'center',
        alignItems: "center",
    },
    
    title: {
        color: colours.primary,
        fontSize: 50,
        fontWeight: '700',
        bottom: "7%"
    },
    
    description: {
        fontSize: 17,
        bottom: '5%',
        
    },

    inputView: {
        width: "80%",
        backgroundColor: colours.textInputBackgroundColor,
        borderRadius: 15,
        height: 50,
        marginBottom: 20,
        justifyContent: "center",
        padding: 20
    },

    inputText: {
        height: 50,
        color: colours.black
    },

    buttonArea: {
        alignItems: 'center',
        // flex: 1,
        width: '100%'
        // top: '10%'
    },

    button: {
        backgroundColor: colours.primary,
        width: "50%",
        height: 40,
        margin: 10,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10
    },

    buttonText: {
        color: colours.white,
        
    },

    registerButton: {
        backgroundColor: colours.secondary
    }
})