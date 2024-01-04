import { StyleSheet, Text, View, Image, Dimensions, Pressable } from 'react-native'
import React from 'react'
import colours from '../config/colours'

const width = Dimensions.get("window").width
const height = Dimensions.get("window").height

export default function LandingScreen() {
    return (
        <View style = {styles.container}>
            <Image 
                style = {styles.translationImage}
                source = {require('../assets/IMG_2444.jpeg')}
            />

            <View style={styles.translationContainer}>
                <Text style = {styles.translationText}>"Happy"</Text>
                <Pressable
                    style={styles.button}
                >
                    <Text style = {styles.buttonText}>Play Audio</Text>
                </Pressable>

                <View style = {styles.continueStopButtons}>
                    <Pressable
                        style={{...styles.button, backgroundColor: colours.secondary}}
                    >
                        <Text style = {styles.buttonText}>Continue</Text>
                    </Pressable>
                    
                    <Pressable
                        style={{...styles.button, backgroundColor: colours.tertiary}}
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