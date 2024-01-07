import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CameraInfoView from '../components/CameraInfoView'
import * as ImagePicker from 'expo-image-picker'
import * as FileSystem from 'expo-file-system'

const tryAPI = async () => {
    try {
        const response = await fetch(
            `http://192.168.0.14:5000/send`
        )
        const json = await response.json()
        // console.log(json.result)
        navigation.navigate('Result', { translatedText: json.result})
        // return json.result
        
    }

    catch (error) {
        console.error(error)
    }
}

const takePhoto = async () => {
    const permissionResult = await ImagePicker.requestCameraPermissionsAsync()

    if (permissionResult.granted === false)
    {
        alert("You've refused to allow this app to access your camera")
        return
    }

    const result = await ImagePicker.launchCameraAsync()

    if (!result.canceled) {
        const uri = result.assets[0].uri
        return uri
    }
}

export default function TakePhotoScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <CameraInfoView info="Press the camera button, then hold the pose for 3 seconds" />
            <Button
                title="Open camera"
                // onPress = {takePhoto}
                onPress={async () => {
                    filePath = await takePhoto()

                    try {
                        const response = await FileSystem.uploadAsync(
                            `http://192.168.0.14:5000/send`,
                            filePath,
                            {
                                httpMethod: 'POST',
                                uploadType: FileSystem.FileSystemUploadType.MULTIPART,
                                fieldName: 'file'
                            }
                        )
                        
                        result = response.body                       
                        navigation.navigate('Result', { translatedText: result})                        
                    }
                
                    catch (error) {
                        console.error(error)
                    }
                }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }
})

// result = JSON.stringify(response)
// console.log(typeof(response.body))
// const response = await fetch(
//     `http://192.168.0.14:5000/send/${filePath}`,
//     {
//         method: 'POST',
//         body: {
//             "filePath": filePath
//         }
//     }
// )
// const json = await response.json()