import { StyleSheet, Text, View, Pressable } from 'react-native'
import React from 'react'
import colours from '../config/colours'

export default function FrequentTranslationsScreen({ navigation }) {
    return (
        <View style = {styles.container}>
            <Pressable
                style={styles.button}
                onPress={() => navigation.navigate('Register')}
            >
                <Text style = {styles.buttonText}>Add new</Text>
            </Pressable>

            <View style = {styles.translationContainer}>
                <Pressable
                    style={styles.translation}
                    onPress={() => navigation.navigate('Login')}
                >
                    <Text style = {styles.translationText}>Sample Frequent Translation</Text>
                </Pressable>

                <Pressable
                    style={styles.translation}
                    onPress={() => navigation.navigate('Login')}
                >
                    <Text style = {styles.translationText}>Sample Frequent Translation</Text>
                </Pressable>

                <Pressable
                    style={styles.translation}
                    onPress={() => navigation.navigate('Login')}
                >
                    <Text style = {styles.translationText}>Sample Frequent Translation</Text>
                </Pressable>

                <Pressable
                    style={styles.translation}
                    onPress={() => navigation.navigate('Login')}
                >
                    <Text style = {styles.translationText}>Sample Frequent Translation</Text>
                </Pressable>
                
                <Pressable
                    style={styles.translation}
                    onPress={() => navigation.navigate('Login')}
                >
                    <Text style = {styles.translationText}>Sample Frequent Translation</Text>
                </Pressable>

                <Pressable
                    style={styles.translation}
                    onPress={() => navigation.navigate('Login')}
                >
                    <Text style = {styles.translationText}>Sample Frequent Translation</Text>
                </Pressable>

                <Pressable
                    style={styles.translation}
                    onPress={() => navigation.navigate('Login')}
                >
                    <Text style = {styles.translationText}>Sample Frequent Translation</Text>
                </Pressable>

                <Pressable
                    style={styles.translation}
                    onPress={() => navigation.navigate('Login')}
                >
                    <Text style = {styles.translationText}>Sample Frequent Translation</Text>
                </Pressable>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor: "#525453"
    },

    button: {
        backgroundColor: colours.primary,
        width: "40%",
        height: 40,
        margin: 10,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10
    },
    
    buttonText: {
        color: colours.black,
    },
    
    translationContainer: {
        flex: 1,
        width: "100%",
        flexWrap: 'wrap',
        flexDirection: 'row',
        justifyContent: 'space-around',
        // backgroundColor: '#bbbdbb'
    },
    
    translation: {
        backgroundColor: colours.secondary,
        width: "40%",
        height: "15%",
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        margin: 10
        // flex: 1
    },

    translationText: {
        color: colours.white,
        fontSize: 14
    }
})