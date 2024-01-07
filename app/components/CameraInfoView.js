import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import colours from '../config/colours'

export default function CameraInfoView(props) {
    return (
        <View style = {styles.background}>
            <Text style = {styles.info}>{props.info}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    background: {
        height: "10%",
        width: "90%",
        backgroundColor: colours.cameraInfoViewBackgroundColor,
        borderRadius: 18,
        justifyContent: "center",
        alignItems: "center",
        position: "absolute",
        top: "10%"
    },

    info: {
        textAlign: "center"
    }
})