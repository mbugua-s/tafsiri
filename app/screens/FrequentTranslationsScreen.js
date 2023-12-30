import { StyleSheet, Text, View, Pressable, Modal } from 'react-native'
import React, { useState } from 'react'
import colours from '../config/colours'
import TranslationModal from '../components/TranslationModal'

export default function FrequentTranslationsScreen({ navigation }) {
    const [visible, setVisible] = useState(false)

    const openPopup = () => {
        setVisible(true)
    }

    const closePopup = () => {
        setVisible(false)
    }
    
    return (
        <View style = {styles.container}>
            <Pressable
                style={styles.button}
                onPress={openPopup}
            >
                <Text style = {styles.buttonText}>Add new</Text>
            </Pressable>

            <TranslationModal
                visible={visible}
                transparent={true}
                dismiss={closePopup}
                margin = {"25%"}
            >
                <View style = {styles.popupContent}>
                    <Text style = {{fontSize: 18}}>Popup opened!</Text>
                </View>
            </TranslationModal>

            <View style = {styles.translationContainer}>
                <Pressable
                    style={styles.translation}
                    onPress={openPopup}
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
    },

    popupContent: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "#fff",
        borderColor: "#000",
        borderWidth: 1,
        borderRadius: 15,
        height: 150
    }
})