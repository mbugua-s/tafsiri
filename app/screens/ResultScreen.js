import { StyleSheet, Text, View, Image, Dimensions, Pressable } from 'react-native'
import React, { useEffect, useState } from 'react'
import colours from '../config/colours'
import { Audio } from 'expo-av'

const width = Dimensions.get("window").width

export default function ResultScreen({ route, navigation }) {
    const [sound, setSound] = useState()

    async function playSound()
    {
        console.log('Loading sound')
        const { sound } = await Audio.Sound.createAsync(require('../assets/audio/speech.mp3'))
        setSound(sound)

        console.log('Playing sound')
        await sound.playAsync()
    }

    useEffect(() => {
        return sound
            ? () => {
                console.log('Unloading sound')
                sound.unloadAsync()
            }
            : undefined;
    }, [sound])


    const { translatedText } = route.params
    // console.log(translatedText)

    return (
        <View style = {styles.container}>
            <Image 
                style = {styles.translationImage}
                source = {require('../assets/downloads/upload.jpeg')}
            />

            <View style={styles.translationContainer}>
                <Text style = {styles.translationText}>{JSON.stringify(translatedText)}</Text>
                {/* <Text style = {styles.translationText}>"Me"</Text> */}
                <Pressable
                    style={styles.button}
                    onPress = {playSound}
                >
                    <Text
                        style={styles.buttonText}>Play Audio</Text>
                </Pressable>

                <View style = {styles.continueStopButtons}>
                    <Pressable
                        style={{ ...styles.button, backgroundColor: colours.secondary }}
                        onPress={() => navigation.navigate('TakePhoto')}
                    >
                        <Text style = {styles.buttonText}>Continue</Text>
                    </Pressable>
                    
                    <Pressable
                        style={{ ...styles.button, backgroundColor: colours.tertiary }}
                        onPress={() => navigation.navigate('Translations')}
                    >
                        <Text style = {styles.buttonText}>Stop</Text>
                    </Pressable>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center'
    },

    translationImage: {
        width: width,
        height: "70%",
        // flex: 1
    },

    translationContainer: {
        alignSelf: "flex-end",
        backgroundColor: colours.white,
        width: "100%",
        flex: 1,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        position: "absolute",
        bottom: "0%",
        height: "40%",
        justifyContent: "center",
        alignItems: "center"
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
        fontSize: 15
    },

    continueStopButtons: {
        flexDirection: "row",
        justifyContent: "center"
    },

    translationText: {
        fontSize: 25,
        fontWeight: "600",
        fontStyle: "italic",
        marginBottom: 10
    }
})