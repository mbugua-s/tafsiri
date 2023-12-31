import { StyleSheet, Text, View, Modal, TouchableWithoutFeedback } from 'react-native'
import React from 'react'

export default function TranslationModal({ children, visible, transparent, dismiss, margin }) {
    return (
        <Modal
            visible={visible}
            transparent={transparent}
            onRequestClose={dismiss}
        >
            <TouchableWithoutFeedback onPress={dismiss}>
                <View style = {styles.modalOverlay} />
            </TouchableWithoutFeedback>

            <View
                style = {{...styles.modalContent, margin: margin}}
            >
                {children}
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    modalContent: {
        // justifyContent: "center",
        // top: "20%",
        // alignSelf: 'center'
        // marginVertical: "100%"
    },

    modalOverlay: {
        position: 'absolute',
        flex: 1,
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: "rgba(0, 0, 0, 0.5)"
    }
})